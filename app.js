/* ═══════════════════════════════════════
   VESNA — Klientská dokumentace · app.js
   ═══════════════════════════════════════ */

const STUDIO = {
  name:    'Vesna inc s.r.o.',
  address: 'Náměstí Míru 18, 120 00 Praha 2',
  ico:     '17213461',
};

/* ══ TRANSLATIONS ══ */
const T = {
  cz: {
    langSwitch: 'CZ / EN',
    s1Title: 'Klientská', s1TitleEm: 'dokumentace', s1Sub: 'Vyberte typ formuláře',
    forms: {
      tattoo: { name: 'Tetování / Piercing',    sub: 'Čestné prohlášení dospělého' },
      pmu:    { name: 'Permanentní makeup',      sub: 'Čestné prohlášení dospělého' },
      model:  { name: 'Modelka — focení',        sub: 'Souhlas s použitím fotografií' },
      minor:  { name: 'Nezletilý',               sub: 'Prohlášení zákonného zástupce' },
    },
    s2Title: 'Osobní', s2TitleEm: 'údaje',
    lbl: {
      name: 'Jméno a příjmení', dob: 'Datum narození',
      addr: 'Adresa trvalého bydliště', email: 'E-mail',
      parentTitle: 'Zákonný zástupce',
      pname: 'Jméno a příjmení zákonného zástupce',
      prelation: 'Vztah k nezletilému',
      pphone: 'Telefon zákonného zástupce',
      optParent: 'Rodič', optGuardian: 'Zákonný zástupce',
    },
    s3Title: 'Čestné', s3TitleEm: 'prohlášení',
    s3Sub: 'Přečtěte si prosím níže uvedené prohlášení:',
    s3Model: 'Souhlas s', s3ModelEm: 'focením',
    healthNotesLbl: 'Zdravotní obtíže (pokud máte, vypište)',
    s4Title: 'Jak jste se', s4TitleEm: 'o nás dozvěděli?',
    gdprTitle: 'Prohlášení o zpracování osobních údajů',
    gdprCheck: 'Přečetl/a jsem a souhlasím se zpracováním osobních údajů dle GDPR',
    s5Title: 'Podpis', s5TitleEm: 'klienta',
    s5TitleMinor: 'Podpis', s5TitleMinorEm: 'zákonného zástupce',
    s5Sub: 'Nakreslete svůj podpis prstem nebo stylusem:',
    sigLine: 'Podpis klienta', sigLineMinor: 'Podpis zákonného zástupce',
    sigClear: 'Vymazat podpis',
    sigLegal: 'Svým podpisem stvrzuji, že všechny výše uvedené informace jsou pravdivé, byl/a jsem poučen/a o povaze zákroku a jeho možných následcích ve smyslu § 93 odst. 1 zákona č. 89/2012 Sb., občanského zákoníku.',
    sigLegalMinor: 'Jako zákonný zástupce svým podpisem stvrzuji, že všechny uvedené informace jsou pravdivé a souhlasím s provedením zákroku u nezletilého.',
    submitBtn: 'Potvrdit a stáhnout PDF',
    generating: 'Generuji PDF…',
    doneTitle: 'Hotovo!', doneDesc: 'Prohlášení bylo podepsáno.\nPDF se stahuje do vašeho zařízení.',
    dlAgain: 'Stáhnout PDF znovu', newForm: 'Nový formulář',
    sources: ['Osobní doporučení', 'Reklama na Google', 'Reklama na Instagramu', 'Google Maps', 'Jinak'],
    continueBtn: 'Pokračovat →',
    soonBadge: 'Brzy',
    alertFill: 'Vyplňte prosím povinná pole: Jméno, Datum narození a Adresu.',
    alertParent: 'Vyplňte prosím údaje zákonného zástupce.',
    alertGdpr: 'Prosím odsouhlaste zpracování osobních údajů (GDPR).',
    alertSign: 'Prosím podepište se.',
    alertPdfErr: 'Chyba při generování PDF. Zkuste to prosím znovu.',
    pdfSigLabel: 'Podpis klienta', pdfSigLabelMinor: 'Podpis zákonného zástupce',
    pdfDateLabel: 'Datum a čas',
    pdfParentSection: 'Zákonný zástupce',
    pdfModelText: 'Klient/ka souhlasí s použitím fotografií a videí pro marketingové účely studia Vesna Tattoo Boutique.',
  },
  en: {
    langSwitch: 'CZ / EN',
    s1Title: 'Client', s1TitleEm: 'documentation', s1Sub: 'Select form type',
    forms: {
      tattoo: { name: 'Tattoo / Piercing',        sub: 'Adult consent form' },
      pmu:    { name: 'Permanent Makeup',          sub: 'Adult consent form' },
      model:  { name: 'Model — photo consent',     sub: 'Consent for use of photographs' },
      minor:  { name: 'Minor',                     sub: 'Legal guardian consent' },
    },
    s2Title: 'Personal', s2TitleEm: 'information',
    lbl: {
      name: 'Full name', dob: 'Date of birth',
      addr: 'Permanent address', email: 'E-mail',
      parentTitle: 'Legal Guardian',
      pname: 'Legal guardian full name',
      prelation: 'Relationship to minor',
      pphone: 'Legal guardian phone',
      optParent: 'Parent', optGuardian: 'Legal guardian',
    },
    s3Title: 'Client', s3TitleEm: 'declaration',
    s3Sub: 'Please read the declaration below:',
    s3Model: 'Photo', s3ModelEm: 'consent',
    healthNotesLbl: 'Health issues (if any, please describe)',
    s4Title: 'How did you', s4TitleEm: 'find us?',
    gdprTitle: 'Personal data processing declaration',
    gdprCheck: 'I have read and agree to the processing of my personal data (GDPR)',
    s5Title: 'Client', s5TitleEm: 'signature',
    s5TitleMinor: 'Guardian', s5TitleMinorEm: 'signature',
    s5Sub: 'Draw your signature with a finger or stylus:',
    sigLine: 'Client signature', sigLineMinor: 'Guardian signature',
    sigClear: 'Clear signature',
    sigLegal: 'By signing, I confirm that all information provided is accurate and that I have been informed about the nature of the procedure and its possible consequences.',
    sigLegalMinor: 'As the legal guardian, I confirm all information is accurate and consent to the procedure being performed on the minor.',
    submitBtn: 'Confirm & download PDF',
    generating: 'Generating PDF…',
    doneTitle: 'Done!', doneDesc: 'The declaration has been signed.\nPDF is downloading to your device.',
    dlAgain: 'Download PDF again', newForm: 'New form',
    sources: ['Personal recommendation', 'Google ad', 'Instagram ad', 'Google Maps', 'Other'],
    continueBtn: 'Continue →',
    soonBadge: 'Coming soon',
    alertFill: 'Please fill in required fields: Full name, Date of birth and Address.',
    alertParent: 'Please fill in the legal guardian details.',
    alertGdpr: 'Please accept the personal data processing consent (GDPR).',
    alertSign: 'Please sign.',
    alertPdfErr: 'PDF generation error. Please try again.',
    pdfSigLabel: 'Client signature', pdfSigLabelMinor: 'Guardian signature',
    pdfDateLabel: 'Date & time',
    pdfParentSection: 'Legal guardian',
    pdfModelText: 'The client consents to the use of photos and videos for marketing purposes of Vesna Tattoo Boutique.',
  },
};

/* ══ FULL DECLARATION TEXT ══ */
const DECLARATION = {
  cz: (name, dob, addr) => `Já, ${name}, narozen/a ${dob}, bytem ${addr}

Tímto svobodně a v dobré vůli prohlašuji, že jsem ke dni podpisu tohoto prohlášení dosáhl/a 18 let, nemám žádné srdeční potíže, nejsem epileptik, diabetik ani hemofilik, netrpím žádnou kožní chorobou a neprojevují se u mne žádné příznaky v souvislosti s prodělanými kožními onemocněními v minulosti. Dále prohlašuji, že nemám a nejsem přenašečem takových onemocnění jako je HIV/AIDS, hepatitidy B, C, syfilidy a jiných pohlavních chorob, nejsem pod vlivem žádných psychotropních a návykových látek jakéhokoli druhu či alkoholických produktů, netrpím žádnou fyzickou či duševní poruchou, nepoužívám žádné léky ani psychofarmaka, které by mohly mít negativní vliv na zrealizování tetování nebo permanentního make-upu na mém těle. Při piercingu je - lupus erythematodes, systémová sklerodermie, kožní onemocnění (psoriáza atd.), zvýšená teplota, špatná srážlivost krve, hepatitida B a C, diabetes; alergická reakce na kovy, selhání ledvin všech stupňů závažnosti, srdeční vada, onkologická onemocnění, adenomy, fibroidy, karcinom mléčné žlázy. Uvádím, že jsem srozuměn s tím, že jsem plně odpovědný za jakoukoli újmu způsobenou uvedením nepravdivých údajů, či zatajením podstatných skutečností.

Zavazuji se, že budu dbát na dodržování zásad péče o tetování, permanentu a o piercing a že pokud i přes jejich dodržení dojde k jakýmkoli zdravotním potížím, které by mohly být přímým důsledkem aplikace tetování, permanentu a piercingu, budu neprodleně telefonicky kontaktovat studio Vesna tattoo boutique.

Současně svým podpisem stvrzuji, že jsem před provedením zásahu byl/a poučen/a o povaze zásahu a jeho možných následcích, jakož i následné péči, ve smyslu ustanovení § 93 odst. 1 zákona č. 89/2012 Sb., občanského zákoníku, v platném znění. Prohlašuji, že na základě shora uvedeného nevzniknou při realizaci tetování a piercingu jakékoli komplikace. Ovšem pokud k takovým dojde, trvám na okamžitém ukončení tetování a piercingu podle rozsahu komplikací. Budou-li tyto komplikace vážnější, než se zdálo na první pohled, zavazuji se, že se obrátím na příslušného lékaře. První korekci provádíme bezplatně, pokud tetování není starší než jeden měsíc. Výjimkou jsou tetování na prstech, šíje, ucho, chodidlo (od 800,-Kč) a také bílé tetování a mikro tetování. U permanentního make-upu je korekce zpoplatněna částkou od 2000 Kč. Souhlasím se zveřejněním svých fotografií pro reklamní účely.

Toto prohlášení je mnou před podpisem pozorně přečteno, s jeho obsahem zcela souhlasím, na potvrzení čehož připojuji svůj podpis.`,

  en: (name, dob, addr) => `I, ${name}, born ${dob}, residing at ${addr}

I hereby freely and in good faith declare that as of the date of signing this declaration I have reached the age of 18, I have no heart conditions, I am not epileptic, diabetic or haemophiliac, I have no skin disease and no symptoms related to past skin conditions. I further declare that I do not have and am not a carrier of diseases such as HIV/AIDS, hepatitis B, C, syphilis or other sexually transmitted diseases, I am not under the influence of any psychotropic or addictive substances of any kind or alcoholic products, I have no physical or mental disorder, I am not taking any medication or psychotropic drugs that could negatively affect the tattooing or permanent make-up procedure on my body. For piercing: lupus erythematosus, systemic scleroderma, skin diseases (psoriasis etc.), elevated temperature, poor blood clotting, hepatitis B and C, diabetes; allergic reaction to metals, renal failure of any degree of severity, heart defect, oncological diseases, adenomas, fibroids, breast carcinoma. I declare that I am fully aware that I am fully responsible for any harm caused by providing false information or concealing material facts.

I undertake to comply with the principles of tattoo, permanent make-up and piercing aftercare and that if, despite following them, any health complications arise that could be a direct result of the tattoo, permanent make-up or piercing, I will immediately contact Vesna tattoo boutique by phone.

By my signature I also confirm that prior to the procedure I was informed about the nature of the procedure and its possible consequences, as well as subsequent care, within the meaning of § 93(1) of Act No. 89/2012 Coll., the Civil Code, as amended. I declare that based on the foregoing no complications will arise during the tattooing and piercing. However, if they do occur, I insist on the immediate termination of the tattoo and piercing according to the extent of complications. If these complications are more serious than they appeared at first glance, I undertake to consult the appropriate physician. The first correction is provided free of charge if the tattoo is not older than one month. Exceptions are tattoos on fingers, neck, ear, sole (from CZK 800) as well as white and micro tattoos. For permanent make-up, correction is charged from CZK 2,000. I consent to the publication of my photos for advertising purposes.

This declaration has been carefully read by me before signing, I fully agree with its content, in confirmation of which I append my signature.`,
};

/* ══ FULL GDPR TEXT (HTML) ══ */
const GDPR_FULL = {
  cz: `<strong>PROHLÁŠENÍ O ZPRACOVÁNÍ OSOBNÍCH ÚDAJŮ</strong><br><br>
Prohlášení o zpracování osobních údajů dle nařízení Evropského parlamentu a Rady (EU) 2016/679 o ochraně fyzických osob v souvislosti se zpracováním osobních údajů a poučení subjektů údajů (dále jen „GDPR").<br><br>
<strong>1. Správce osobních údajů</strong><br>
Správcem osobních údajů je společnost Vesna Tattoo Prague, Náměstí Míru 18, 120 00, Vinohrady, Praha 2, (dále jen „správce"), která Vás tímto v souladu s čl. 12 GDPR informuje o zpracování Vašich osobních údajů a o Vašich právech.<br>
Při zpracování osobních údajů ctíme a respektujeme standardy ochrany osobních údajů a dodržujeme následující zásady: osobní údaje zpracováváme vždy pro jasně a srozumitelně stanovený účel, stanovenými prostředky a způsobem pouze pro dobu, která je nezbytně nutná. Osobní data našich klientů a zaměstnanců sbíráme pouze v nutném rozsahu a nepředáváme je třetím osobám, s výjimkou těch, které se přímo podílejí na procesech uvnitř společnosti za účelem jejich nutného zpracování. Spolupracující osoby (zaměstnanci, subdodavatelé) jsou nuceni přihlásit se k zásadám zpracování osobních dat správce a podstupují pravidelná školení.<br><br>
<strong>2. Rozsah zpracování osobních údajů</strong><br>
Osobní údaje jsou zpracovány v rozsahu, v jakém je příslušný subjekt údajů správci poskytl, a to v souvislosti s uzavřením smluvního či jiného právního vztahu se správcem, z důvodu oprávněného zájmu, nebo které správce shromáždil jinak a zpracovává je v souladu s platnými právními předpisy či k plnění zákonných povinností správce.<br><br>
<strong>3. Zdroje osobních údajů</strong><br>
▪ přímo od subjektů údajů (registrace, dotazníky, smlouvy, prohlášení, webové kontaktní formuláře a chat, e-maily, telefon, webové stránky, vizitky aj.)<br>
▪ veřejně přístupné rejstříky, seznamy a evidence (např. obchodní rejstřík, živnostenský rejstřík, katastr nemovitostí apod.)<br>
▪ automatizovaný záznam elektronické komunikace na základě zákona 127/2005 Sb. a vyhlášky 357/2012 Sb.<br><br>
<strong>4. Kategorie osobních údajů, které jsou předmětem zpracování</strong><br>
▪ adresní a identifikační údaje sloužící k jednoznačné a nezaměnitelné identifikaci subjektu údajů (např. jméno, příjmení, titul, příp. rodné číslo, datum narození, adresa trvalého pobytu, IČ, DIČ, fotografie) a údaje umožňující kontakt se subjektem údajů (kontaktní údaje – např. kontaktní adresa, číslo telefonu, číslo faxu, e-mailová adresa a jiné obdobné informace)<br>
▪ IP adresy, telefonní čísla a jiné provozní a lokalizační údaje vyplývající z provozu služeb sbírané a uchovávané z důvodu zákonné povinnosti<br>
▪ IP adresy a jiné provozní a lokalizační údaje k nutné míře zachování kvality služby<br>
▪ popisné údaje (např. bankovní spojení)<br>
▪ další údaje nezbytné pro plnění smlouvy<br>
▪ údaje poskytnuté nad rámec příslušných zákonů zpracovávané v rámci uděleného souhlasu ze strany subjektu údajů (zpracování fotografií, použití osobních údajů za účelem personálních řízení aj.)<br><br><!-- SPLIT --><strong>5. Účel zpracování osobních údajů</strong><br>
▪ účely obsažené v rámci souhlasu subjektu údajů<br>
▪ jednání o smluvním vztahu<br>
▪ plnění smlouvy<br>
▪ ochrana práv správce, příjemce nebo jiných dotčených osob (např. vymáhání pohledávek správce)<br>
▪ archivnictví vedené na základě zákona<br>
▪ výběrová řízení na volná pracovní místa<br>
▪ plnění zákonných povinností ze strany správce<br><br>
<strong>6. Způsob zpracování a ochrany osobních údajů</strong><br>
Zpracování osobních údajů provádí správce. Zpracování je prováděno v jeho provozovnách, pobočkách a sídle správce jednotlivými pověřenými zaměstnanci správce, příp. zpracovatelem. Ke zpracování dochází prostřednictvím výpočetní techniky, popř. i manuálním způsobem u osobních údajů v listinné podobě za dodržení všech bezpečnostních zásad pro správu a zpracování osobních údajů.<br>
Veškeré subjekty, kterým mohou být osobní údaje zpřístupněny, respektují právo subjektů údajů na ochranu soukromí a jsou povinny postupovat dle platných právních předpisů týkajících se ochrany osobních údajů.<br><br><strong>7. Doba zpracování osobních údajů</strong><br>
V souladu se lhůtami uvedenými v příslušných smlouvách, ve spisovém a skartačním řádu správce či v příslušných právních předpisech jde o dobu nezbytně nutnou k zajištění práv a povinností plynoucích jak ze závazkového vztahu, tak i z příslušných právních předpisů. Typicky jsou tak osobní údaje zpracovávány v plném rozsahu pouze po dobu trvání smluvního vztahu a po skončení platnosti jsou údaje zpracovávány pouze v rámci zákonných předpisů.<br>
Osobní údaje jsou uchovávány maximálně po dobu 10 let od posledního smluvního vztahu s tím, že jsou využívány především ke zlepšení kvality poskytovaných právních služeb a k reklamním účelům.<br><br>
<strong>8. Předávání osobních údajů jiným osobám</strong><br>
Vaše osobní údaje Správce zpřístupní jiným osobám pouze v obvyklém rozsahu a pouze zpracovatelům či jiným příjemcům, typicky dodavatelům externích služeb, za dodržení všech zásad z GDPR vyplývajících. Dále mohou být osobní údaje zpřístupňovány v nezbytně nutném rozsahu právním, ekonomickým a daňovým poradcům. Na vyžádání či v případě podezření na protiprávní jednání mohou být osobní údaje předány také orgánům veřejné správy.<br><br><!-- SPLIT --><strong>9. Právní základ zpracování</strong><br>
Správce zpracovává údaje se souhlasem subjektu údajů s výjimkou zákonem stanovených případů, kdy zpracování osobních údajů nevyžaduje souhlas subjektu údajů. V souladu s čl. 6 odst. 1 GDPR může správce bez souhlasu subjektu údajů zpracovávat tyto údaje:<br>
▪ subjekt údajů udělil souhlas pro jeden či více konkrétních účelů,<br>
▪ zpracování je nezbytné pro splnění smlouvy, jejíž smluvní stranou je subjekt údajů, nebo pro provedení opatření přijatých před uzavřením smlouvy na žádost tohoto subjektu údajů,<br>
▪ zpracování je nezbytné pro splnění právní povinnosti, která se na správce vztahuje,<br>
▪ zpracování je nezbytné pro ochranu životně důležitých zájmů subjektu údajů nebo jiné fyzické osoby,<br>
▪ zpracování je nezbytné pro splnění úkolu prováděného ve veřejném zájmu nebo při výkonu veřejné moci, kterým je pověřen správce,<br>
▪ zpracování je nezbytné pro účely oprávněných zájmů příslušného správce či třetí strany, kromě případů, kdy před těmito zájmy mají přednost zájmy nebo základní práva a svobody subjektu údajů vyžadující ochranu osobních údajů.<br><br>
<strong>11. Práva subjektů údajů</strong><br>
Subjekt údajů má dle GDPR následující práva:<br>
• požadovat přístup k osobním údajům, které správce zpracovává, tedy získat od správce informace, zda osobní údaje, které se ho týkají, jsou či nejsou zpracovávány. Pokud je tomu tak, má právo získat přístup k těmto údajům a k dalším informacím uvedeným v čl. 15 GDPR,<br>
• požadovat opravu či doplnění osobních údajů, které správce zpracovává, pokud jsou nepřesné (čl. 16 GDPR),<br>
• požadovat odstranění osobních údajů v případech, které jsou upraveny v čl. 17 GDPR,<br>
• požadovat omezení zpracování údajů v případech, které jsou upraveny v čl. 18 GDPR,<br>
• získat ty osobní údaje, které se ho týkají a které jsou zpracovány s jeho souhlasem, nebo které jsou zpracovány pro plnění smlouvy nebo pro provedení opatření přijatých před uzavřením smlouvy,<br>
• získat tyto osobní údaje ve strukturovaném, běžně používaném a strojově čitelném formátu, přičemž má právo předat tyto údaje jinému správci, a to za podmínek a s omezeními uvedenými v čl. 20 GDPR,<br>
• má právo vznést námitku proti zpracování dle čl. 21 GDPR,<br>
• právo podat stížnost k dozorovému úřadu – subjekt údajů má právo na stížnost na domnělé porušení obecného nařízení u dozorového úřadu, především v členském státě obvyklého pobytu nebo výkonu práce.<br><br>
O přijetí každé žádosti dle výše uvedených bodů budeme žadatele neprodleně informovat a bez zbytečného odkladu, nejpozději však do 1 měsíce, podáme požadovanou informaci či informaci o přijatých opatřeních.<br>
Tuto lhůtu je možné v případě potřeby a s ohledem na složitost a počet žádostí prodloužit o další dva měsíce. V určitých specifických případech definovaných v GDPR nejsme povinni zcela nebo zčásti žádosti vyhovět.<br>
Bude tomu tak zejména, bude-li žádost zjevně nedůvodná nebo nepřiměřená, zejména protože se opakuje. V takových případech můžeme uložit přiměřený poplatek zohledňující administrativní náklady spojené s poskytnutím požadovaných informací nebo odmítnout žádosti vyhovět. O tomto bude žadatel vždy informován.<br>
V případě, kdy budeme mít důvodné pochybnosti o totožnosti žadatele o poskytnutí informací, můžeme jej požádat o poskytnutí dodatečných informací nezbytných k potvrzení jeho totožnosti. Informace o uplatnění práv subjektu údajů si po přiměřenou dobu (typicky 3 roky) uložíme za účelem evidence a dokladování této skutečnosti, pro statistické účely, zlepšování našich služeb a ochrany našich práv.<br>
V případě, kdy se subjekt údajů domnívá, že je s jeho osobními údaji nakládáno neoprávněně či jinak porušujeme jeho práva, má právo podat stížnost u dozorového úřadu.<br><br>
<strong>12. Právo na námitku</strong><br>
Pokud je právním důvodem zpracování osobních údajů tzv. oprávněný zájem, má subjekt právo kdykoli vznést věcnou námitku proti takovému zpracování osobních údajů. V takovém případě nebudou osobní údaje dále zpracovávány, pokud nebudou dány závažné oprávněné důvody pro zpracování, které převáží nad zájmy subjektu nebo jeho právy a svobodami, nebo pokud nebudou zpracovávány pro určení, výkon nebo obhajobu právních nároků. Námitku proti zpracování může dotčená osoba vznést prostřednictvím kontaktních údajů uvedených níže. V e-mailu prosím uveďte konkrétní situaci, která Vás vede k závěru, že by Správce neměl Vaše údaje zpracovávat. V případě zpracování údajů pro účely přímého marketingu je možné vždy vznést námitku bez dalšího zdůvodňování.`,

  en: `<strong>PERSONAL DATA PROCESSING DECLARATION (GDPR)</strong><br><br>
Declaration pursuant to Regulation (EU) 2016/679 of the European Parliament and of the Council on the protection of natural persons with regard to the processing of personal data (hereinafter "GDPR").<br><br>
<strong>1. Data Controller</strong><br>
The data controller is Vesna Tattoo Prague, Náměstí Míru 18, 120 00, Vinohrady, Praha 2 (hereinafter "the controller"), which hereby informs you pursuant to Art. 12 GDPR about the processing of your personal data and your rights.<br>
In processing personal data we respect the standards of personal data protection and adhere to the following principles: we always process personal data for a clearly and intelligibly defined purpose, by defined means and methods, only for the period that is strictly necessary. We collect personal data of our clients and employees only to the extent necessary and do not pass them to third parties, except those directly involved in processes within the company for the purpose of their necessary processing. Cooperating persons (employees, subcontractors) are required to adhere to the controller's personal data processing principles and undergo regular training.<br><br>
<strong>2. Scope of personal data processing</strong><br>
Personal data are processed to the extent provided by the data subject to the controller in connection with the conclusion of a contractual or other legal relationship with the controller, on the basis of legitimate interest, or collected otherwise and processed in accordance with applicable law or to fulfil the controller's statutory obligations.<br><br>
<strong>3. Sources of personal data</strong><br>
▪ directly from data subjects (registrations, questionnaires, contracts, declarations, web contact forms and chat, emails, phone, websites, business cards, etc.)<br>
▪ publicly accessible registers, lists and records (e.g. commercial register, trade register, land registry, etc.)<br>
▪ automated recording of electronic communications pursuant to Act No. 127/2005 Coll. and Decree No. 357/2012 Coll.<br><br>
<strong>4. Categories of personal data processed</strong><br>
▪ address and identification data for unambiguous identification of the data subject (e.g. name, surname, title, date of birth, permanent address, ID/VAT number, photograph) and data enabling contact with the data subject (contact details – e.g. contact address, phone number, e-mail address and similar information)<br>
▪ IP addresses, phone numbers and other operational and location data collected and retained on the basis of statutory obligation<br>
▪ IP addresses and other operational and location data to the extent necessary for maintaining service quality<br>
▪ descriptive data (e.g. bank details)<br>
▪ further data necessary for the fulfilment of the contract<br>
▪ data provided beyond the scope of applicable laws, processed on the basis of the data subject's consent (processing of photographs, use of personal data for HR purposes, etc.)<br><br><!-- SPLIT --><strong>5. Purpose of personal data processing</strong><br>
▪ purposes covered by the data subject's consent<br>
▪ negotiation of a contractual relationship<br>
▪ fulfilment of a contract<br>
▪ protection of the rights of the controller, recipient or other affected persons (e.g. debt recovery)<br>
▪ archiving pursuant to law<br>
▪ selection procedures for vacant positions<br>
▪ fulfilment of the controller's statutory obligations<br><br>
<strong>6. Method of processing and protection of personal data</strong><br>
Processing of personal data is carried out by the controller at its premises, branches and registered office by individually authorised employees, or by a processor. Processing is carried out by electronic means and, where applicable, manually for personal data in paper form, in compliance with all security principles for the management and processing of personal data.<br>
All entities to which personal data may be disclosed respect the data subjects' right to privacy and are obliged to act in accordance with applicable personal data protection legislation.<br><br><strong>7. Period of personal data processing</strong><br>
In accordance with the time limits set out in the relevant contracts, the controller's records and filing management rules or applicable legislation, data are processed for the period strictly necessary to ensure the rights and obligations arising from the contractual relationship and from applicable legislation. Typically, personal data are processed in full only for the duration of the contractual relationship; after expiry they are processed only within the framework of statutory regulations.<br>
Personal data are retained for a maximum of 10 years from the last contractual relationship, being used primarily to improve the quality of services provided and for marketing purposes.<br><br>
<strong>8. Transfer of personal data to other persons</strong><br>
The controller will disclose your personal data to other persons only to the usual extent and only to processors or other recipients, typically suppliers of external services, in compliance with all principles arising from GDPR. Personal data may also be disclosed to the extent strictly necessary to legal, economic and tax advisers. Upon request or in the event of suspected unlawful conduct, personal data may also be provided to public authorities.<br><br><!-- SPLIT --><strong>9. Legal basis for processing</strong><br>
The controller processes data with the consent of the data subject, except in cases provided by law where processing does not require consent. Pursuant to Art. 6(1) GDPR, the controller may process data without consent where:<br>
▪ the data subject has given consent for one or more specific purposes,<br>
▪ processing is necessary for the performance of a contract to which the data subject is party, or to take steps at the data subject's request prior to entering into a contract,<br>
▪ processing is necessary for compliance with a legal obligation to which the controller is subject,<br>
▪ processing is necessary to protect the vital interests of the data subject or another natural person,<br>
▪ processing is necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in the controller,<br>
▪ processing is necessary for the purposes of the legitimate interests pursued by the controller or a third party, except where such interests are overridden by the interests or fundamental rights and freedoms of the data subject.<br><br>
<strong>11. Rights of data subjects</strong><br>
Under GDPR the data subject has the following rights:<br>
• to request access to personal data processed by the controller and to obtain information as to whether personal data concerning them are being processed, and if so, to access such data and further information pursuant to Art. 15 GDPR,<br>
• to request rectification or completion of inaccurate personal data (Art. 16 GDPR),<br>
• to request erasure of personal data in cases governed by Art. 17 GDPR,<br>
• to request restriction of processing in cases governed by Art. 18 GDPR,<br>
• to obtain personal data concerning them that are processed on the basis of consent or for the performance of a contract, in a structured, commonly used and machine-readable format, and to transmit those data to another controller under the conditions set out in Art. 20 GDPR,<br>
• to object to processing pursuant to Art. 21 GDPR,<br>
• to lodge a complaint with a supervisory authority in the Member State of their habitual residence or place of work.<br><br>
We will promptly acknowledge every request and, without undue delay and at the latest within one month, provide the requested information or information about the measures taken. This period may be extended by a further two months where necessary, taking into account the complexity and number of requests. In certain specific cases defined in GDPR we are not obliged to comply with the request in full or in part. In such cases the applicant will always be informed.<br><br>
<strong>12. Right to object</strong><br>
Where the legal basis for processing is legitimate interest, the data subject has the right to object at any time to such processing. In that case personal data will no longer be processed unless there are compelling legitimate grounds for the processing which override the interests, rights and freedoms of the data subject, or for the establishment, exercise or defence of legal claims. The objection may be submitted via the contact details provided below. In the case of processing for direct marketing purposes, an objection may always be raised without further justification.`,
};

const MODEL_RELEASE = {
  cz: `
    <p><strong>Souhlas s pořizováním a použitím fotografií a videí</strong></p>
    <p>Já, níže podepsaný/á, tímto uděluji souhlas studiu <strong>Vesna Tattoo Boutique</strong> (Máchova 439/27, Praha 2) k pořizování fotografií a videozáznamů mé osoby, mého tetování, piercingu nebo permanentního make-upu, a to při a po provedení zákroku v prostorách studia.</p>
    <p>Souhlasím s tím, aby studio Vesna Tattoo Boutique tyto materiály bezplatně použilo k těmto účelům:</p>
    <ul style="margin:8px 0 12px 18px;line-height:1.7">
      <li>Publikace na sociálních sítích (Instagram, Facebook, TikTok, Pinterest)</li>
      <li>Použití na webových stránkách vesnatattoo.com</li>
      <li>Tvorba reklamních a marketingových materiálů</li>
      <li>Prezentace portfolia studia a jednotlivých umělců</li>
    </ul>
    <p>Prohlašuji, že za poskytnutí tohoto souhlasu nepožaduji finanční ani jinou odměnu. Studio se zavazuje, že materiály nebudou použity způsobem poškozujícím mou pověst nebo důstojnost.</p>
    <p>Tento souhlas uděluji dobrovolně. Mohu jej kdykoli odvolat písemnou žádostí zaslanou na e-mail studia.</p>
    <p>Prohlašuji, že jsem se s tímto dokumentem seznámil/a, porozuměl/a jsem jeho obsahu a podepisuji jej dobrovolně.</p>
  `,
  en: `
    <p><strong>Consent for photography and use of images</strong></p>
    <p>I, the undersigned, hereby grant <strong>Vesna Tattoo Boutique</strong> (Máchova 439/27, Prague 2) permission to photograph and video record my person, my tattoo, piercing or permanent make-up during and after the procedure at the studio.</p>
    <p>I consent to Vesna Tattoo Boutique using these materials free of charge for: publication on social media, use on vesnatattoo.com, advertising and marketing materials, and portfolio presentation.</p>
    <p>I declare that I do not require financial or any other compensation. I grant this consent voluntarily and may withdraw it at any time by written request to the studio's email.</p>
  `,
};

/* ══ STATE ══ */
let lang  = 'cz';
let form  = '';
let step  = 0;
let state = {};
let sigCanvas, sigCtx, sigDrawing = false, sigMark = false;
let pdfDataURL = null;
let logoDataURL = null;

/* ══ TELEGRAM CONFIG ══ */
const TG = {
  token:  '***REMOVED***',
  chatId: '1497672822',
};

async function sendTelegramPDF() {
  try {
    const dobFmt = state.dob
      ? new Date(state.dob).toLocaleDateString(lang === 'cz' ? 'cs-CZ' : 'en-GB')
      : '—';
    const sourceText = state.source
      ? ((state.source === 'Jinak' || state.source === 'Other')
          ? (state.sourceOther || state.source) : state.source)
      : '';
    const caption =
      `📋 *Podpisané prohlášení*\n` +
      `👤 ${state.name || '—'}\n` +
      `🎂 ${dobFmt}\n` +
      `📍 ${state.address || '—'}\n` +
      `📧 ${state.email || '—'}\n` +
      `🗂 ${T[lang].forms[form].name}\n` +
      `🕐 ${state.timestamp}`;

    const resp = await fetch('/api/send-telegram', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name:         state.name        || '',
        dob:          dobFmt,
        address:      state.address     || '',
        email:        state.email       || '',
        formTypeName: T[lang].forms[form].name,
        healthNotes:  state.healthNotes || '',
        source:       sourceText,
        timestamp:    state.timestamp   || '',
        sigDataURL:   state.sigDataURL  || '',
        lang,
        caption,
      }),
    });
    const data = await resp.json();

    if (data.pdfBase64) {
      const safeName = (state.name || 'klient').replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      const dateStr  = new Date().toISOString().slice(0, 10);
      const fname    = `Vesna-Prohlaseni-${safeName}-${dateStr}.pdf`;
      const bytes = atob(data.pdfBase64);
      const arr = new Uint8Array(bytes.length);
      for (let i = 0; i < bytes.length; i++) arr[i] = bytes.charCodeAt(i);
      const blob = new Blob([arr], { type: 'application/pdf' });
      const url  = URL.createObjectURL(blob);
      const a    = document.createElement('a');
      a.href = url; a.download = fname;
      document.body.appendChild(a); a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      pdfDataURL = 'data:application/pdf;base64,' + data.pdfBase64;
    }

    if (data.ok) return true;
    return 'TG:' + (data.tgError || JSON.stringify(data)).slice(0, 60);
  } catch (e) {
    return 'TG:' + (e?.message || String(e)).slice(0, 60);
  }
}

/* ══ EMAILJS CONFIG ══ */
const EJS = {
  publicKey:  'D_a6HEJwT_LGPqwX2',
  serviceId:  'service_crsosym',
  templateId: 'template_49t4gkq',
  studioEmail: 'vesnainprague@gmail.com',
};

async function sendAffidavitEmail() {
  try {
    const dobFmt = state.dob
      ? new Date(state.dob).toLocaleDateString(lang === 'cz' ? 'cs-CZ' : 'en-GB')
      : '—';
    const params = {
      client_name:    state.name    || '—',
      client_dob:     dobFmt,
      client_address: state.address || '—',
      client_email:   state.email   || '—',
      form_type:      T[lang].forms[form].name,
      timestamp:      state.timestamp,
      health_notes:   state.healthNotes || '—',
    };
    const r1 = await emailjs.send(EJS.serviceId, EJS.templateId, { ...params, to_email: EJS.studioEmail });
    return r1.status === 200;
  } catch (e) {
    return 'EJS:' + (e?.text || e?.message || JSON.stringify(e)).slice(0, 60);
  }
}

/* ══ INIT ══ */
document.addEventListener('DOMContentLoaded', () => {
  emailjs.init({ publicKey: EJS.publicKey });
  document.getElementById('f-dob').max = new Date().toISOString().split('T')[0];
  initSigCanvas();
  loadLogo();
});

async function loadLogo() {
  try {
    const resp = await fetch('logo.png');
    if (!resp.ok) throw new Error('not found');
    const blob = await resp.blob();
    logoDataURL = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  } catch (e) {
    logoDataURL = null;
  }
}

/* ══ LANGUAGE ══ */
function setLang(l) {
  lang = l;
  applyTranslations();
  showStep(1);
}

function applyTranslations() {
  const t = T[lang];
  document.getElementById('lang-switch-btn').textContent = t.langSwitch;
  document.getElementById('s1-title').innerHTML = `${t.s1Title}<br><em>${t.s1TitleEm}</em>`;
  document.getElementById('s1-sub').textContent = t.s1Sub;
  ['tattoo','pmu','model','minor'].forEach(f => {
    document.getElementById(`ft-${f}-name`).textContent = t.forms[f].name;
    document.getElementById(`ft-${f}-sub`).textContent  = t.forms[f].sub;
  });
  document.getElementById('lbl-name').innerHTML    = `${t.lbl.name} <span class="req">*</span>`;
  document.getElementById('lbl-dob').innerHTML     = `${t.lbl.dob} <span class="req">*</span>`;
  document.getElementById('lbl-addr').innerHTML    = `${t.lbl.addr} <span class="req">*</span>`;
  document.getElementById('lbl-email').textContent = t.lbl.email;
  document.getElementById('lbl-parent-title').textContent = t.lbl.parentTitle;
  document.getElementById('lbl-pname').innerHTML   = `${t.lbl.pname} <span class="req">*</span>`;
  document.getElementById('lbl-prelation').innerHTML = `${t.lbl.prelation} <span class="req">*</span>`;
  document.getElementById('lbl-pphone').innerHTML  = `${t.lbl.pphone} <span class="req">*</span>`;
  document.getElementById('opt-parent').textContent   = t.lbl.optParent;
  document.getElementById('opt-guardian').textContent = t.lbl.optGuardian;
  document.getElementById('gdpr-card-title').textContent = t.gdprTitle;
  document.getElementById('gdpr-check-label').textContent = t.gdprCheck;
  document.getElementById('gdpr-text').innerHTML = GDPR_FULL[lang];
  ['s2-btn','s3-btn','s4-btn'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = t.continueBtn;
  });
  document.getElementById('submit-btn').textContent = t.submitBtn;
  document.getElementById('dl-again-btn').textContent = t.dlAgain;
  document.getElementById('new-form-btn').textContent  = t.newForm;
  document.getElementById('done-title').textContent    = t.doneTitle;
  document.getElementById('sig-clear-btn').textContent = t.sigClear;
  ['soon-badge','soon-badge-2','soon-badge-3'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = t.soonBadge;
  });
  buildSourceList();
}

/* ══ NAVIGATION ══ */
function showStep(n) {
  document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));
  document.getElementById('s' + n).classList.add('active');
  window.scrollTo(0, 0);
  step = n;
}

function goBack() {
  if (step > 1) showStep(step - 1);
  else showStep(1);
}

function dots(stepId, active, total) {
  const el = document.getElementById('dots-' + stepId);
  if (!el) return;
  el.innerHTML = '';
  for (let i = 0; i < total; i++) {
    const d = document.createElement('span');
    d.className = 'd' + (i < active - 1 ? ' done' : i === active - 1 ? ' a' : '');
    el.appendChild(d);
  }
}

function setBadge(stepId, txt) {
  const el = document.getElementById('badge-' + stepId);
  if (el) el.textContent = txt;
}

/* ══ STEP 1 — choose form ══ */
function chooseForm(btn) {
  form = btn.dataset.form;
  const t = T[lang];
  const formLabel = t.forms[form].name;

  [2,3,4,5].forEach(n => setBadge(n, formLabel));

  document.getElementById('parent-section').style.display =
    form === 'minor' ? 'block' : 'none';

  if (form === 'model') {
    document.getElementById('health-section').style.display = 'none';
    document.getElementById('model-section').style.display  = 'block';
    document.getElementById('model-release-card').innerHTML = `
      <div class="mr-title">${t.s3Model} ${t.s3ModelEm}</div>
      <div class="mr-body">${MODEL_RELEASE[lang]}</div>`;
    document.getElementById('s3-title').innerHTML = `${t.s3Model}<br><em>${t.s3ModelEm}</em>`;
    document.getElementById('s3-sub').textContent = '';
    document.getElementById('source-section').style.display = 'none';
    document.getElementById('gdpr-card').style.marginTop = '0';
  } else {
    document.getElementById('health-section').style.display = 'block';
    document.getElementById('model-section').style.display  = 'none';
    document.getElementById('s3-title').innerHTML = `${t.s3Title}<br><em>${t.s3TitleEm}</em>`;
    document.getElementById('s3-sub').textContent = t.s3Sub;
    document.getElementById('source-section').style.display = 'block';
  }

  const isMinor = form === 'minor';
  document.getElementById('s5-title').innerHTML = isMinor
    ? `${t.s5TitleMinor}<br><em>${t.s5TitleMinorEm}</em>`
    : `${t.s5Title}<br><em>${t.s5TitleEm}</em>`;
  document.getElementById('sig-line').textContent = isMinor ? t.sigLineMinor : t.sigLine;
  document.getElementById('sig-legal').textContent = isMinor ? t.sigLegalMinor : t.sigLegal;

  const totalSteps = form === 'model' ? 3 : 4;
  dots(2, 1, totalSteps);
  dots(3, 2, totalSteps);
  dots(4, 3, totalSteps);
  dots(5, totalSteps, totalSteps);

  showStep(2);
}

/* ══ STEP 2 ══ */
function step2Next() {
  const t = T[lang];
  const name    = document.getElementById('f-name').value.trim();
  const dob     = document.getElementById('f-dob').value;
  const address = document.getElementById('f-address').value.trim();
  if (!name || !dob || !address) { alert(t.alertFill); return; }

  if (form === 'minor') {
    const pname     = document.getElementById('f-pname').value.trim();
    const prelation = document.getElementById('f-prelation').value;
    const pphone    = document.getElementById('f-pphone').value.trim();
    if (!pname || !prelation || !pphone) { alert(t.alertParent); return; }
    state.pname = pname; state.prelation = prelation; state.pphone = pphone;
  }
  state.name    = name;
  state.dob     = dob;
  state.address = address;
  state.email   = document.getElementById('f-email').value.trim();

  if (form !== 'model') buildDeclarationView();
  showStep(3);
}

/* ══ STEP 3 — full declaration text ══ */
function buildDeclarationView() {
  const list = document.getElementById('health-list');
  list.innerHTML = '';

  const dobFmt = state.dob
    ? new Date(state.dob).toLocaleDateString(lang === 'cz' ? 'cs-CZ' : 'en-GB')
    : '—';

  const text = DECLARATION[lang](state.name, dobFmt, state.address);
  const escaped = text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

  const agreeLabel = lang === 'cz'
    ? 'Přečetl/a jsem prohlášení a souhlasím s jeho obsahem'
    : 'I have read the declaration and agree with its content';

  const card = document.createElement('div');
  card.className = 'declaration-card';
  card.innerHTML = `
    <div class="declaration-scroll"><pre class="declaration-pre">${escaped}</pre></div>
    <label class="check-item decl-agree-row" id="decl-agree-label">
      <input type="checkbox" id="decl-agree">
      <span class="cm"></span>
      <span>${agreeLabel}</span>
    </label>`;
  list.appendChild(card);
}

function step3Next() {
  if (form === 'model') { showStep(4); return; }
  const agree = document.getElementById('decl-agree');
  if (agree && !agree.checked) {
    alert(lang === 'cz'
      ? 'Prosím potvrďte, že jste si přečetl/a prohlášení.'
      : 'Please confirm you have read the declaration.');
    return;
  }
  state.healthNotes = document.getElementById('f-health-notes').value.trim();
  showStep(4);
}

/* ══ STEP 4 ══ */
function buildSourceList() {
  const list = document.getElementById('source-list');
  list.innerHTML = '';
  T[lang].sources.forEach(text => {
    const lbl = document.createElement('label');
    lbl.className = 'radio-item';
    lbl.innerHTML = `<input type="radio" name="source" value="${text}" onchange="onSrcChange('${text}')"><span class="rm"></span><span>${text}</span>`;
    list.appendChild(lbl);
  });
}

function onSrcChange(val) {
  state.source = val;
  const isOther = val === 'Jinak' || val === 'Other';
  document.getElementById('source-other-wrap').style.display = isOther ? 'block' : 'none';
}

function step4Next() {
  const t = T[lang];
  if (!document.getElementById('gdpr-check').checked) { alert(t.alertGdpr); return; }
  state.gdprAccepted = true;
  const other = document.getElementById('f-source-other');
  state.sourceOther = other ? other.value.trim() : '';
  // Always reset submit button before showing signature step
  const btn = document.getElementById('submit-btn');
  btn.disabled = false;
  btn.textContent = t.submitBtn;
  showStep(5);
  resizeSigCanvas();
}

/* ══ SIGNATURE ══ */
function initSigCanvas() {
  sigCanvas = document.getElementById('sig-canvas');
  sigCtx = sigCanvas.getContext('2d');
  sigCanvas.addEventListener('mousedown',  onSigStart);
  sigCanvas.addEventListener('mousemove',  onSigMove);
  sigCanvas.addEventListener('mouseup',    onSigEnd);
  sigCanvas.addEventListener('mouseleave', onSigEnd);
  sigCanvas.addEventListener('touchstart', onTStart, { passive: false });
  sigCanvas.addEventListener('touchmove',  onTMove,  { passive: false });
  sigCanvas.addEventListener('touchend',   onSigEnd);
}

function resizeSigCanvas() {
  const w = sigCanvas.parentElement.clientWidth;
  const h = Math.max(180, Math.round(window.innerHeight * 0.27));
  sigCanvas.width = w; sigCanvas.height = h;
  sigCtx.strokeStyle = '#2A2A2A';
  sigCtx.lineWidth = 2.5;
  sigCtx.lineCap = 'round';
  sigCtx.lineJoin = 'round';
  sigMark = false;
}

function pos(e) {
  const r = sigCanvas.getBoundingClientRect();
  return { x: e.clientX - r.left, y: e.clientY - r.top };
}
function onSigStart(e) { sigDrawing = true; const p = pos(e); sigCtx.beginPath(); sigCtx.moveTo(p.x, p.y); }
function onSigMove(e)  { if (!sigDrawing) return; const p = pos(e); sigCtx.lineTo(p.x, p.y); sigCtx.stroke(); sigMark = true; }
function onSigEnd()    { sigDrawing = false; }
function onTStart(e) {
  e.preventDefault();
  const t = e.touches[0], r = sigCanvas.getBoundingClientRect();
  sigDrawing = true; sigCtx.beginPath(); sigCtx.moveTo(t.clientX - r.left, t.clientY - r.top);
}
function onTMove(e) {
  e.preventDefault();
  if (!sigDrawing) return;
  const t = e.touches[0], r = sigCanvas.getBoundingClientRect();
  sigCtx.lineTo(t.clientX - r.left, t.clientY - r.top); sigCtx.stroke(); sigMark = true;
}
function clearSig() {
  sigCtx.clearRect(0, 0, sigCanvas.width, sigCanvas.height);
  sigMark = false; state.sigDataURL = null;
}

/* ══ SUBMIT ══ */
async function submitForm() {
  const t = T[lang];
  if (!sigMark) { alert(t.alertSign); return; }
  state.sigDataURL = sigCanvas.toDataURL('image/png');
  state.timestamp = new Date().toLocaleString(lang === 'cz' ? 'cs-CZ' : 'en-GB', {
    day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
  });
  const btn = document.getElementById('submit-btn');
  btn.textContent = t.generating; btn.disabled = true;
  try {
    const [ejsOk, tgOk] = await Promise.all([
      sendAffidavitEmail(),
      sendTelegramPDF(),
    ]);
    if (!pdfDataURL) await generatePDF();
    console.log('email:', ejsOk, 'tg:', tgOk);
    showDone(ejsOk, tgOk);
  } catch (err) {
    console.error(err);
    btn.textContent = t.submitBtn; btn.disabled = false;
    alert(t.alertPdfErr);
  }
}

/* ══ PDF GENERATION ══ */
function esc(s) {
  return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ── PDF page builders ── */
function pdfCommon() {
  const t = T[lang];
  const dobFmt = state.dob
    ? new Date(state.dob).toLocaleDateString(lang === 'cz' ? 'cs-CZ' : 'en-GB')
    : '—';

  const logoHTML = logoDataURL
    ? `<div>
        <img src="${logoDataURL}" style="height:40px;width:auto;display:block;max-width:200px;">
        <div style="font-size:8.5px;color:#9a6070;letter-spacing:0.14em;text-transform:uppercase;margin-top:3px;">tattoo boutique</div>
       </div>`
    : `<div>
        <span style="font-size:26px;font-weight:700;color:#3a1020;letter-spacing:0.01em;">Vesna</span>
        <div style="font-size:8.5px;color:#9a6070;letter-spacing:0.14em;text-transform:uppercase;margin-top:2px;">tattoo boutique</div>
       </div>`;

  const sigHTML = (label) => `
    <div style="margin-top:32px;padding-top:16px;border-top:1px solid #EAD8DB;">
      <div style="display:flex;justify-content:space-between;align-items:flex-end;">
        <div>
          ${state.sigDataURL ? `<img src="${state.sigDataURL}" style="max-height:56px;max-width:180px;display:block;margin-bottom:5px;">` : '<div style="height:56px;"></div>'}
          <div style="border-bottom:1px solid #C0A8B0;width:200px;margin-bottom:4px;"></div>
          <div style="font-size:8px;color:#9a6070;text-transform:uppercase;letter-spacing:0.06em;">${esc(label)}</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:11px;font-weight:700;color:#2A2A2A;">${esc(state.timestamp)}</div>
          <div style="font-size:8px;color:#9a6070;margin-top:2px;">${lang === 'cz' ? 'Datum a čas' : 'Date & time'}</div>
        </div>
      </div>
    </div>`;

  const headerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;padding-bottom:14px;border-bottom:2.5px solid #FFC3CC;margin-bottom:24px;">
      ${logoHTML}
      <div style="text-align:right;font-size:9.5px;color:#9a6070;line-height:1.7;">
        ${esc(STUDIO.name)}<br>${esc(STUDIO.address)}<br>IČO: ${STUDIO.ico}
      </div>
    </div>`;

  const footerHTML = `
    <div style="margin-top:24px;padding-top:10px;border-top:1px solid #EAD8DB;font-size:8px;color:#b0a0a4;text-align:center;">
      ${esc(STUDIO.name)} · ${esc(STUDIO.address)} · IČO: ${STUDIO.ico}
    </div>`;

  const sourceText = state.source
    ? ((state.source === 'Jinak' || state.source === 'Other')
        ? (state.sourceOther || state.source) : state.source)
    : '—';

  const declText = DECLARATION[lang](state.name, dobFmt, state.address);
  const declParagraphs = declText.split('\n\n').map((p, i) => {
    const s = i === 0
      ? 'font-weight:700;font-size:12px;margin-bottom:14px;'
      : 'margin-bottom:12px;text-align:left;';
    return `<p style="${s}">${esc(p).replace(/\n/g,'<br>')}</p>`;
  }).join('');

  const notesSectionHTML = state.healthNotes ? `
    <div style="margin:14px 0;padding:10px 14px;background:#FFF5F7;border-radius:6px;border-left:3px solid #FFC3CC;">
      <div style="font-size:8px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#CE567C;margin-bottom:4px;">
        ${lang === 'cz' ? 'ZDRAVOTNÍ OBTÍŽE' : 'HEALTH ISSUES'}
      </div>
      <div style="font-size:10.5px;color:#2A2A2A;">${esc(state.healthNotes)}</div>
    </div>` : '';

  const sourceSectionHTML = form !== 'model' ? `
    <div style="margin:14px 0 12px;padding:10px 14px;background:#FFF5F7;border-radius:6px;border-left:3px solid #FFC3CC;">
      <div style="font-size:8px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#CE567C;margin-bottom:4px;">
        ${lang === 'cz' ? 'JAK JSTE SE O NÁS DOZVĚDĚLI' : 'HOW DID YOU FIND US'}
      </div>
      <div style="font-size:11px;font-weight:600;color:#2A2A2A;">${esc(sourceText)}</div>
    </div>` : '';

  const WRAP = `font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#2A2A2A;line-height:1.75;padding:40px 52px;background:#ffffff;width:794px;box-sizing:border-box;`;

  const page1 = `<div style="${WRAP}">
    ${headerHTML}
    <h1 style="font-size:18px;font-weight:700;color:#3a1020;text-align:center;margin-bottom:6px;">
      ${lang === 'cz' ? 'ČESTNÉ PROHLÁŠENÍ' : 'CLIENT DECLARATION'}
    </h1>
    <div style="text-align:center;margin-bottom:20px;">
      <span style="display:inline-block;background:#FFC3CC;color:#3a1020;padding:2px 14px;border-radius:20px;font-size:9.5px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">
        ${esc(T[lang].forms[form].name)}
      </span>
    </div>
    <div style="font-size:11px;line-height:1.78;">${declParagraphs}</div>
    ${notesSectionHTML}
    ${sourceSectionHTML}
    ${sigHTML(t.pdfSigLabel)}
    ${footerHTML}
  </div>`;

  const gdprParts = GDPR_FULL[lang].split('<!-- SPLIT -->');
  const gdprPart1 = gdprParts[0] || '';
  const gdprPart2 = gdprParts[1] || '';
  const gdprPart3 = gdprParts[2] || '';

  const gdprWRAP = `${WRAP}font-size:10px;line-height:1.75;`;

  const page2 = `<div style="${gdprWRAP}">
    ${headerHTML}
    <div style="font-size:10px;line-height:1.75;text-align:left;">${gdprPart1}</div>
    ${footerHTML}
  </div>`;

  const page3 = `<div style="${gdprWRAP}">
    ${headerHTML}
    <div style="font-size:10px;line-height:1.75;text-align:left;">${gdprPart2}</div>
    ${footerHTML}
  </div>`;

  const page4 = `<div style="${gdprWRAP}">
    ${headerHTML}
    <div style="font-size:10px;line-height:1.75;text-align:left;">${gdprPart3}</div>
    ${sigHTML(t.pdfSigLabel)}
    ${footerHTML}
  </div>`;

  return { page1, page2, page3, page4, sigHTML, headerHTML, footerHTML };
}

async function canvasToPages(doc, canvas, isFirst) {
  const A4W = 210, A4H = 297;
  const scale  = canvas.width / A4W;
  const pageH  = Math.round(A4H * scale);
  const minChunk = 100; // skip near-empty trailing pages

  let srcY = 0;
  let pageIdx = 0;
  while (srcY < canvas.height) {
    const srcH = Math.min(pageH, canvas.height - srcY);
    if (srcH < minChunk) break;

    if (!isFirst || pageIdx > 0) doc.addPage();

    const chunk = document.createElement('canvas');
    chunk.width  = canvas.width;
    chunk.height = srcH;
    const ctx = chunk.getContext('2d');
    ctx.drawImage(canvas, 0, srcY, canvas.width, srcH, 0, 0, canvas.width, srcH);

    const imgH = A4H * (srcH / pageH);
    doc.addImage(chunk.toDataURL('image/jpeg', 0.93), 'JPEG', 0, 0, A4W, imgH);

    srcY += pageH;
    pageIdx++;
  }
}

async function tick() {
  await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
}

async function renderSection(pdfEl, html, scale) {
  pdfEl.style.cssText = 'width:794px;padding:0;margin:0;box-sizing:border-box;background:#fff;position:relative;';
  pdfEl.innerHTML = html;
  await tick();
  return html2canvas(pdfEl, {
    allowTaint: true,
    useCORS: false,
    scale: scale || 1.5,
    backgroundColor: '#ffffff',
    width: 794,
    windowWidth: 794,
    scrollX: 0,
    scrollY: 0,
    x: 0,
    y: 0,
    logging: false,
  });
}

async function generatePDF() {
  const { jsPDF } = window.jspdf;
  const pdfTpl = document.getElementById('pdf-tpl');
  const pdfEl  = document.getElementById('pdf-body');

  pdfTpl.style.cssText = 'position:fixed;left:0;top:-9999px;width:794px;background:#fff;';

  const { page1, page2, page3, page4 } = pdfCommon();

  const c1 = await renderSection(pdfEl, page1);
  const c2 = await renderSection(pdfEl, page2);
  const c3 = await renderSection(pdfEl, page3);
  const c4 = await renderSection(pdfEl, page4);

  pdfTpl.style.cssText = 'position:fixed;left:-9999px;top:0;width:794px;background:white;';

  const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' });
  await canvasToPages(doc, c1, true);
  await canvasToPages(doc, c2, false);
  await canvasToPages(doc, c3, false);
  await canvasToPages(doc, c4, false);

  const safeName = (state.name || 'klient').replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
  const dateStr  = new Date().toISOString().slice(0, 10);
  const fname    = `Vesna-Prohlaseni-${safeName}-${dateStr}.pdf`;

  pdfDataURL = doc.output('datauristring');
  doc.save(fname);
}

function buildCompactPDF() {
  const t = T[lang];
  const dobFmt = state.dob
    ? new Date(state.dob).toLocaleDateString(lang === 'cz' ? 'cs-CZ' : 'en-GB')
    : '—';

  const logoHTML = logoDataURL
    ? `<img src="${logoDataURL}" style="height:28px;width:auto;">`
    : `<span style="font-size:18px;font-weight:700;color:#3a1020;">Vesna</span>`;

  const sourceText = state.source
    ? ((state.source === 'Jinak' || state.source === 'Other')
        ? (state.sourceOther || state.source) : state.source)
    : '—';

  const declText = DECLARATION[lang](state.name, dobFmt, state.address);
  const declHTML = declText.split('\n\n').map((p, i) => {
    const style = i === 0
      ? 'font-weight:700;font-size:8px;margin-bottom:4px;'
      : 'margin-bottom:4px;';
    return `<p style="${style}">${esc(p).replace(/\n/g,'<br>')}</p>`;
  }).join('');

  const gdprHTML = GDPR_FULL[lang].replace(/<!--\s*SPLIT\s*-->/g, '');

  const healthHTML = state.healthNotes ? `
    <div style="margin:5px 0;padding:4px 8px;background:#FFF5F7;border-left:2px solid #FFC3CC;border-radius:3px;">
      <span style="font-size:6px;font-weight:700;color:#CE567C;text-transform:uppercase;">${lang === 'cz' ? 'Zdravotní obtíže' : 'Health issues'}:</span>
      <span style="font-size:7px;"> ${esc(state.healthNotes)}</span>
    </div>` : '';

  const sourceHTML = form !== 'model' ? `
    <div style="margin:3px 0;font-size:7px;">
      <span style="color:#CE567C;font-weight:700;">${lang === 'cz' ? 'Jak jste se o nás dozvěděli' : 'How did you find us'}:</span>
      <span> ${esc(sourceText)}</span>
    </div>` : '';

  const sigHTML = `
    <div style="margin-top:8px;padding-top:8px;border-top:1px solid #EAD8DB;display:flex;justify-content:space-between;align-items:flex-end;">
      <div>
        ${state.sigDataURL ? `<img src="${state.sigDataURL}" style="max-height:44px;max-width:150px;display:block;margin-bottom:3px;">` : '<div style="height:44px;"></div>'}
        <div style="border-bottom:1px solid #C0A8B0;width:160px;margin-bottom:3px;"></div>
        <div style="font-size:6.5px;color:#9a6070;text-transform:uppercase;letter-spacing:0.05em;">${esc(t.pdfSigLabel)}</div>
      </div>
      <div style="text-align:right;">
        <div style="font-size:9px;font-weight:700;color:#2A2A2A;">${esc(state.timestamp)}</div>
        <div style="font-size:6.5px;color:#9a6070;">${t.pdfDateLabel}</div>
      </div>
    </div>`;

  return `<div style="font-family:Arial,Helvetica,sans-serif;font-size:7.5px;color:#2A2A2A;line-height:1.35;padding:18px 24px;background:#ffffff;width:794px;box-sizing:border-box;">

    <!-- Header -->
    <div style="display:flex;justify-content:space-between;align-items:center;padding-bottom:8px;border-bottom:2px solid #FFC3CC;margin-bottom:10px;">
      <div>
        ${logoHTML}
        <div style="font-size:6px;color:#9a6070;letter-spacing:0.12em;text-transform:uppercase;margin-top:1px;">tattoo boutique · Praha</div>
      </div>
      <div style="text-align:right;font-size:7px;color:#9a6070;line-height:1.5;">
        ${esc(STUDIO.name)}<br>${esc(STUDIO.address)}<br>IČO: ${STUDIO.ico}
      </div>
    </div>

    <!-- Client info -->
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:3px 8px;background:#FFF5F7;padding:7px 10px;border-radius:4px;margin-bottom:8px;">
      <div>
        <div style="font-size:6px;color:#CE567C;font-weight:700;text-transform:uppercase;margin-bottom:1px;">${lang === 'cz' ? 'Jméno' : 'Name'}</div>
        <div style="font-weight:600;font-size:8px;">${esc(state.name || '—')}</div>
      </div>
      <div>
        <div style="font-size:6px;color:#CE567C;font-weight:700;text-transform:uppercase;margin-bottom:1px;">${lang === 'cz' ? 'Datum narození' : 'Date of birth'}</div>
        <div style="font-weight:600;font-size:8px;">${esc(dobFmt)}</div>
      </div>
      <div style="grid-column:span 2;">
        <div style="font-size:6px;color:#CE567C;font-weight:700;text-transform:uppercase;margin-bottom:1px;">${lang === 'cz' ? 'Adresa' : 'Address'}</div>
        <div style="font-weight:600;font-size:8px;">${esc(state.address || '—')}</div>
      </div>
      ${state.email ? `<div style="grid-column:span 2;">
        <div style="font-size:6px;color:#CE567C;font-weight:700;text-transform:uppercase;margin-bottom:1px;">E-mail</div>
        <div style="font-size:7.5px;">${esc(state.email)}</div>
      </div>` : ''}
      <div>
        <div style="font-size:6px;color:#CE567C;font-weight:700;text-transform:uppercase;margin-bottom:1px;">${lang === 'cz' ? 'Typ' : 'Type'}</div>
        <div style="font-size:7.5px;">${esc(t.forms[form].name)}</div>
      </div>
    </div>

    <!-- Declaration -->
    <div style="margin-bottom:8px;">${declHTML}</div>

    ${healthHTML}
    ${sourceHTML}

    <!-- GDPR -->
    <div style="border-top:1px solid #EAD8DB;margin-top:8px;padding-top:8px;">
      <div style="font-size:6.5px;font-weight:700;color:#CE567C;text-transform:uppercase;margin-bottom:4px;">
        ${lang === 'cz' ? 'Prohlášení o zpracování osobních údajů (GDPR)' : 'Personal data processing declaration (GDPR)'}
      </div>
      <div style="font-size:6.5px;line-height:1.3;color:#3a3030;">${gdprHTML}</div>
    </div>

    ${sigHTML}

    <!-- Footer -->
    <div style="margin-top:8px;padding-top:6px;border-top:1px solid #EAD8DB;font-size:6.5px;color:#b0a0a4;text-align:center;">
      ${esc(STUDIO.name)} · ${esc(STUDIO.address)} · IČO: ${STUDIO.ico}
    </div>
  </div>`;
}

/* ══ DONE ══ */
function showDone(ejsOk, tgOk) {
  const t = T[lang];
  document.getElementById('done-name').textContent = state.name;
  document.getElementById('done-meta').textContent =
    `${T[lang].forms[form].name} · ${state.timestamp}`;
  const emailStatus = ejsOk === true ? '✓ Email' : `✗ ${ejsOk || 'Email err'}`;
  const tgStatus    = tgOk  === true ? '✓ Telegram' : `✗ ${tgOk || 'TG err'}`;
  document.getElementById('done-desc').innerHTML =
    t.doneDesc.replace('\n', '<br>') + `<br><small style="color:#9a6070;word-break:break-all">${emailStatus}<br>${tgStatus}</small>`;
  showStep(6);
}

function downloadAgain() {
  if (!pdfDataURL) return;
  const a = document.createElement('a');
  a.href = pdfDataURL;
  a.download = `Vesna-${(state.name || 'klient').replace(/\s+/g,'-')}.pdf`;
  a.click();
}

function newForm() {
  state = {}; pdfDataURL = null; form = '';
  document.getElementById('f-name').value    = '';
  document.getElementById('f-dob').value     = '';
  document.getElementById('f-address').value = '';
  document.getElementById('f-email').value   = '';
  document.getElementById('f-pname').value   = '';
  document.getElementById('f-pphone').value  = '';
  document.getElementById('f-prelation').value = '';
  document.getElementById('f-health-notes').value = '';
  document.getElementById('gdpr-check').checked   = false;
  document.getElementById('source-list').querySelectorAll('input').forEach(r => r.checked = false);
  document.getElementById('source-other-wrap').style.display = 'none';
  clearSig();
  showStep(1);
}
