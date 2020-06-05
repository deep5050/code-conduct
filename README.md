
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


```js
console.log(coc.get_code("English"));
// => en
```
### supported_lang()

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

```js
console.log(coc.get_lang("ko"));
//=> Korean
```
### all_langs()


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
  ay: 'Aymara', ................
}


*/
```
## API
## Modules

<dl>
<dt><a href="#module_all_langs">all_langs</a> ⇒ <code>Object</code></dt>
<dd><p>A module that returns a list of all languages</p>
</dd>
<dt><a href="#module_supported_langs">supported_langs</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>A module that exports an array of all languages id supported by code-conduct till now</p>
</dd>
<dt><a href="#module_get_code">get_code</a> ⇒ <code>string</code></dt>
<dd><p>A module to get language Id of a language</p>
</dd>
<dt><a href="#module_get_lang">get_lang</a> ⇒ <code>string</code></dt>
<dd><p>A module to get language name from a language ID</p>
</dd>
<dt><a href="#module_get_coc">get_coc</a> ⇒ <code>string</code></dt>
<dd><p>A module to export code-of-conduct text for a language ID</p>
</dd>
</dl>

---

<a name="module_all_langs"></a>

## all\_langs ⇒ <code>Object</code>
A module that returns a list of all languages

**Returns**: <code>Object</code> - - Object of all language in { id : name } format  
<a name="module_supported_langs"></a>

## supported\_langs ⇒ <code>Array.&lt;string&gt;</code>
A module that exports an array of all languages id supported by code-conduct till now

**Returns**: <code>Array.&lt;string&gt;</code> - - Array of supported language IDs  
**Author**: Dipankar Pal <dipankarpal5050@gmail.com>  
<a name="module_get_code"></a>

## get\_code ⇒ <code>string</code>
A module to get language Id of a language

**Returns**: <code>string</code> - - Language ID for the given language name  
**Author**: Dipankar Pal <dipankarpal5050@gmail.com>  

| Param | Type | Description |
| --- | --- | --- |
| lang_name | <code>string</code> | An exact language name |

<a name="module_get_lang"></a>

## get\_lang ⇒ <code>string</code>
A module to get language name from a language ID

**Returns**: <code>string</code> - - Language name for the language_id  
**Author**: Dipankar Pal <dipankarpal5050@gmail.com>  

| Param | Type | Description |
| --- | --- | --- |
| lang_id | <code>string</code> | Language ID of a language |

<a name="module_get_coc"></a>

## get\_coc ⇒ <code>string</code>
A module to export code-of-conduct text for a language ID

**Returns**: <code>string</code> - - Code-of-conduct for the language  
**Author**: Dipankar Pal <dipankarpal5050@gmail.com>  

| Param | Type | Description |
| --- | --- | --- |
| lang_id | <code>string</code> | Language ID of the intended Language |



## License
MIT (C) 2020 Dipankar Pal

## Related
[autobadge](https://github.com/deep5050/autobadge) . [qikstart](https://github.com/deep5050/qikstart) . [qikQR](https://github.com/deep5050/qikQR)


## Thanks

<div>Icons made by <a href="https://www.flaticon.com/authors/photo3idea-studio" title="photo3idea_studio">photo3idea_studio</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>