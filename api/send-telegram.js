'use strict';

const STUDIO_NAME    = 'Vesna inc s.r.o.';
const STUDIO_ADDRESS = 'Náměstí Míru 18, 120 00 Praha 2';
const STUDIO_ICO     = '17213461';
const TG_TOKEN   = process.env.TELEGRAM_BOT_TOKEN;
const TG_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const TG_THREAD  = process.env.TG_THREAD_AFFIDAVIT || null;

// ── HTML → pdfmake blocks ────────────────────────────────────────────────────

function htmlToPdf(html, fontSize) {
  const fs = fontSize || 9;
  const blocks = [];

  const clean = (html || '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ').replace(/▪/g, '•');

  const paragraphs = clean.split(/<br\s*\/?>\s*<br\s*\/?>|\n\n/gi);

  for (const para of paragraphs) {
    const line = para.replace(/<br\s*\/?>/gi, '\n').trim();
    if (!line) continue;

    const headerM = line.match(/^<strong>([\s\S]*?)<\/strong>([\s\S]*)$/i);
    if (headerM) {
      const title = headerM[1].replace(/<[^>]+>/g, '').trim();
      const body  = headerM[2].replace(/<[^>]+>/g, '').trim();
      if (title) blocks.push({ text: title, fontSize: fs, bold: true, margin: [0, 6, 0, 2] });
      if (body)  blocks.push({ text: body,  fontSize: fs, margin: [0, 0, 0, 4], lineHeight: 1.45 });
    } else {
      const text = line.replace(/<[^>]+>/g, '');
      if (text) blocks.push({ text, fontSize: fs, margin: [0, 0, 0, 4], lineHeight: 1.45 });
    }
  }
  return blocks;
}

// ── Declaration & GDPR text ──────────────────────────────────────────────────

const DECLARATION = {
  cz: (name, dob, addr) =>
`Já, ${name}, narozen/a ${dob}, bytem ${addr}

Tímto svobodně a v dobré vůli prohlašuji, že jsem ke dni podpisu tohoto prohlášení dosáhl/a 18 let, nemám žádné srdeční potíže, nejsem epileptik, diabetik ani hemofilik, netrpím žádnou kožní chorobou a neprojevují se u mne žádné příznaky v souvislosti s prodělanými kožními onemocněními v minulosti. Dále prohlašuji, že nemám a nejsem přenašečem takových onemocnění jako je HIV/AIDS, hepatitidy B, C, syfilidy a jiných pohlavních chorob, nejsem pod vlivem žádných psychotropních a návykových látek jakéhokoli druhu či alkoholických produktů, netrpím žádnou fyzickou či duševní poruchou, nepoužívám žádné léky ani psychofarmaka, které by mohly mít negativní vliv na zrealizování tetování nebo permanentního make-upu na mém těle. Při piercingu je - lupus erythematodes, systémová sklerodermie, kožní onemocnění (psoriáza atd.), zvýšená teplota, špatná srážlivost krve, hepatitida B a C, diabetes; alergická reakce na kovy, selhání ledvin všech stupňů závažnosti, srdeční vada, onkologická onemocnění, adenomy, fibroidy, karcinom mléčné žlázy. Uvádím, že jsem srozuměn s tím, že jsem plně odpovědný za jakoukoli újmu způsobenou uvedením nepravdivých údajů, či zatajením podstatných skutečností.

Zavazuji se, že budu dbát na dodržování zásad péče o tetování, permanentu a o piercing a že pokud i přes jejich dodržení dojde k jakýmkoli zdravotním potížím, které by mohly být přímým důsledkem aplikace tetování, permanentu a piercingu, budu neprodleně telefonicky kontaktovat studio Vesna tattoo boutique.

Současně svým podpisem stvrzuji, že jsem před provedením zásahu byl/a poučen/a o povaze zásahu a jeho možných následcích, jakož i následné péči, ve smyslu ustanovení § 93 odst. 1 zákona č. 89/2012 Sb., občanského zákoníku, v platném znění. Prohlašuji, že na základě shora uvedeného nevzniknou při realizaci tetování a piercingu jakékoli komplikace. Ovšem pokud k takovým dojde, trvám na okamžitém ukončení tetování a piercingu podle rozsahu komplikací. Budou-li tyto komplikace vážnější, než se zdálo na první pohled, zavazuji se, že se obrátím na příslušného lékaře. První korekci provádíme bezplatně, pokud tetování není starší než jeden měsíc. Výjimkou jsou tetování na prstech, šíje, ucho, chodidlo (od 800,-Kč) a také bílé tetování a mikro tetování. U permanentního make-upu je korekce zpoplatněna částkou od 2000 Kč. Souhlasím se zveřejněním svých fotografií pro reklamní účely.

Toto prohlášení je mnou před podpisem pozorně přečteno, s jeho obsahem zcela souhlasím, na potvrzení čehož připojuji svůj podpis.`,

  en: (name, dob, addr) =>
`I, ${name}, born ${dob}, residing at ${addr}

I hereby freely and in good faith declare that as of the date of signing this declaration I have reached the age of 18, I have no heart conditions, I am not epileptic, diabetic or haemophiliac, I have no skin disease and no symptoms related to past skin conditions. I further declare that I do not have and am not a carrier of diseases such as HIV/AIDS, hepatitis B, C, syphilis or other sexually transmitted diseases, I am not under the influence of any psychotropic or addictive substances of any kind or alcoholic products, I have no physical or mental disorder, I am not taking any medication or psychotropic drugs that could negatively affect the tattooing or permanent make-up procedure on my body. For piercing: lupus erythematosus, systemic scleroderma, skin diseases (psoriasis etc.), elevated temperature, poor blood clotting, hepatitis B and C, diabetes; allergic reaction to metals, renal failure of any degree of severity, heart defect, oncological diseases, adenomas, fibroids, breast carcinoma. I declare that I am fully aware that I am fully responsible for any harm caused by providing false information or concealing material facts.

I undertake to comply with the principles of tattoo, permanent make-up and piercing aftercare and that if, despite following them, any health complications arise that could be a direct result of the tattoo, permanent make-up or piercing, I will immediately contact Vesna tattoo boutique by phone.

By my signature I also confirm that prior to the procedure I was informed about the nature of the procedure and its possible consequences, as well as subsequent care, within the meaning of § 93(1) of Act No. 89/2012 Coll., the Civil Code, as amended. I declare that based on the foregoing no complications will arise during the tattooing and piercing. However, if they do occur, I insist on the immediate termination of the tattoo and piercing according to the extent of complications. If these complications are more serious than they appeared at first glance, I undertake to consult the appropriate physician. The first correction is provided free of charge if the tattoo is not older than one month. Exceptions are tattoos on fingers, neck, ear, sole (from CZK 800) as well as white and micro tattoos. For permanent make-up, correction is charged from CZK 2,000. I consent to the publication of my photos for advertising purposes.

This declaration has been carefully read by me before signing, I fully agree with its content, in confirmation of which I append my signature.`,
};

const GDPR_HTML = {
  cz: `<strong>PROHLÁŠENÍ O ZPRACOVÁNÍ OSOBNÍCH ÚDAJŮ</strong><br><br>Prohlášení o zpracování osobních údajů dle nařízení Evropského parlamentu a Rady (EU) 2016/679 o ochraně fyzických osob v souvislosti se zpracováním osobních údajů a poučení subjektů údajů (dále jen „GDPR").<br><br><strong>1. Správce osobních údajů</strong><br>Správcem osobních údajů je společnost Vesna Tattoo Prague, Náměstí Míru 18, 120 00, Vinohrady, Praha 2, (dále jen „správce"), která Vás tímto v souladu s čl. 12 GDPR informuje o zpracování Vašich osobních údajů a o Vašich právech.<br>Při zpracování osobních údajů ctíme a respektujeme standardy ochrany osobních údajů a dodržujeme následující zásady: osobní údaje zpracováváme vždy pro jasně a srozumitelně stanovený účel, stanovenými prostředky a způsobem pouze pro dobu, která je nezbytně nutná. Osobní data našich klientů a zaměstnanců sbíráme pouze v nutném rozsahu a nepředáváme je třetím osobám, s výjimkou těch, které se přímo podílejí na procesech uvnitř společnosti za účelem jejich nutného zpracování. Spolupracující osoby (zaměstnanci, subdodavatelé) jsou nuceni přihlásit se k zásadám zpracování osobních dat správce a podstupují pravidelná školení.<br><br><strong>2. Rozsah zpracování osobních údajů</strong><br>Osobní údaje jsou zpracovány v rozsahu, v jakém je příslušný subjekt údajů správci poskytl, a to v souvislosti s uzavřením smluvního či jiného právního vztahu se správcem, z důvodu oprávněného zájmu, nebo které správce shromáždil jinak a zpracovává je v souladu s platnými právními předpisy či k plnění zákonných povinností správce.<br><br><strong>3. Zdroje osobních údajů</strong><br>▪ přímo od subjektů údajů (registrace, dotazníky, smlouvy, prohlášení, webové kontaktní formuláře a chat, e-maily, telefon, webové stránky, vizitky aj.)<br>▪ veřejně přístupné rejstříky, seznamy a evidence (např. obchodní rejstřík, živnostenský rejstřík, katastr nemovitostí apod.)<br>▪ automatizovaný záznam elektronické komunikace na základě zákona 127/2005 Sb. a vyhlášky 357/2012 Sb.<br><br><strong>4. Kategorie osobních údajů, které jsou předmětem zpracování</strong><br>▪ adresní a identifikační údaje sloužící k jednoznačné a nezaměnitelné identifikaci subjektu údajů (např. jméno, příjmení, titul, příp. rodné číslo, datum narození, adresa trvalého pobytu, IČ, DIČ, fotografie) a údaje umožňující kontakt se subjektem údajů (kontaktní údaje – např. kontaktní adresa, číslo telefonu, číslo faxu, e-mailová adresa a jiné obdobné informace)<br>▪ IP adresy, telefonní čísla a jiné provozní a lokalizační údaje vyplývající z provozu služeb sbírané a uchovávané z důvodu zákonné povinnosti<br>▪ IP adresy a jiné provozní a lokalizační údaje k nutné míře zachování kvality služby<br>▪ popisné údaje (např. bankovní spojení)<br>▪ další údaje nezbytné pro plnění smlouvy<br>▪ údaje poskytnuté nad rámec příslušných zákonů zpracovávané v rámci uděleného souhlasu ze strany subjektu údajů (zpracování fotografií, použití osobních údajů za účelem personálních řízení aj.)<br><br><!-- SPLIT --><strong>5. Účel zpracování osobních údajů</strong><br>▪ účely obsažené v rámci souhlasu subjektu údajů<br>▪ jednání o smluvním vztahu<br>▪ plnění smlouvy<br>▪ ochrana práv správce, příjemce nebo jiných dotčených osob (např. vymáhání pohledávek správce)<br>▪ archivnictví vedené na základě zákona<br>▪ výběrová řízení na volná pracovní místa<br>▪ plnění zákonných povinností ze strany správce<br><br><strong>6. Způsob zpracování a ochrany osobních údajů</strong><br>Zpracování osobních údajů provádí správce. Zpracování je prováděno v jeho provozovnách, pobočkách a sídle správce jednotlivými pověřenými zaměstnanci správce, příp. zpracovatelem. Ke zpracování dochází prostřednictvím výpočetní techniky, popř. i manuálním způsobem u osobních údajů v listinné podobě za dodržení všech bezpečnostních zásad pro správu a zpracování osobních údajů.<br>Veškeré subjekty, kterým mohou být osobní údaje zpřístupněny, respektují právo subjektů údajů na ochranu soukromí a jsou povinny postupovat dle platných právních předpisů týkajících se ochrany osobních údajů.<br><br><strong>7. Doba zpracování osobních údajů</strong><br>V souladu se lhůtami uvedenými v příslušných smlouvách, ve spisovém a skartačním řádu správce či v příslušných právních předpisech jde o dobu nezbytně nutnou k zajištění práv a povinností plynoucích jak ze závazkového vztahu, tak i z příslušných právních předpisů. Typicky jsou tak osobní údaje zpracovávány v plném rozsahu pouze po dobu trvání smluvního vztahu a po skončení platnosti jsou údaje zpracovávány pouze v rámci zákonných předpisů.<br>Osobní údaje jsou uchovávány maximálně po dobu 10 let od posledního smluvního vztahu s tím, že jsou využívány především ke zlepšení kvality poskytovaných právních služeb a k reklamním účelům.<br><br><strong>8. Předávání osobních údajů jiným osobám</strong><br>Vaše osobní údaje Správce zpřístupní jiným osobám pouze v obvyklém rozsahu a pouze zpracovatelům či jiným příjemcům, typicky dodavatelům externích služeb, za dodržení všech zásad z GDPR vyplývajících. Dále mohou být osobní údaje zpřístupňovány v nezbytně nutném rozsahu právním, ekonomickým a daňovým poradcům. Na vyžádání či v případě podezření na protiprávní jednání mohou být osobní údaje předány také orgánům veřejné správy.<br><br><!-- SPLIT --><strong>9. Právní základ zpracování</strong><br>Správce zpracovává údaje se souhlasem subjektu údajů s výjimkou zákonem stanovených případů, kdy zpracování osobních údajů nevyžaduje souhlas subjektu údajů. V souladu s čl. 6 odst. 1 GDPR může správce bez souhlasu subjektu údajů zpracovávat tyto údaje:<br>▪ subjekt údajů udělil souhlas pro jeden či více konkrétních účelů,<br>▪ zpracování je nezbytné pro splnění smlouvy, jejíž smluvní stranou je subjekt údajů, nebo pro provedení opatření přijatých před uzavřením smlouvy na žádost tohoto subjektu údajů,<br>▪ zpracování je nezbytné pro splnění právní povinnosti, která se na správce vztahuje,<br>▪ zpracování je nezbytné pro ochranu životně důležitých zájmů subjektu údajů nebo jiné fyzické osoby,<br>▪ zpracování je nezbytné pro splnění úkolu prováděného ve veřejném zájmu nebo při výkonu veřejné moci, kterým je pověřen správce,<br>▪ zpracování je nezbytné pro účely oprávněných zájmů příslušného správce či třetí strany, kromě případů, kdy před těmito zájmy mají přednost zájmy nebo základní práva a svobody subjektu údajů vyžadující ochranu osobních údajů.<br><br><strong>11. Práva subjektů údajů</strong><br>Subjekt údajů má dle GDPR následující práva:<br>• požadovat přístup k osobním údajům, které správce zpracovává,<br>• požadovat opravu či doplnění osobních údajů, které správce zpracovává, pokud jsou nepřesné (čl. 16 GDPR),<br>• požadovat odstranění osobních údajů v případech, které jsou upraveny v čl. 17 GDPR,<br>• požadovat omezení zpracování údajů v případech, které jsou upraveny v čl. 18 GDPR,<br>• získat tyto osobní údaje ve strukturovaném, běžně používaném a strojově čitelném formátu a předat je jinému správci (čl. 20 GDPR),<br>• má právo vznést námitku proti zpracování dle čl. 21 GDPR,<br>• právo podat stížnost k dozorovému úřadu.<br><br>O přijetí každé žádosti budeme žadatele neprodleně informovat a bez zbytečného odkladu, nejpozději do 1 měsíce, podáme požadovanou informaci. Tuto lhůtu je možné prodloužit o další dva měsíce. V případě, kdy se subjekt údajů domnívá, že je s jeho osobními údaji nakládáno neoprávněně, má právo podat stížnost u dozorového úřadu.<br><br><strong>12. Právo na námitku</strong><br>Pokud je právním důvodem zpracování osobních údajů tzv. oprávněný zájem, má subjekt právo kdykoli vznést věcnou námitku proti takovému zpracování osobních údajů. V takovém případě nebudou osobní údaje dále zpracovávány, pokud nebudou dány závažné oprávněné důvody pro zpracování, které převáží nad zájmy subjektu nebo jeho právy a svobodami. Námitku lze vznést prostřednictvím kontaktních údajů uvedených níže.`,

  en: `<strong>PERSONAL DATA PROCESSING DECLARATION (GDPR)</strong><br><br>Declaration pursuant to Regulation (EU) 2016/679 of the European Parliament and of the Council on the protection of natural persons with regard to the processing of personal data (hereinafter "GDPR").<br><br><strong>1. Data Controller</strong><br>The data controller is Vesna Tattoo Prague, Náměstí Míru 18, 120 00, Vinohrady, Praha 2 (hereinafter "the controller"), which hereby informs you pursuant to Art. 12 GDPR about the processing of your personal data and your rights.<br>In processing personal data we respect the standards of personal data protection and adhere to the following principles: we always process personal data for a clearly and intelligibly defined purpose, by defined means and methods, only for the period that is strictly necessary. We collect personal data of our clients and employees only to the extent necessary and do not pass them to third parties, except those directly involved in processes within the company for the purpose of their necessary processing.<br><br><strong>2. Scope of personal data processing</strong><br>Personal data are processed to the extent provided by the data subject to the controller in connection with the conclusion of a contractual or other legal relationship with the controller, on the basis of legitimate interest, or collected otherwise and processed in accordance with applicable law.<br><br><strong>3. Sources of personal data</strong><br>▪ directly from data subjects (registrations, questionnaires, contracts, declarations, web contact forms and chat, emails, phone, websites, business cards, etc.)<br>▪ publicly accessible registers, lists and records (e.g. commercial register, trade register, land registry, etc.)<br>▪ automated recording of electronic communications pursuant to Act No. 127/2005 Coll. and Decree No. 357/2012 Coll.<br><br><strong>4. Categories of personal data processed</strong><br>▪ address and identification data for unambiguous identification of the data subject (e.g. name, surname, title, date of birth, permanent address, ID/VAT number, photograph) and data enabling contact with the data subject<br>▪ IP addresses, phone numbers and other operational and location data collected and retained on the basis of statutory obligation<br>▪ IP addresses and other operational and location data to the extent necessary for maintaining service quality<br>▪ descriptive data (e.g. bank details)<br>▪ further data necessary for the fulfilment of the contract<br>▪ data provided beyond the scope of applicable laws, processed on the basis of the data subject's consent<br><br><!-- SPLIT --><strong>5. Purpose of personal data processing</strong><br>▪ purposes covered by the data subject's consent<br>▪ negotiation of a contractual relationship<br>▪ fulfilment of a contract<br>▪ protection of the rights of the controller, recipient or other affected persons (e.g. debt recovery)<br>▪ archiving pursuant to law<br>▪ selection procedures for vacant positions<br>▪ fulfilment of the controller's statutory obligations<br><br><strong>6. Method of processing and protection of personal data</strong><br>Processing of personal data is carried out by the controller at its premises, branches and registered office by individually authorised employees, or by a processor. Processing is carried out by electronic means and, where applicable, manually for personal data in paper form, in compliance with all security principles for the management and processing of personal data.<br><br><strong>7. Period of personal data processing</strong><br>In accordance with the time limits set out in the relevant contracts, the controller's records and filing management rules or applicable legislation, data are processed for the period strictly necessary to ensure the rights and obligations arising from the contractual relationship and from applicable legislation. Personal data are retained for a maximum of 10 years from the last contractual relationship.<br><br><strong>8. Transfer of personal data to other persons</strong><br>The controller will disclose your personal data to other persons only to the usual extent and only to processors or other recipients, typically suppliers of external services, in compliance with all principles arising from GDPR. Personal data may also be disclosed to the extent strictly necessary to legal, economic and tax advisers.<br><br><!-- SPLIT --><strong>9. Legal basis for processing</strong><br>The controller processes data with the consent of the data subject, except in cases provided by law where processing does not require consent. Pursuant to Art. 6(1) GDPR, the controller may process data without consent where:<br>▪ the data subject has given consent for one or more specific purposes,<br>▪ processing is necessary for the performance of a contract to which the data subject is party,<br>▪ processing is necessary for compliance with a legal obligation to which the controller is subject,<br>▪ processing is necessary to protect the vital interests of the data subject or another natural person,<br>▪ processing is necessary for the performance of a task carried out in the public interest,<br>▪ processing is necessary for the purposes of the legitimate interests pursued by the controller or a third party.<br><br><strong>11. Rights of data subjects</strong><br>Under GDPR the data subject has the following rights:<br>• to request access to personal data processed by the controller (Art. 15 GDPR),<br>• to request rectification or completion of inaccurate personal data (Art. 16 GDPR),<br>• to request erasure of personal data in cases governed by Art. 17 GDPR,<br>• to request restriction of processing in cases governed by Art. 18 GDPR,<br>• to obtain personal data in a structured, commonly used and machine-readable format and to transmit those data to another controller (Art. 20 GDPR),<br>• to object to processing pursuant to Art. 21 GDPR,<br>• to lodge a complaint with a supervisory authority.<br><br>We will promptly acknowledge every request and, without undue delay and at the latest within one month, provide the requested information or information about the measures taken. This period may be extended by a further two months where necessary.<br><br><strong>12. Right to object</strong><br>Where the legal basis for processing is legitimate interest, the data subject has the right to object at any time to such processing. In that case personal data will no longer be processed unless there are compelling legitimate grounds for the processing which override the interests, rights and freedoms of the data subject. The objection may be submitted via the contact details provided below.`,
};

// ── PDF document definition ──────────────────────────────────────────────────

function buildDocDef({ name, dob, address, email, formTypeName, healthNotes, source, timestamp, sigDataURL, lang }) {
  const l = lang === 'en' ? 'en' : 'cz';

  const declText = DECLARATION[l](name || '—', dob || '—', address || '—');
  const declParagraphs = declText.split('\n\n').map((p, i) => ({
    text: p,
    fontSize: 8.5,
    bold: i === 0,
    margin: [0, 0, 0, 5],
    lineHeight: 1.35,
  }));

  const gdprParts = GDPR_HTML[l].split('<!-- SPLIT -->');
  const gdpr1 = htmlToPdf(gdprParts[0] || '', 9);
  const gdpr2 = htmlToPdf(gdprParts[1] || '', 9);
  const gdpr3 = htmlToPdf(gdprParts[2] || '', 9);

  const lbl = (txt) => ({ text: txt, fontSize: 7, color: '#CE567C', bold: true, margin: [0, 4, 0, 1] });
  const val = (txt) => ({ text: String(txt || '—'), fontSize: 10, bold: true, color: '#2A2A2A' });

  const header = {
    columns: [
      {
        stack: [
          { text: 'Vesna', fontSize: 22, bold: true, color: '#3a1020' },
          { text: 'tattoo boutique · Praha', fontSize: 7, color: '#9a6070', characterSpacing: 1, margin: [0, 1, 0, 0] },
        ],
      },
      {
        text: `${STUDIO_NAME}\n${STUDIO_ADDRESS}\nIČO: ${STUDIO_ICO}`,
        alignment: 'right', fontSize: 9, color: '#9a6070', lineHeight: 1.7,
      },
    ],
    margin: [0, 0, 0, 0],
  };

  const makeSigSection = () => [
    { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1, lineColor: '#EAD8DB' }], margin: [0, 8, 0, 8] },
    {
      columns: [
        {
          stack: [
            sigDataURL
              ? { image: sigDataURL, width: 150, height: 50, margin: [0, 0, 0, 4] }
              : { text: '', margin: [0, 50, 0, 4] },
            { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 160, y2: 0, lineWidth: 0.5, lineColor: '#C0A8B0' }], margin: [0, 0, 0, 2] },
            { text: l === 'en' ? 'Client signature' : 'Podpis klienta', fontSize: 8, color: '#9a6070', characterSpacing: 0.5 },
          ],
        },
        {
          stack: [
            { text: timestamp || '', fontSize: 11, bold: true, alignment: 'right', color: '#2A2A2A' },
            { text: l === 'en' ? 'Date & time' : 'Datum a čas', fontSize: 7, color: '#9a6070', alignment: 'right' },
          ],
          alignment: 'right',
        },
      ],
    },
  ];

  const clientInfo = {
    table: {
      widths: ['*', '*', '*', '*'],
      body: [[
        { stack: [lbl(l === 'en' ? 'NAME' : 'JMÉNO'), val(name)], fillColor: '#FFF5F7' },
        { stack: [lbl(l === 'en' ? 'DATE OF BIRTH' : 'DATUM NAROZENÍ'), val(dob)], fillColor: '#FFF5F7' },
        { stack: [lbl(l === 'en' ? 'ADDRESS' : 'ADRESA'), val(address)], colSpan: 2, fillColor: '#FFF5F7' },
        {},
      ]],
    },
    layout: { hLineWidth: () => 0, vLineWidth: () => 0, paddingLeft: () => 8, paddingRight: () => 8, paddingTop: () => 6, paddingBottom: () => 6 },
    margin: [0, 0, 0, 8],
  };

  const emailRow = email ? {
    table: {
      widths: ['*', '*'],
      body: [[
        { stack: [lbl('E-MAIL'), { text: email, fontSize: 9, color: '#2A2A2A' }], fillColor: '#FFF5F7' },
        { stack: [lbl(l === 'en' ? 'TYPE' : 'TYP'), val(formTypeName)], fillColor: '#FFF5F7' },
      ]],
    },
    layout: { hLineWidth: () => 0, vLineWidth: () => 0, paddingLeft: () => 8, paddingRight: () => 8, paddingTop: () => 6, paddingBottom: () => 6 },
    margin: [0, 0, 0, 12],
  } : {
    table: { widths: ['*'], body: [[{ stack: [lbl(l === 'en' ? 'TYPE' : 'TYP'), val(formTypeName)], fillColor: '#FFF5F7' }]] },
    layout: { hLineWidth: () => 0, vLineWidth: () => 0, paddingLeft: () => 8, paddingRight: () => 8, paddingTop: () => 6, paddingBottom: () => 6 },
    margin: [0, 0, 0, 12],
  };

  const healthSection = healthNotes ? [{
    table: { widths: ['*'], body: [[{
      stack: [
        { text: l === 'en' ? 'HEALTH ISSUES' : 'ZDRAVOTNÍ OBTÍŽE', fontSize: 7, color: '#CE567C', bold: true, margin: [0, 0, 0, 2] },
        { text: healthNotes, fontSize: 9 },
      ],
      fillColor: '#FFF5F7',
    }]] },
    layout: { hLineWidth: () => 0, vLineWidth: () => 0, paddingLeft: () => 10, paddingRight: () => 10, paddingTop: () => 8, paddingBottom: () => 8 },
    margin: [0, 0, 0, 8],
  }] : [];

  const sourceSection = source ? [{
    text: [(l === 'en' ? 'How did you find us: ' : 'Jak jste se o nás dozvěděli: '), { text: source, bold: true }],
    fontSize: 9, margin: [0, 0, 0, 12],
  }] : [];

  const gdprHeader = {
    columns: [
      {
        stack: [
          { text: 'Vesna', fontSize: 22, bold: true, color: '#3a1020' },
          { text: 'tattoo boutique · Praha', fontSize: 7, color: '#9a6070', characterSpacing: 1, margin: [0, 1, 0, 0] },
        ],
      },
      {
        text: `${STUDIO_NAME}\n${STUDIO_ADDRESS}\nIČO: ${STUDIO_ICO}`,
        alignment: 'right', fontSize: 9, color: '#9a6070', lineHeight: 1.7,
      },
    ],
    margin: [0, 0, 0, 12],
  };

  return {
    pageSize: 'A4',
    pageMargins: [40, 40, 40, 50],
    defaultStyle: { font: 'Roboto', fontSize: 9, color: '#2A2A2A', lineHeight: 1.45 },
    footer: () => ({
      text: `${STUDIO_NAME} · ${STUDIO_ADDRESS} · IČO: ${STUDIO_ICO}`,
      fontSize: 7, color: '#b0a0a4', alignment: 'center',
      margin: [40, 8, 40, 0],
    }),
    content: [
      // ── Page 1: Declaration ──
      header,
      { canvas: [{ type: 'line', x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 2.5, lineColor: '#FFC3CC' }], margin: [0, 0, 0, 8] },
      { text: l === 'en' ? 'CLIENT DECLARATION' : 'ČESTNÉ PROHLÁŠENÍ', fontSize: 13, bold: true, color: '#3a1020', alignment: 'center', margin: [0, 0, 0, 6] },
      clientInfo,
      emailRow,
      ...declParagraphs,
      ...healthSection,
      ...sourceSection,
      ...makeSigSection(),

      // ── Page 2: GDPR part 1 ──
      { text: '', pageBreak: 'before' },
      gdprHeader,
      ...gdpr1,

      // ── Page 3: GDPR part 2 ──
      { text: '', pageBreak: 'before' },
      gdprHeader,
      ...gdpr2,

      // ── Page 4: GDPR part 3 + signature ──
      { text: '', pageBreak: 'before' },
      gdprHeader,
      ...gdpr3,
      ...makeSigSection(),
    ],
  };
}

// ── Send PDF via email ───────────────────────────────────────────────────────

async function sendPdfEmail(pdfBuffer, fileName, clientData) {
  const { Resend } = require('resend');
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { name, dob, address, email, formTypeName, timestamp, healthNotes } = clientData;

  const htmlBody = `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;padding:24px;">
      <div style="border-bottom:3px solid #FFC3CC;padding-bottom:12px;margin-bottom:20px;">
        <span style="font-size:22px;font-weight:700;color:#3a1020;">Vesna</span>
        <span style="font-size:11px;color:#9a6070;letter-spacing:0.1em;text-transform:uppercase;margin-left:8px;">tattoo boutique</span>
      </div>
      <h2 style="color:#3a1020;font-size:18px;margin-bottom:16px;">📋 Nové podepsané prohlášení</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:6px 0;color:#9a6070;width:140px;">Klient</td><td style="padding:6px 0;font-weight:600;">${name || '—'}</td></tr>
        <tr><td style="padding:6px 0;color:#9a6070;">Datum narození</td><td style="padding:6px 0;">${dob || '—'}</td></tr>
        <tr><td style="padding:6px 0;color:#9a6070;">Adresa</td><td style="padding:6px 0;">${address || '—'}</td></tr>
        <tr><td style="padding:6px 0;color:#9a6070;">E-mail</td><td style="padding:6px 0;">${email || '—'}</td></tr>
        <tr><td style="padding:6px 0;color:#9a6070;">Typ formuláře</td><td style="padding:6px 0;">${formTypeName || '—'}</td></tr>
        <tr><td style="padding:6px 0;color:#9a6070;">Podepsáno</td><td style="padding:6px 0;">${timestamp || '—'}</td></tr>
        ${clientData.source ? `<tr><td style="padding:6px 0;color:#9a6070;">Jak nás našli</td><td style="padding:6px 0;">${clientData.source}</td></tr>` : ''}
        ${healthNotes ? `<tr><td style="padding:6px 0;color:#9a6070;vertical-align:top;">Zdravotní obtíže</td><td style="padding:6px 0;color:#c0392b;">${healthNotes}</td></tr>` : ''}
      </table>
      <p style="margin-top:20px;font-size:12px;color:#b0a0a4;">PDF prohlášení je přiloženo k tomuto e-mailu.</p>
    </div>`;

  await resend.emails.send({
    from: 'Vesna Affidavit <noreply@vesnatattoo.com>',
    to:   process.env.REPORT_EMAIL || 'vesna.report@vesnatattoo.com',
    subject: `Prohlášení — ${name || 'klient'} · ${timestamp || dateStr}`,
    html: htmlBody,
    attachments: [{
      filename: fileName,
      content:  pdfBuffer.toString('base64'),
    }],
  });
}

// ── Main handler ─────────────────────────────────────────────────────────────

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const secret = process.env.AFFIDAVIT_SECRET;
  if (secret && req.headers['x-affidavit-token'] !== secret) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const PdfPrinter    = require('pdfmake');
    const vfsFontsModule = require('pdfmake/build/vfs_fonts');
    const vfs = (vfsFontsModule.pdfMake && vfsFontsModule.pdfMake.vfs)
             || vfsFontsModule.vfs
             || vfsFontsModule;

    const fonts = {
      Roboto: {
        normal:      Buffer.from(vfs['Roboto-Regular.ttf'],      'base64'),
        bold:        Buffer.from(vfs['Roboto-Medium.ttf'],       'base64'),
        italics:     Buffer.from(vfs['Roboto-Italic.ttf'],       'base64'),
        bolditalics: Buffer.from(vfs['Roboto-MediumItalic.ttf'], 'base64'),
      },
    };

    const printer = new PdfPrinter(fonts);
    const body = req.body || {};
    const sanitize = (v, max) => String(v || '').replace(/[\r\n]/g, ' ').slice(0, max);
    const safeBody = {
      name:        sanitize(body.name,        100),
      dob:         sanitize(body.dob,          30),
      address:     sanitize(body.address,     200),
      email:       sanitize(body.email,       100),
      formTypeName:sanitize(body.formTypeName, 80),
      healthNotes: sanitize(body.healthNotes, 500),
      source:      sanitize(body.source,       80),
      timestamp:   sanitize(body.timestamp,    40),
      lang:        ['cz', 'en'].includes(body.lang) ? body.lang : 'cz',
      sigDataURL:  /^data:image\/(png|jpeg);base64,[A-Za-z0-9+/=]{1,300000}$/.test(body.sigDataURL)
                     ? body.sigDataURL : '',
    };

    const docDef  = buildDocDef(safeBody);
    const pdfDoc  = printer.createPdfKitDocument(docDef);

    const chunks = [];
    pdfDoc.on('data', c => chunks.push(c));
    const pdfBuffer = await new Promise((resolve, reject) => {
      pdfDoc.on('end',   () => resolve(Buffer.concat(chunks)));
      pdfDoc.on('error', reject);
      pdfDoc.end();
    });

    const safeName = (safeBody.name || 'klient').replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    const dateStr  = new Date().toISOString().slice(0, 10);
    const fileName = `Vesna-Prohlaseni-${safeName}-${dateStr}.pdf`;

    // ── 1. Send PDF to vesna.report@vesnatattoo.com ──
    let emailError = null;
    if (process.env.RESEND_API_KEY) {
      try {
        await sendPdfEmail(pdfBuffer, fileName, safeBody);
      } catch (e) {
        emailError = e.message;
        console.error('Email error:', e);
      }
    }

    // ── 2. Send Telegram notification (text only — no PDF) ──
    let tgOk = false;
    let tgError = null;
    try {
      const birthYear = safeBody.dob ? safeBody.dob.replace(/.*(\d{4}).*/, '$1') : '—';
      const tgText =
        `📑 *Podepsané prohlášení*\n` +
        `👤 ${safeBody.name || '—'}\n` +
        `🎂 ${birthYear}\n` +
        `🗂 ${safeBody.formTypeName || '—'}\n` +
        `🔍 ${safeBody.source || '—'}\n` +
        `🕐 ${safeBody.timestamp || '—'}\n` +
        `📧 PDF → ${(process.env.REPORT_EMAIL || 'vesna.souhlas@vesnatattoo.com').replace(/\./g, '\\.').replace(/@/g, '@')}`;

      const tgRes = await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TG_CHAT_ID,
          ...(TG_THREAD ? { message_thread_id: Number(TG_THREAD) } : {}),
          text: tgText,
          parse_mode: 'Markdown',
          disable_web_page_preview: true,
        }),
      });
      const tgData = await tgRes.json();
      tgOk = tgData.ok;
      if (!tgOk) tgError = tgData.description || JSON.stringify(tgData);
    } catch (e) {
      tgError = e.message;
    }

    return res.status(200).json({
      ok: tgOk,
      tgError,
      emailError,
      pdfBase64: pdfBuffer.toString('base64'),
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: e.message });
  }
};
