
<p align="center"> <img src="https://i.imgur.com/TXs4hCy.jpg" title="source: imgur.com" /></p>
<div align="center">
<p align="center" ><h1 align="center"> code-conduct </h1></p>
</div>
<p align="center"> Exports Code-Of-conduct In <b>28</b> Different Languages :)</p>

## Supported Languages
1. - [x] Bengali
2. - [x] Bosnian
3. - [x] German
4. - [x] Greek
5. - [x] English
6. - [x] Spanish
7. - [x] Farsi (Iran)
8. - [x] French
9. - [x] Hindi
10. - [x] Indonesian
11. - [x] Icelandic
12. - [x] Hebrew
13. - [x] Japanese
14. - [x] Kannada
15. - [x] Korean
16. - [x] FYRO Macedonian
17. - [x] Dutch
18. - [x] Polish
19. - [x] Portuguese (Brazil)
20. - [x] Portuguese
21. - [x] Romanian
22. - [x] Russian
23. - [x] Slovenian
24. - [x] Swedish
25. - [x] Turkish
26. - [x] Ukrainian
27. - [x] Chinese (China)
28. - [x] Chinese (Taiwan)

## Install

Run `npm install code-conduct` Or `yarn add code-conduct` :zap:

## Usage
```js
const coc = require('code-conduct');
```
### `language_id`()

`@returns` code of conduct of the language id

```js
console.log(coc.iw());
/* =>

# קוד התנהגות לתורם

## ההתחייבות שלנו

לטובת עידוד של סביבה פתוחה ומקבלת, אנחנו בתור התורמים והמתחזקים מתחייבים להפוך 
את ההשתתפות בפרויקט שלנו ואת הקהילה שלנו לחוויה נטולת הטרדות לכל אדם באשר הוא
ללא הבדלי גיל, גודל גוף, מגבלות פיזיות, מוצא אתני, הזדהות מגדרית, רמת ניסיון, לאום, 
מראה חיצוני, גזע, דת, זהות ונטיה מינית.

## הסטנדרטים שלנו

דוגמאות להתנהגות התורמת לסביבה חיובית כוללות:

* שימוש בשפה מקבלת ומברכת
* כיבוד נקודות מבט וחוויות שונות
* קבלה של ביקורת בונה בהבנה
* התמקדות במה שהכי טוב לקהילה
* הפגנת אמפתיה כלפי חברים אחרים מהקהילה

דוגמאות להתנהגות בלתי הולמת כוללות:

* שימוש בשפה מינית, תמונות גסות, או הטרדה מינית
* הטרלה, תגובות מעליבות/משפילות, תקיפה אישית או פוליטית
* הטרדה פומבית או אישית
* פרסום מידע אישי של אחרים, כגון כתובת פיזית או אלקטרונית, בלי אישור מפורש
* התנהגות כלשהי שאינה סבירה בסביבת עבודה מקצועית

## האחריויות שלנו......... */ 
```

### get_coc(language_id)

`@param` language_id

`@returns` code of conduct text

```js
console.log(coc.get_coc("bn"));
/* =># কনট্রিবিউটরদের আচরনবিধি

## আমাদের অঙ্গীকার


গোষ্ঠীর অবাধ এবং স্বাগতপূর্ণ ভাবমূর্তি বজায় রাখার আগ্রহে, 
আমরা কনট্রিবিউটর এবং মেনটেইনার হিসেবে অঙ্গীকার করছি যে, 
এই প্রজেক্ট ও গোষ্ঠীতে যোগদান বয়স, শরীর, অক্ষমতা, জাতি, 
লিঙ্গ পরিচয় ও অভিব্যক্তি, অভিজ্ঞতা, জাতীয়তা, চেহারা, 
বর্ণ, ধর্ম, যৌন পরিচয় ও অভিব্যক্তি নির্বিশেষে সবার জন্য 
একটি হয়রানি-মুক্ত অভিজ্ঞতা করব।


## আমাদের মানদন্ড
  
ইতিবাচক পরিবেশ তৈরী করতে ব্যবহারের কিছু উদাহরন:

* স্বাগতপূর্ণ ভাষা ব্যবহার
* বিভিন্ন দৃষ্টিভঙ্গি এবং অভিজ্ঞতার প্রতি সম্মান
* মার্জিত ভাবে গঠনমূলক সমালোচনা গ্রহণ
* গোষ্ঠীর উন্নতিকে প্রাধান্য দেওয়া
* গোষ্ঠীর বাকি সদস্যদের প্রতি সহমর্মিতা দেখানো
  
  
গ্রহণযোগ্য নয়, অংশগ্রহণকারীদের এমন আচরণের উদাহরণ:......

*/
```

### get_code(language_name)

`@param` language_name

`@returns` language_id


```js
console.log(coc.get_code("English"));
// => en
```
### supported_lang()
`@returns` language_id[]

```js
console.log(coc.supported_langs());
/* =>

[
  'bn', 'bs', 'de',    'el',
  'en', 'es', 'fa_ir', 'fr',
  'hi', 'id', 'is',    'iw',
  'ja', 'kn', 'ko',    'mk',
  'nl', 'pl', 'pt_br', 'pt',
  'ro', 'ru', 'sl',    'sv',
  'tr', 'uk', 'zh_cn', 'zh_tw'
]
*/
```

### get_lang(language_id)
`@param` language_id
`@returns` language_name

```js
console.log(coc.get_lang("ko"));
//=> Korean
```
### all_langs()

`@returns` {language_id:language_name}

```js
console.log(coc.all_langs());
/*=>
{
  aa: 'Afar',
  ab: 'Abkhazian',
  af: 'Afrikaans',
  am: 'Amharic',
  ar: 'Arabic',
  ar_ae: 'Arabic (U.A.E.)',
  ar_bh: 'Arabic (Bahrain)',
  ar_dz: 'Arabic (Algeria)',
  ar_eg: 'Arabic (Egypt)',
  ar_iq: 'Arabic (Iraq)',
  ar_jo: 'Arabic (Jordan)',
  ar_kw: 'Arabic (Kuwait)',
  ar_lb: 'Arabic (Lebanon)',
  ar_ly: 'Arabic (libya)',
  ar_ma: 'Arabic (Morocco)',
  ar_om: 'Arabic (Oman)',
  ar_qa: 'Arabic (Qatar)',
  ar_sa: 'Arabic (Saudi Arabia)',
  ar_sy: 'Arabic (Syria)',
  ar_tn: 'Arabic (Tunisia)',
  ar_ye: 'Arabic (Yemen)',
  as: 'Assamese',
  ay: 'Aymara',
  az: 'Azeri',
  ba: 'Bashkir',
  be: 'Belarusian',
  bg: 'Bulgarian',
  bh: 'Bihari',
  bi: 'Bislama',
  bn: 'Bengali',
  bo: 'Tibetan',
  br: 'Breton',
  bs: 'Bosnian',
  ca: 'Catalan',
  co: 'Corsican',
  cs: 'Czech',
  cy: 'Welsh',
  da: 'Danish',
  de: 'German',
  de_at: 'German (Austria)',
  de_ch: 'German (Switzerland)',
  de_li: 'German (Liechtenstein)',
  de_lu: 'German (Luxembourg)',
  div: 'Divehi',
  dz: 'Bhutani',
  el: 'Greek',
  en: 'English',
  en_au: 'English (Australia)',
  en_bz: 'English (Belize)',
  en_ca: 'English (Canada)',
  en_gb: 'English (United Kingdom)',
  en_ie: 'English (Ireland)',
  en_jm: 'English (Jamaica)',
  en_nz: 'English (New Zealand)',
  en_ph: 'English (Philippines)',
  en_tt: 'English (Trinidad)',
  en_us: 'English (United States)',
  en_za: 'English (South Africa)',
  en_zw: 'English (Zimbabwe)',
  eo: 'Esperanto',
  es: 'Spanish',
  es_ar: 'Spanish (Argentina)',
  es_bo: 'Spanish (Bolivia)',
  es_cl: 'Spanish (Chile)',
  es_co: 'Spanish (Colombia)',
  es_cr: 'Spanish (Costa Rica)',
  es_do: 'Spanish (Dominican Republic)',
  es_ec: 'Spanish (Ecuador)',
  es_es: 'Spanish (España)',
  es_gt: 'Spanish (Guatemala)',
  es_hn: 'Spanish (Honduras)',
  es_mx: 'Spanish (Mexico)',
  es_ni: 'Spanish (Nicaragua)',
  es_pa: 'Spanish (Panama)',
  es_pe: 'Spanish (Peru)',
  es_pr: 'Spanish (Puerto Rico)',
  es_py: 'Spanish (Paraguay)',
  es_sv: 'Spanish (El Salvador)',
  es_us: 'Spanish (United States)',
  es_uy: 'Spanish (Uruguay)',
  es_ve: 'Spanish (Venezuela)',
  et: 'Estonian',
  eu: 'Basque',
  fa: 'Farsi',
  fa_ir: 'Farsi (Iran)',
  fi: 'Finnish',
  fj: 'Fiji',
  fo: 'Faeroese',
  fr: 'French',
  fr_be: 'French (Belgium)',
  fr_ca: 'French (Canada)',
  fr_ch: 'French (Switzerland)',
  fr_lu: 'French (Luxembourg)',
  fr_mc: 'French (Monaco)',
  fy: 'Frisian',
  ga: 'Irish',
  gd: 'Gaelic',
  gl: 'Galician',
  gn: 'Guarani',
  gu: 'Gujarati',
  ha: 'Hausa',
  he: 'Hebrew',
  hi: 'Hindi',
  hr: 'Croatian',
  hu: 'Hungarian',
  hy: 'Armenian',
  ia: 'Interlingua',
  id: 'Indonesian',
  ie: 'Interlingue',
  ik: 'Inupiak',
  in: 'Indonesian',
  is: 'Icelandic',
  it: 'Italian',
  it_ch: 'Italian (Switzerland)',
  iw: 'Hebrew',
  ja: 'Japanese',
  ji: 'Yiddish',
  jw: 'Javanese',
  ka: 'Georgian',
  kk: 'Kazakh',
  kl: 'Greenlandic',
  km: 'Cambodian',
  kn: 'Kannada',
  ko: 'Korean',
  kok: 'Konkani',
  ks: 'Kashmiri',
  ku: 'Kurdish',
  ky: 'Kirghiz',
  kz: 'Kyrgyz',
  la: 'Latin',
  ln: 'Lingala',
  lo: 'Laothian',
  ls: 'Slovenian',
  lt: 'Lithuanian',
  lv: 'Latvian',
  mg: 'Malagasy',
  mi: 'Maori',
  mk: 'FYRO Macedonian',
  ml: 'Malayalam',
  mn: 'Mongolian',
  mo: 'Moldavian',
  mr: 'Marathi',
  ms: 'Malay',
  mt: 'Maltese',
  my: 'Burmese',
  na: 'Nauru',
  nb_no: 'Norwegian (Bokmal)',
  ne: 'Nepali (India)',
  nl: 'Dutch',
  nl_be: 'Dutch (Belgium)',
  nn_no: 'Norwegian',
  no: 'Norwegian (Bokmal)',
  oc: 'Occitan',
  om: '(Afan)/Oromoor/Oriya',
  or: 'Oriya',
  pa: 'Punjabi',
  pl: 'Polish',
  ps: 'Pashto/Pushto',
  pt: 'Portuguese',
  pt_br: 'Portuguese (Brazil)',
  qu: 'Quechua',
  rm: 'Rhaeto_Romanic',
  rn: 'Kirundi',
  ro: 'Romanian',
  ro_md: 'Romanian (Moldova)',
  ru: 'Russian',
  ru_md: 'Russian (Moldova)',
  rw: 'Kinyarwanda',
  sa: 'Sanskrit',
  sb: 'Sorbian',
  sd: 'Sindhi',
  sg: 'Sangro',
  sh: 'Serbo_Croatian',
  si: 'Singhalese',
  sk: 'Slovak',
  sl: 'Slovenian',
  sm: 'Samoan',
  sn: 'Shona',
  so: 'Somali',
  sq: 'Albanian',
  sr: 'Serbian',
  ss: 'Siswati',
  st: 'Sesotho',
  su: 'Sundanese',
  sv: 'Swedish',
  sv_fi: 'Swedish (Finland)',
  sw: 'Swahili',
  sx: 'Sutu',
  syr: 'Syriac',
  ta: 'Tamil',
  te: 'Telugu',
  tg: 'Tajik',
  th: 'Thai',
  ti: 'Tigrinya',
  tk: 'Turkmen',
  tl: 'Tagalog',
  tn: 'Tswana',
  to: 'Tonga',
  tr: 'Turkish',
  ts: 'Tsonga',
  tt: 'Tatar',
  tw: 'Twi',
  uk: 'Ukrainian',
  ur: 'Urdu',
  uz: 'Uzbek',
  vi: 'Vietnamese',
  vo: 'Volapuk',
  wo: 'Wolof',
  xh: 'Xhosa',
  yi: 'Yiddish',
  yo: 'Yoruba',
  zh: 'Chinese',
  zh_cn: 'Chinese (China)',
  zh_hk: 'Chinese (Hong Kong SAR)',
  zh_mo: 'Chinese (Macau SAR)',
  zh_sg: 'Chinese (Singapore)',
  zh_tw: 'Chinese (Taiwan)',
  zu: 'Zulu'
}


*/
```

## License
MIT (C) 2020 Dipankar Pal

## Related
[autobadge](github.com/deep5050/autobadge) . [qikstart](github.com/deep5050/qikstart) . [qikQR](github.com/deep5050/qikQR)