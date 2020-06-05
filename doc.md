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

