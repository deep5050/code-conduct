const coc = require('./index');
console.log(coc.iw());
console.log(coc.get_coc("bn"));
console.log(coc.get_code("English"));
console.log(coc.get_coc(coc.get_code("Chinese (China)")));
console.log(coc.supported_langs());
console.log(coc.get_lang("ko"));
console.log(coc.all_langs());

const sp_langs = coc.supported_langs();
sp_langs.forEach((el,i)=>{
    console.log(coc.get_lang(el));
});