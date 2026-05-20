#!/usr/bin/env python3
"""Petal Archive — Visual Canvas Generator (fast version)"""
import os, sys

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    os.system("pip3 install Pillow -q")
    from PIL import Image, ImageDraw, ImageFont

W, H = 1600, 1000

# ── Colors ──────────────────────────────────────────────
CREAM     = (250, 245, 240)
BLUSH     = (255, 228, 237)
ROSE      = (206, 86, 124)
TEXT_DARK = (42, 26, 30)
TEXT_SOFT = (138, 122, 120)
WHITE     = (255, 255, 255)

# ── Background: horizontal strip gradient (fast) ──────
img = Image.new("RGB", (W, H), CREAM)
draw = ImageDraw.Draw(img, "RGBA")

for y in range(H):
    t = y / H
    # Warm blush at top → cream at bottom
    r = int(BLUSH[0] + (CREAM[0] - BLUSH[0]) * t)
    g = int(BLUSH[1] + (CREAM[1] - BLUSH[1]) * t)
    b = int(BLUSH[2] + (CREAM[2] - BLUSH[2]) * t)
    draw.line([(0, y), (W // 2, y)], fill=(r, g, b))
    # Right side fades to pure cream
    r2 = int((r + CREAM[0] * 2) // 3)
    g2 = int((g + CREAM[1] * 2) // 3)
    b2 = int((b + CREAM[2] * 2) // 3)
    draw.line([(W // 2, y), (W, y)], fill=(r2, g2, b2))

# ── Fonts ────────────────────────────────────────────────
def try_font(size):
    paths = [
        "/System/Library/Fonts/Supplemental/Georgia.ttf",
        "/System/Library/Fonts/Supplemental/Times New Roman.ttf",
        "/System/Library/Fonts/Geneva.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
    ]
    for p in paths:
        if os.path.exists(p):
            try:
                return ImageFont.truetype(p, size)
            except Exception:
                continue
    return ImageFont.load_default()

F_XL = try_font(80)
F_LG = try_font(48)
F_MD = try_font(30)
F_SM = try_font(20)
F_XS = try_font(13)
F_SX = try_font(11)

def t(x, y, text, fnt, color, anchor="la"):
    draw.text((x, y), text, font=fnt, fill=color, anchor=anchor)

def rr(x0, y0, x1, y1, r, fill, stroke=None, sw=1):
    draw.rounded_rectangle([x0, y0, x1, y1], radius=r, fill=fill,
                           outline=stroke, width=sw)

# ══ LEFT PANEL — Identity ════════════════════════════════
PL, PT = 72, 80

t(PL, PT, "VISUAL PHILOSOPHY", F_SX, TEXT_SOFT)
draw.line([(PL, PT + 20), (PL + 200, PT + 20)], fill=(*ROSE, 80), width=1)

t(PL, PT + 40,  "Petal",   F_XL, TEXT_DARK)
t(PL, PT + 128, "Archive", F_LG, ROSE)

t(PL, PT + 196, "ceremony distilled", F_SM, TEXT_SOFT)

draw.line([(PL, PT + 232), (PL + 240, PT + 232)], fill=(*ROSE, 40), width=1)

lines = [
    "The screen becomes paper.",
    "The form becomes ritual.",
    "",
    "Glass dissolves into warmth.",
    "Rose as the only colour.",
    "Restraint is the craft.",
]
y_t = PT + 252
for line in lines:
    if line:
        t(PL, y_t, line, F_XS, TEXT_SOFT)
    y_t += 26

# Color swatches
y_sw = y_t + 28
t(PL, y_sw, "PALETTE", F_SX, TEXT_SOFT)
swatches = [("#FAF5F0","Cream"),("#FFE4ED","Blush"),("#CE567C","Rose"),("#2A1A1E","Ink"),("#8A7A78","Dust")]
y_sw += 20
for i, (hx, name) in enumerate(swatches):
    xb = PL + i * 52
    rc = tuple(int(hx[j:j+2], 16) for j in (1,3,5))
    rr(xb, y_sw, xb+44, y_sw+28, 6, rc, stroke=(180,160,165), sw=1)
    t(xb+22, y_sw+36, name[:4], F_SX, TEXT_SOFT, anchor="mt")

# ══ CENTRE PHONE — S0 Language ═══════════════════════════
PX, PY, PW, PH, PR2 = 440, 55, 310, 630, 26

# Drop shadow strips
for i in range(10, 0, -1):
    alpha = (10 - i) * 4
    draw.rounded_rectangle(
        [PX-i, PY+i, PX+PW+i, PY+PH+i],
        radius=PR2+i, fill=(*TEXT_DARK, alpha)
    )
rr(PX, PY, PX+PW, PY+PH, PR2, WHITE, stroke=(215,205,210), sw=1)

SX, SY, SW, SH = PX+8, PY+8, PW-16, PH-16

# Screen bg warm strip
for y in range(SH):
    t2 = y / SH
    sr = int(255 + (253-255)*t2)
    sg = int(228 + (248-228)*t2)
    sb = int(237 + (246-237)*t2)
    draw.line([(SX, SY+y),(SX+SW, SY+y)], fill=(sr,sg,sb))

# Notch
rr(PX+PW//2-36, PY+2, PX+PW//2+36, PY+11, 5, (225,215,220))

# Logo text
t(SX+SW//2, SY+44, "Vesna", F_MD, TEXT_DARK, anchor="mt")
t(SX+SW//2, SY+82, "tattoo boutique · Praha", F_SX, TEXT_SOFT, anchor="mt")
draw.line([(SX+36, SY+104),(SX+SW-36, SY+104)], fill=(*ROSE,35), width=1)

# Heading
t(SX+SW//2, SY+120, "Klientská", F_SM, TEXT_DARK, anchor="mt")
t(SX+SW//2, SY+148, "dokumentace", try_font(17), ROSE, anchor="mt")

# Lang buttons
for i, (flag, name, sub) in enumerate([("CZ","Čeština","Pokračovat"),("EN","English","Continue")]):
    bx, by = SX+18, SY+190+i*88
    bw, bh = SW-36, 72
    rr(bx, by, bx+bw, by+bh, 15, WHITE, stroke=(*ROSE,35) if i==0 else (215,205,210), sw=1)
    if i == 0:
        rr(bx, by, bx+4, by+bh, 2, ROSE)
    t(bx+18, by+bh//2, flag, F_MD, TEXT_DARK, anchor="lm")
    t(bx+55, by+bh//2-10, name, try_font(15), TEXT_DARK)
    t(bx+55, by+bh//2+9, sub, F_SX, TEXT_SOFT)
    arrow_col = (*ROSE,120) if i==0 else (*TEXT_SOFT,70)
    t(bx+bw-14, by+bh//2, "→", F_SM, arrow_col, anchor="rm")

t(SX+SW//2, SY+SH-16, "Náměstí Míru 18, Praha 2", F_SX, TEXT_SOFT, anchor="mb")

# ══ RIGHT PHONE — S1 Form type ═══════════════════════════
PX2, PY2 = 810, 115
for i in range(7, 0, -1):
    draw.rounded_rectangle([PX2-i,PY2+i,PX2+PW+i,PY2+PH+i], radius=PR2+i, fill=(*TEXT_DARK,(7-i)*3))
rr(PX2, PY2, PX2+PW, PY2+PH, PR2, (250,248,246), stroke=(215,205,210), sw=1)

S2X, S2Y, S2W, S2H = PX2+8, PY2+8, PW-16, PH-16
for y in range(S2H):
    t2 = y/S2H
    draw.line([(S2X,S2Y+y),(S2X+S2W,S2Y+y)], fill=(int(253-3*t2),int(248-4*t2),int(246-3*t2)))

rr(S2X, S2Y, S2X+S2W, S2Y+50, 0, (255,255,255,180))
draw.line([(S2X,S2Y+50),(S2X+S2W,S2Y+50)], fill=(*ROSE,15), width=1)

# Back arrow + dots
t(S2X+13, S2Y+25, "←", F_SM, TEXT_SOFT, anchor="lm")
t(S2X+S2W//2, S2Y+25, "I · ② · III · IV · V", F_SX, TEXT_SOFT, anchor="mm")
# Ghost Roman numeral
draw.text((S2X+S2W-12, S2Y+8), "II", font=try_font(60), fill=(*ROSE,11), anchor="rt")

rr(PX2+PW//2-36, PY2+2, PX2+PW//2+36, PY2+11, 5, (225,215,220))

t(S2X+16, S2Y+62, "Klientská", F_SM, TEXT_DARK)
t(S2X+16, S2Y+92, "dokumentace", try_font(17), ROSE)

forms = [("✦","Tetování / Piercing","Souhlas dospělého",True),
         ("◆","Permanentní makeup","Souhlas dospělého",False),
         ("◇","Modelka","Souhlas s focením",False)]
yf = S2Y+136
for ico, name, sub, active in forms:
    rr(S2X+12, yf, S2X+S2W-12, yf+62, 13,
       WHITE if active else (250,248,246),
       stroke=(*ROSE,42) if active else (215,205,210,70), sw=1)
    if active:
        rr(S2X+12, yf, S2X+16, yf+62, 2, ROSE)
    t(S2X+26, yf+31, ico, F_XS, ROSE if active else TEXT_SOFT, anchor="lm")
    t(S2X+50, yf+20, name, try_font(13), TEXT_DARK if active else TEXT_SOFT)
    t(S2X+50, yf+38, sub, F_SX, TEXT_SOFT)
    t(S2X+S2W-24, yf+31, "→", F_SM, (*ROSE,130) if active else (*TEXT_SOFT,55), anchor="rm")
    yf += 70

# CTA button
bc = S2Y+S2H-66
rr(S2X+12, bc, S2X+S2W-12, bc+46, 13, ROSE)
t(S2X+S2W//2, bc+23, "Pokračovat →", F_XS, WHITE, anchor="mm")

# ══ FAR RIGHT — Type + Principles ════════════════════════
TX, TY = 1210, 78
t(TX, TY, "TYPE SCALE", F_SX, TEXT_SOFT)
draw.line([(TX,TY+18),(TX+300,TY+18)], fill=(*ROSE,55), width=1)

samples = [(F_XL,"Aa",TEXT_DARK,"Display"),(F_LG,"Aa",ROSE,"Heading"),
           (F_MD,"Aa",TEXT_DARK,"Title"),(F_SM,"Aa",TEXT_SOFT,"Body"),
           (F_XS,"Aa",TEXT_SOFT,"Label"),(F_SX,"ABCDE",TEXT_SOFT,"Caption")]
yt = TY + 32
for fnt_s, sample, col, label in samples:
    t(TX, yt, sample, fnt_s, col)
    bb = draw.textbbox((TX,yt), sample, font=fnt_s)
    th = bb[3]-bb[1]
    t(TX+(bb[2]-bb[0])+10, yt+th//2, label, F_SX, TEXT_SOFT, anchor="lm")
    yt += th + 14

yt += 18
draw.line([(TX,yt),(TX+300,yt)], fill=(*ROSE,28), width=1)
yt += 14

principles = ["restraint is the craft","ceremony over spectacle",
              "warmth over glass","rose as the only mark","paper, not screen"]
for p in principles:
    draw.ellipse([TX, yt+5, TX+5, yt+10], fill=ROSE)
    t(TX+14, yt, p, F_SX, TEXT_SOFT)
    yt += 24

# ══ Bottom bar ════════════════════════════════════════════
draw.line([(72,H-48),(W-72,H-48)], fill=(*ROSE,28), width=1)
t(72, H-25, "Petal Archive  ·  Vesna Affidavit Design System  ·  2026", F_SX, TEXT_SOFT)
t(W-72, H-25, "vesnatattoo.com", F_SX, ROSE, anchor="ra")

# ── Save ─────────────────────────────────────────────────
out = os.path.join(os.path.dirname(os.path.abspath(__file__)), "petal-archive-canvas.png")
img.save(out, "PNG", dpi=(144,144))
print(f"Saved → {out}")
