#!/usr/bin/env python3
"""Vesna QR — Print PNG Generator · 300 DPI"""

import os, sys, subprocess

def pip(pkg):
    subprocess.check_call([sys.executable, "-m", "pip", "install", pkg, "-q"])

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    pip("Pillow"); from PIL import Image, ImageDraw, ImageFont

try:
    import qrcode as qrlib
except ImportError:
    pip("qrcode[pil]"); import qrcode as qrlib

# ── Constants ─────────────────────────────────────────────
URL     = "https://vesna-affidavit.vercel.app"
DPI     = 300
PX_MM   = DPI / 25.4

LOGO    = os.path.join(os.path.dirname(__file__), "..", "logo.png")
OUT     = os.path.join(os.path.dirname(__file__), "print")
os.makedirs(OUT, exist_ok=True)

PINK_A  = (255, 216, 232)
PINK_B  = (255, 189, 208)
INK     = (42,  26,  30)
ROSE_D  = (168, 61,  99)
WHITE   = (255, 255, 255)
PAGE_BG = (247, 239, 243)

SERIF = [
    "/System/Library/Fonts/Supplemental/Georgia.ttf",
    "/System/Library/Fonts/Supplemental/Times New Roman.ttf",
]
SANS = [
    "/System/Library/Fonts/Helvetica.ttc",
    "/System/Library/Fonts/Geneva.ttf",
    "/System/Library/Fonts/SFNSText.ttf",
]

# ── Font loader ───────────────────────────────────────────
def F(size, serif=True):
    size = max(6, int(round(size)))
    paths = SERIF if serif else SANS
    for p in paths:
        if os.path.exists(p):
            try:
                return ImageFont.truetype(p, size)
            except Exception:
                continue
    return ImageFont.load_default()

# ── QR code ───────────────────────────────────────────────
def make_qr(px):
    px = max(64, px)
    q = qrlib.QRCode(error_correction=qrlib.constants.ERROR_CORRECT_H,
                     box_size=10, border=1)
    q.add_data(URL)
    q.make(fit=True)
    img = q.make_image(fill_color=INK, back_color=WHITE).convert("RGBA")
    return img.resize((px, px), Image.LANCZOS)

# ── Logo ──────────────────────────────────────────────────
def load_logo(h):
    h = max(10, h)
    if not os.path.exists(LOGO):
        return None
    try:
        lg = Image.open(LOGO).convert("RGBA")
        w  = int(lg.width * h / lg.height)
        return lg.resize((w, h), Image.LANCZOS)
    except Exception:
        return None

# ── Card gradient ─────────────────────────────────────────
def gradient_image(w, h):
    layer = Image.new("RGBA", (w, h), (255, 255, 255, 255))
    draw  = ImageDraw.Draw(layer)
    for x in range(w):
        t = x / max(w - 1, 1)
        r = int(PINK_A[0] + (PINK_B[0] - PINK_A[0]) * t)
        g = int(PINK_A[1] + (PINK_B[1] - PINK_A[1]) * t)
        b = int(PINK_A[2] + (PINK_B[2] - PINK_A[2]) * t)
        draw.line([(x, 0), (x, h)], fill=(r, g, b, 255))
    return layer

# ── Rounded mask ─────────────────────────────────────────
def rounded_mask(w, h, r):
    mask = Image.new("L", (w, h), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, w - 1, h - 1],
                                           radius=max(1, r), fill=255)
    return mask

# ── Card renderer ─────────────────────────────────────────
def render(page_w, page_h, lang):
    # All compositing in RGBA; convert to RGB at the very end
    canvas = Image.new("RGBA", (page_w, page_h), (*PAGE_BG, 255))

    # ── Card dimensions ───────────────────────────────────
    cw = int(page_w * 0.88)
    ch = int(cw * 0.495)
    if ch > int(page_h * 0.86):
        ch = int(page_h * 0.86)
        cw = int(ch / 0.495)
    cx = (page_w - cw) // 2
    cy = (page_h - ch) // 2
    cr = max(4, int(min(cw, ch) * 0.04))

    # ── Drop shadow ───────────────────────────────────────
    shadow = Image.new("RGBA", (page_w, page_h), (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    for i in range(20, 0, -1):
        a = int((20 - i) * 1.8)
        sd.rounded_rectangle([cx - i, cy + i, cx + cw + i, cy + ch + i],
                             radius=cr + i, fill=(*INK, a))
    canvas = Image.alpha_composite(canvas, shadow)

    # ── Card gradient background ──────────────────────────
    card = gradient_image(cw, ch)
    mask = rounded_mask(cw, ch, cr)
    canvas.paste(card, (cx, cy), mask)

    draw = ImageDraw.Draw(canvas, "RGBA")

    # ── Panel split 60/40 ─────────────────────────────────
    lp_w = int(cw * 0.595)
    rp_x = cx + lp_w + 1
    rp_w = cw - lp_w - 1

    # Right panel white tint
    rt = Image.new("RGBA", (rp_w, ch), (255, 255, 255, 51))
    canvas.paste(rt, (rp_x, cy), rt)

    # Divider
    div_x = cx + lp_w
    draw.line([(div_x, cy + int(ch * 0.14)), (div_x, cy + int(ch * 0.86))],
              fill=(*INK, 97), width=max(1, int(min(cw, ch) * 0.001)))

    # ── Font scaling ──────────────────────────────────────
    # s = cw / 820  maps CSS-px sizes to print-px sizes.
    # Derivation: reference card is 820 CSS px wide.
    # At 300 DPI the card is `cw` px wide.
    # Since both axes scale by DPI/96, DPI cancels and s = cw / 820.
    s = cw / 820.0

    f_ey   = F(9  * s, serif=False)
    f_h    = F(35 * s, serif=True)
    f_body = F(13 * s, serif=False)
    f_foot = F(9  * s, serif=False)
    f_lbl  = F(12 * s, serif=False)
    f_url  = F(9  * s, serif=False)

    lh   = max(1, int(35 * s * 1.15))   # headline line height
    bl_h = max(1, int(13 * s * 1.65))   # body line height (tightened)

    # ── Anchors ───────────────────────────────────────────
    lpad   = cx + int(lp_w * 0.11)
    logo_y = cy + int(ch * 0.13)
    foot_y = cy + ch - int(ch * 0.14)

    # ── Logo ─────────────────────────────────────────────
    lg_h = max(10, int(ch * 0.095))
    logo = load_logo(lg_h)
    if logo:
        canvas.paste(logo, (lpad, logo_y), logo)
    else:
        draw.text((lpad, logo_y), "Vesna",
                  font=F(max(6, int(lg_h * 0.65)), serif=True),
                  fill=(*INK, 255))

    # ── Vertically center copy block ──────────────────────
    ey_h  = max(1, int(9 * s * 1.4))
    total = (ey_h + int(ch * 0.028) +
             3 * lh + int(ch * 0.015) +
             max(1, int(s)) + int(ch * 0.025) +
             3 * bl_h)
    avail  = foot_y - (logo_y + lg_h + int(ch * 0.06))
    copy_y = logo_y + lg_h + int(ch * 0.06) + max(0, (avail - total) // 2)

    # ── Eyebrow ───────────────────────────────────────────
    ey = "KLIENTSKÝ PORTÁL" if lang == "cz" else "CLIENT PORTAL"
    draw.text((lpad, copy_y), ey, font=f_ey, fill=(*INK, 153))
    copy_y += ey_h + int(ch * 0.028)

    # ── Headline (3 lines, middle italic-colored) ─────────
    if lang == "cz":
        lines = [("Vyplňte", INK), ("prohlášení", ROSE_D), ("před návštěvou", INK)]
    else:
        lines = [("Complete your", INK), ("declaration", ROSE_D), ("before your visit", INK)]

    for txt, col in lines:
        draw.text((lpad, copy_y), txt, font=f_h, fill=(*col, 255))
        copy_y += lh
    copy_y += int(ch * 0.015)

    # ── Accent bar ────────────────────────────────────────
    bar_len = max(4, int(lp_w * 0.13))
    bar_h   = max(1, int(s))
    draw.line([(lpad, copy_y), (lpad + bar_len, copy_y)],
              fill=(*INK, 89), width=bar_h)
    copy_y += bar_h + int(ch * 0.025)

    # ── Body text ─────────────────────────────────────────
    if lang == "cz":
        body_lines = ["Naskenujte kód svým telefonem,",
                      "vyplňte formulář a podepište souhlas",
                      "— vše za pár minut."]
    else:
        body_lines = ["Scan the code with your phone,",
                      "fill in the form and sign your consent",
                      "— done in a few minutes."]

    for bl in body_lines:
        draw.text((lpad, copy_y), bl, font=f_body, fill=(*INK, 153))
        copy_y += bl_h

    # ── Footer ────────────────────────────────────────────
    fl_h = max(1, int(9 * s * 1.55))
    draw.text((lpad, foot_y),          "Náměstí Míru 18, Praha 2",
              font=f_foot, fill=(*INK, 89))
    draw.text((lpad, foot_y + fl_h),   "vesnatattoo.com",
              font=f_foot, fill=(*INK, 89))

    # ── QR code ───────────────────────────────────────────
    qr_s  = max(48, int(min(rp_w, ch) * 0.54))
    fp    = max(4, int(qr_s * 0.075))
    fw    = qr_s + fp * 2
    fh    = qr_s + fp * 2
    fr    = max(4, int(fw * 0.09))
    fx    = rp_x + (rp_w - fw) // 2
    fy_qr = cy + ch // 2 - fh // 2 - int(ch * 0.03)
    fy_qr = max(cy + int(ch * 0.08), fy_qr)   # clamp to card

    # Frame shadow
    for i in range(14, 0, -1):
        a = int((14 - i) * 2.8)
        draw.rounded_rectangle([fx - i, fy_qr + i, fx + fw + i, fy_qr + fh + i],
                               radius=fr + i, fill=(*INK, a))

    # White frame
    draw.rounded_rectangle([fx, fy_qr, fx + fw, fy_qr + fh],
                           radius=fr, fill=(*WHITE, 255))

    # QR image
    qr = make_qr(qr_s)
    canvas.paste(qr, (fx + fp, fy_qr + fp), qr)

    # Label below QR
    ly  = fy_qr + fh + max(1, int(ch * 0.030))
    lbl = "Klientské prohlášení" if lang == "cz" else "Client Declaration"
    mid = rp_x + rp_w // 2
    draw.text((mid, ly), lbl,
              font=f_lbl, fill=(*INK, 255), anchor="mt")
    draw.text((mid, ly + max(1, int(12 * s * 1.5))),
              "vesna-affidavit.vercel.app",
              font=f_url, fill=(*INK, 153), anchor="mt")

    return canvas.convert("RGB")


# ── Formats ───────────────────────────────────────────────
def mm(v):
    return int(round(v * PX_MM))

FORMATS = [
    ("a4-landscape",  mm(297), mm(210)),
    ("a4-portrait",   mm(210), mm(297)),
    ("a5-landscape",  mm(210), mm(148)),
    ("a5-portrait",   mm(148), mm(210)),
    ("square-150mm",  mm(150), mm(150)),
    ("business-card", mm(90),  mm(55) ),
]

LANGS = ["cz", "en"]

# ── Run ───────────────────────────────────────────────────
print(f"\nVesna QR Print Export  ·  {DPI} DPI\n{'─' * 44}")
for lang in LANGS:
    for name, W, H in FORMATS:
        fname = f"vesna-qr-{lang}-{name}.png"
        fpath = os.path.join(OUT, fname)
        print(f"  {fname}  ({W}×{H}px) ...", end="", flush=True)
        page  = render(W, H, lang)
        page.save(fpath, "PNG", dpi=(DPI, DPI))
        print(" ✓")

print(f"\n  Готово → {OUT}\n")
