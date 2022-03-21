const langs = ['en', 'eo'];

function activateLang(lang) {
    setLang(lang);
    document.getElementById(lang + '-selector').className = 'active';
    for (let i = 0; i < langs.length; i++) {
        if (langs[i] != lang) {
            document.getElementById(langs[i] + '-selector').className = '';
        }
    }
}