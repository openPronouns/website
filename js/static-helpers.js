
document.addEventListener('DOMContentLoaded', () => {
    replaceNav();
    replaceFooter();
    activateLang('en');
});

function replaceNav() {
    const navBar = document.getElementById('nav');
    var opClass = '';
    var wikiClass = '';
    if (document.body.id === 'home') opClass = 'active';
    else if (document.body.id === 'wiki') wikiClass = `active`;

    navBar.innerHTML = `
        <a href="/" class="${opClass}"><img src="/oPronouns-logo.svg" class="nav-img">openPronouns</a>
        <ul class="nav-list">
            <li class="nav-list"><a href="/wiki" class="vavilon ${wikiClass}" data-vavilon="wiki-title">Wiki</a></li>
        </ul>
        <div class="lang">
            <button id="en-selector" onclick="activateLang('en')" title="English">EN</button>
            <button id="eo-selector" onclick="activateLang('eo')" title="Esperanto">EO</button>
        </div>
    `;
}

function replaceFooter() {
    const footer = document.getElementById('footer');
    footer.innerHTML = `
        &#xA9; 2022 <a href="https://ludoviko.ch">Ludoviko</a>, GPL v3  |  <span class="vavilon" data-vavilon="footer-correct">Something wrong? Correct it</span> <a href="https://github.com/openPronouns/website" target="_blank" rel="noopener noreferrer" class="vavilon" data-vavilon="footer-here">here</a> || <span class="vavilon" data-vavilon="footer-host">Partially hosted on</span> <a href="/wiki/ipfs">IPFS</a>
    `;
}