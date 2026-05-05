'use strict';

const STUDIO_NAME    = 'Vesna inc s.r.o.';
const STUDIO_ADDRESS = 'Náměstí Míru 18, 120 00 Praha 2';
const STUDIO_ICO     = '17213461';
const TG_TOKEN       = '***REMOVED***';
const TG_CHAT_ID     = '1497672822';

function stripHtml(html) {
  return (html || '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function buildDocDef({ name, dob, address, email, formTypeName, healthNotes, source, timestamp, sigDataURL, declarationText, gdprText, lang }) {
  const label = (txt) => ({ text: txt, fontSize: 7, color: '#CE567C', bold: true, margin: [0, 4, 0, 1] });
  const val   = (txt) => ({ text: String(txt || '—'), fontSize: 10, bold: true, color: '#2A2A2A' });

  const clientInfo = {
    table: {
      widths: ['*', '*', '*', '*'],
      body: [[
        { stack: [label(lang === 'en' ? 'NAME' : 'JMÉNO'), val(name)], fillColor: '#FFF5F7' },
        { stack: [label(lang === 'en' ? 'DATE OF BIRTH' : 'DATUM NAROZENÍ'), val(dob)], fillColor: '#FFF5F7' },
        { stack: [label(lang === 'en' ? 'ADDRESS' : 'ADRESA'), val(address)], colSpan: 2, fillColor: '#FFF5F7' },
        {},
      ]]
    },
    layout: { hLineWidth: () => 0, vLineWidth: () => 0, paddingLeft: () => 8, paddingRight: () => 8, paddingTop: () => 6, paddingBottom: () => 6 },
    margin: [0, 0, 0, 12],
  };

  const emailRow = email ? {
    table: {
      widths: ['*', '*'],
      body: [[
        { stack: [label('E-MAIL'), { text: email, fontSize: 9, color: '#2A2A2A' }], fillColor: '#FFF5F7' },
        { stack: [label(lang === 'en' ? 'TYPE' : 'TYP'), val(formTypeName)], fillColor: '#FFF5F7' },
      ]]
    },
    layout: { hLineWidth: () => 0, vLineWidth: () => 0, paddingLeft: () => 8, paddingRight: () => 8, paddingTop: () => 6, paddingBottom: () => 6 },
    margin: [0, 0, 0, 12],
  } : {
    table: { widths: ['*'], body: [[{ stack: [label(lang === 'en' ? 'TYPE' : 'TYP'), val(formTypeName)], fillColor: '#FFF5F7' }]] },
    layout: { hLineWidth: () => 0, vLineWidth: () => 0, paddingLeft: () => 8, paddingRight: () => 8, paddingTop: () => 6, paddingBottom: () => 6 },
    margin: [0, 0, 0, 12],
  };

  const declLines = (declarationText || '').split('\n\n').map((p, i) => ({
    text: p.replace(/\n/g, ' '),
    fontSize: i === 0 ? 11 : 10,
    bold: i === 0,
    margin: [0, 0, 0, 8],
  }));

  const healthSection = healthNotes ? [
    {
      table: { widths: ['*'], body: [[{
        stack: [
          { text: lang === 'en' ? 'HEALTH ISSUES' : 'ZDRAVOTNÍ OBTÍŽE', fontSize: 7, color: '#CE567C', bold: true, margin: [0, 0, 0, 2] },
          { text: healthNotes, fontSize: 9 }
        ],
        fillColor: '#FFF5F7',
      }]] },
      layout: { hLineWidth: () => 0, vLineWidth: () => 0, paddingLeft: () => 10, paddingRight: () => 10, paddingTop: () => 8, paddingBottom: () => 8 },
      margin: [0, 0, 0, 8],
    }
  ] : [];

  const sourceSection = source ? [{
    text: [(lang === 'en' ? 'How did you find us: ' : 'Jak jste se o nás dozvěděli: '), { text: source, bold: true }],
    fontSize: 9, margin: [0, 0, 0, 12],
  }] : [];

  const sigSection = [
    { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1, lineColor: '#EAD8DB' }], margin: [0, 8, 0, 8] },
    {
      columns: [
        {
          stack: [
            sigDataURL ? { image: sigDataURL, width: 150, height: 50, margin: [0, 0, 0, 4] } : { text: '', margin: [0, 50, 0, 4] },
            { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 160, y2: 0, lineWidth: 0.5, lineColor: '#C0A8B0' }], margin: [0, 0, 0, 2] },
            { text: lang === 'en' ? 'Client signature' : 'Podpis klienta', fontSize: 7, color: '#9a6070', characterSpacing: 0.5 },
          ]
        },
        {
          stack: [
            { text: timestamp || '', fontSize: 11, bold: true, alignment: 'right', color: '#2A2A2A' },
            { text: lang === 'en' ? 'Date & time' : 'Datum a čas', fontSize: 7, color: '#9a6070', alignment: 'right' },
          ],
          alignment: 'right',
        }
      ]
    }
  ];

  const gdprClean = stripHtml(gdprText || '');

  return {
    pageSize: 'A4',
    pageMargins: [40, 50, 40, 50],
    defaultStyle: { font: 'Roboto', fontSize: 10, color: '#2A2A2A', lineHeight: 1.5 },
    content: [
      // Header
      {
        columns: [
          {
            stack: [
              { text: 'Vesna', fontSize: 22, bold: true, color: '#3a1020' },
              { text: 'tattoo boutique · Praha', fontSize: 7, color: '#9a6070', characterSpacing: 1, margin: [0, 1, 0, 0] }
            ]
          },
          {
            text: `${STUDIO_NAME}\n${STUDIO_ADDRESS}\nIČO: ${STUDIO_ICO}`,
            alignment: 'right', fontSize: 9, color: '#9a6070', lineHeight: 1.7,
          }
        ],
        margin: [0, 0, 0, 0],
      },
      { canvas: [{ type: 'line', x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 2.5, lineColor: '#FFC3CC' }], margin: [0, 0, 0, 16] },

      // Title
      { text: lang === 'en' ? 'CLIENT DECLARATION' : 'ČESTNÉ PROHLÁŠENÍ', fontSize: 16, bold: true, color: '#3a1020', alignment: 'center', margin: [0, 0, 0, 8] },

      // Client info
      clientInfo,
      emailRow,

      // Declaration
      ...declLines,
      ...healthSection,
      ...sourceSection,
      ...sigSection,

      // GDPR — new page
      { text: '', pageBreak: 'before' },
      { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 2.5, lineColor: '#FFC3CC' }], margin: [0, 0, 0, 12] },
      { text: lang === 'en' ? 'PERSONAL DATA PROCESSING DECLARATION (GDPR)' : 'PROHLÁŠENÍ O ZPRACOVÁNÍ OSOBNÍCH ÚDAJŮ (GDPR)', fontSize: 11, bold: true, color: '#3a1020', margin: [0, 0, 0, 10] },
      { text: gdprClean, fontSize: 9, lineHeight: 1.5 },

      // Footer
      { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1, lineColor: '#EAD8DB' }], margin: [0, 12, 0, 4] },
      { text: `${STUDIO_NAME} · ${STUDIO_ADDRESS} · IČO: ${STUDIO_ICO}`, fontSize: 7, color: '#b0a0a4', alignment: 'center' },
    ]
  };
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const PdfPrinter = require('pdfmake');
    const vfsFontsModule = require('pdfmake/build/vfs_fonts');
    const vfs = (vfsFontsModule.pdfMake && vfsFontsModule.pdfMake.vfs)
             || vfsFontsModule.vfs
             || vfsFontsModule;

    const fonts = {
      Roboto: {
        normal:      Buffer.from(vfs['Roboto-Regular.ttf'],        'base64'),
        bold:        Buffer.from(vfs['Roboto-Medium.ttf'],         'base64'),
        italics:     Buffer.from(vfs['Roboto-Italic.ttf'],         'base64'),
        bolditalics: Buffer.from(vfs['Roboto-MediumItalic.ttf'],   'base64'),
      }
    };

    const printer = new PdfPrinter(fonts);
    const docDef  = buildDocDef(req.body);
    const pdfDoc  = printer.createPdfKitDocument(docDef);

    const chunks = [];
    pdfDoc.on('data', c => chunks.push(c));
    const pdfBuffer = await new Promise((resolve, reject) => {
      pdfDoc.on('end',   () => resolve(Buffer.concat(chunks)));
      pdfDoc.on('error', reject);
      pdfDoc.end();
    });

    const safeName = ((req.body.name || 'klient')).replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    const dateStr  = new Date().toISOString().slice(0, 10);
    const fileName = `Vesna-Prohlaseni-${safeName}-${dateStr}.pdf`;

    const fd = new FormData();
    fd.append('chat_id', TG_CHAT_ID);
    fd.append('document', new Blob([pdfBuffer], { type: 'application/pdf' }), fileName);
    fd.append('caption', req.body.caption || '📋 Podpisané prohlášení');
    fd.append('parse_mode', 'Markdown');

    const tgRes = await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendDocument`, { method: 'POST', body: fd });
    const data  = await tgRes.json();
    return res.status(200).json(data);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: e.message });
  }
};
