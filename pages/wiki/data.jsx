/* eslint-disable @next/next/no-img-element */

import { useLanguageQuery, useTranslation } from 'next-export-i18n';
import Head from 'next/head';
import Link from 'next/link';
import toTitleCase from '../../lib/title_case';
import styles from '../../styles/Wiki.module.css';

export default function Data() {
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
						<a>openPronouns</a>
					</Link>
					<ul className="nav-list">
						<li className="nav-list">
							<Link href="/wiki">
								<a className="active">{toTitleCase(t('global.wiki'))}</a>
							</Link>
						</li>
					</ul>
					<ul className={styles.sNavList}>
						<li>
							<Link passHref href="/wiki" className={[styles.sNavList]}>
								<a>
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
								<a className="active">{toTitleCase(t('wiki.data.navTitle'))}</a>
							</Link>
						</li>
					</ul>
				</nav>
				<div className="container">
					<h1 className={styles.h1}>{toTitleCase(t('wiki.data.title'))}</h1>
					<h2 className={styles.h2}>{toTitleCase(t('wiki.data.h.0'))}</h2>
					<p className={styles.p}>
						{t('wiki.data.p.0')} <Link href="/wiki/ipfs">IPFS</Link> {t('wiki.data.p.1')}.
					</p>
					<div className="edited">
						<p>
							{t('wiki.edited.text')} {t('wiki.data.edited.date')} {t('wiki.edited.by')} {t('wiki.data.edited.name')}
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
