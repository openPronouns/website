const langs = ['en', 'eo'];

document.addEventListener('DOMContentLoaded', () => {
    activateLang('en');
});

function activateLang(lang) {
    setLang(lang);
    document.getElementById(lang + '-selector').className = 'active';
    document.documentElement.lang = lang;
    for (let i = 0; i < langs.length; i++) {
        if (langs[i] != lang) {
            document.getElementById(langs[i] + '-selector').className = '';
        }
    }
}