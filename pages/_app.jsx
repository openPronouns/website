import '../styles/globals.scss';
import { useTranslation, useLanguageQuery } from 'next-export-i18n';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
	const { t } = useTranslation();
	const [query] = useLanguageQuery();

	return (
		<>
			<Head>
				<title>openPronouns</title>
				<meta name="description" content="The website for the openPronouns project. " />
				<link rel="icon" href="/oPronouns-logo.svg" type="image/svg" />
			</Head>
			<Component {...pageProps} />
			<footer id="footer">
				&#xA9; 2022 <a href="https://ludoviko.ch">Ludoviko</a>, GPL v3 | {t('global.footer.correct')}{' '}
				<a href="https://github.com/openPronouns/website" target="_blank" rel="noopener noreferrer">
					{t('global.footer.here')}
				</a>{' '}
				|| {t('global.footer.host')}{' '}
				<a href="/wiki/ipfs" target="_blank">
					IPFS
				</a>
			</footer>
		</>
	);
}

export default MyApp;
