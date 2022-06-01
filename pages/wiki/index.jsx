/* eslint-disable @next/next/no-img-element */
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n';
import Link from 'next/link';
import styles from '../../styles/Wiki.module.scss';
import toTitleCase from '../../lib/title_case';
import Head from 'next/head';

export default function Wiki() {
	const { t } = useTranslation();
	const [query] = useLanguageQuery();

	return (
		<>
			<div>
				<Head>
					<title>openPronouns {toTitleCase(t('global.wiki'))}</title>
				</Head>
				<nav>
					<img src="/oPronouns-logo.svg" alt={t('global.logo')} className="nav-img" />
					<Link href="/" passHref>
						openPronouns
					</Link>
					<ul className="nav-list">
						<li className={['nav-list']}>
							<Link href="/wiki">
								<a className="active">{toTitleCase(t('global.wiki'))}</a>
							</Link>
						</li>
					</ul>
					<ul className={styles.sNavList}>
						<li>
							<Link passHref href="/wiki" className={[styles.sNavList]}>
								<a className="active">
									{toTitleCase(t('global.wiki'))} {toTitleCase(t('global.home'))}
								</a>
							</Link>
						</li>
						<li>
							<Link passHref href="/wiki/ipfs/" className={styles.sNavList}>
								IPFS
							</Link>
						</li>
						<li>
							<Link passHref href="/wiki/data/" className={styles.sNavList}>
								{toTitleCase(t('wiki.data.navTitle'))}
							</Link>
						</li>
					</ul>
				</nav>
				<div className="container">
					<h1 className={styles.h1}>
						{toTitleCase(t('global.wiki'))} {toTitleCase(t('global.home'))}
					</h1>
					<p className={styles.p}>{t('wiki.index.p.0')}</p>
					<div className="edited">
						<p>
							{t('wiki.edited.text')} {t('wiki.index.edited.date')} {t('wiki.edited.by')} {t('wiki.index.edited.name')}
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
