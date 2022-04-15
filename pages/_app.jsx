import '..//styles/globals.css'
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n';

function MyApp({ Component, pageProps }) {
	const { t } = useTranslation();
  const [query] = useLanguageQuery();
  
  return (
		<>
			<Component {...pageProps} />
			<footer id="footer">&#xA9; 2022 <a href="https://ludoviko.ch">Ludoviko</a>, GPL v3  |  {t(
				'global.footer.correct'
			)} <a href="https://github.com/openPronouns/website" target="_blank" rel="noopener noreferrer">{t('global.footer.here')}</a> || {t(
				'global.footer.host'
			)} <a href="/wiki/ipfs" target="_blank">IPFS</a></footer>
		</>
  );
}

export default MyApp
