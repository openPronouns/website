const defLocale = 'en';
const supportedLocales = ['en'];
let locale;
let translations = {};


document.addEventListener('DOMContentLoaded', () => {
    setLocale(defLocale);
});



async function setLocale(_locale) {
    if (!supportedLocales.includes(_locale)) {
        _locale = defLocale;
    }

    if (_locale === locale) return;

    const newTranslations = await getTranslations(_locale);
    locale = _locale;
    translations = newTranslations;

    translatePage();
}

async function getTranslations(_locale) {
    const res = await fetch(`/locale/${_locale}.json`);
    return await res.json();
}

function translatePage() {
    document.querySelectorAll('[data-i18n-key]').forEach(translateElement);
}

async function translateElement(element) {
    const key = element.getAttribute('data-i18n-key');
    const translation = translations[key];
    element.innerHTML = translation;
}