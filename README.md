
<p align="center"> <img src="https://i.imgur.com/YVmCj1H.png" title="CODE-CONDUCT"  /></p>


<div align="center">
<p align="center" ><h1 align="center"> CODE-CONDUCT </h1></p>
</div>
<p align="center"> Exports Code-Of-conduct In <b>28</b> Different Languages :)</p>
<p align="center"><a href="https://github.com/deep5050/code-conduct/actions?query=workflow%3Anpm-publish"><img src="https://img.shields.io/github/workflow/status/deep5050/code-conduct/npm-publish?label=npm-publish&logo=github&style=for-the-badge"></a></p>


<p align="center"> <a href="https://www.npmjs.com/package/code-conduct"><img alt="npm" src="https://img.shields.io/npm/dt/code-conduct?color=red&label=INSTALL&logo=npm&style=for-the-badge"></a></p>

## Supported Languages

1. Bengali
2. Bosnian
3. German
4. Greek
5. English
6. Spanish
7. Farsi (Iran)
8. French
9. Hindi
10. Indonesian
11. Icelandic
12. Hebrew
13. Japanese
14. Kannada
15. Korean
16. FYRO Macedonian
17. Dutch
18. Polish
19. Portuguese (Brazil)
20. Portuguese
21. Romanian
22. Russian
23. Slovenian
24. Swedish
25. Turkish
26. Ukrainian
27. Chinese (China)
28. Chinese (Taiwan)

## Install

Run `npm install code-conduct` Or `yarn add code-conduct` :zap:

## Usage
For complete Documentation see : [code-conduct](https://deep5050.github.io/code-conduct)


```js
const coc = require('code-conduct');
```
### `lang_id`()

`@returns` code of conduct of the language id

```js
console.log(coc.en());
/* =>
# Contributor Covenant Code of Conduct

## Our Pledge

In the interest of fostering an open and welcoming environment, we as
contributors and maintainers pledge to making participation in our project and
our community a harassment-free experience for everyone, regardless of age, body
size, disability, ethnicity, gender identity and expression, level of experience,
nationality, personal appearance, race, religion, or sexual identity and
orientation.

## Our Standards

Examples of behavior that contributes to creating a positive environment
include:

* Using welcoming and inclusive language
* Being respectful of differing viewpoints and experiences
* Gracefully accepting constructive criticism
* Focusing on what is best for the community
* Showing empathy towards other community members .........
*/ 
```

### get_coc(lang_id)

`@param` lang_id

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

### get_code(lang_name)

`@param` lang_name

`@returns` lang_id


```js
console.log(coc.get_code("English"));
// => en
```
### supported_lang()
`@returns` lang_id[]

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
`@param` lang_id
`@returns` lang_name

```js
console.log(coc.get_lang("ko"));
//=> Korean
```
### all_langs()

`@returns` {lang_id:lang_name}

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
[autobadge](https://github.com/deep5050/autobadge) . [qikstart](https://github.com/deep5050/qikstart) . [qikQR](https://github.com/deep5050/qikQR)


## Thanks

<div>Icons made by <a href="https://www.flaticon.com/authors/photo3idea-studio" title="photo3idea_studio">photo3idea_studio</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>