/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Wiki.module.scss';
import toTitleCase from '../../lib/title_case';
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n';

export default function WikiIpfs() {
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
								<a>
									{toTitleCase(t('global.wiki'))} {toTitleCase(t('global.home'))}
								</a>
							</Link>
						</li>
						<li>
							<Link passHref href="/wiki/ipfs/" className={styles.sNavList}>
								<a className="active">IPFS</a>
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
					<h1 className={styles.h1}>{t('wiki.ipfs.title')}</h1>
					<div>
						<h2 className={styles.h2}>{t('wiki.ipfs.sections.0.heading')}</h2>
						<p className={styles.p}>{t('wiki.ipfs.sections.0.p0')}</p>
					</div>
					<div>
						<h2 className={styles.h2}>{t('wiki.ipfs.sections.1.heading')}</h2>
						<p className={styles.p}>
							{t('wiki.ipfs.sections.1.p0')}{' '}
							<Link passHref href="https://docs.ipfs.io/install/ipfs-companion/">
								{t('wiki.ipfs.sections.1.a0')}
							</Link>
							{'. '}
							{t('wiki.ipfs.sections.1.p1')}{' '}
							<Link passHref href={`https://bave.com/`}>
								{t('wiki.ipfs.sections.1.a1')}
							</Link>
							, {t('wiki.ipfs.sections.1.p2')}{' '}
							<Link passHref href={`https://ipfs.io/`}>
								{t('wiki.ipfs.sections.1.a2')}
							</Link>
							.
						</p>
					</div>
					<div>
						<h2 className={styles.h2}>{t('wiki.ipfs.sections.2.heading')}</h2>
						<p className={styles.p}>{t('wiki.ipfs.sections.2.p0')}</p>
					</div>
					<div>
						<h2 className={styles.h2}>{t('wiki.ipfs.sections.3.heading')}</h2>
						<p className={styles.p}>
							{t('wiki.ipfs.sections.3.p0')} <code>ipns://opronouns.net</code> {t('wiki.ipfs.sections.3.p1')} <code>https://opronouns.net</code>. {t('wiki.ipfs.sections.3.p2')}{' '}
							<code>https://ipfs.io/ipns/opronouns.net</code> {t('wiki.ipfs.sections.3.p3')}
						</p>
					</div>
					<div>
						<h2 className={styles.h2}>{t('wiki.ipfs.sections.4.heading')}</h2>
						<p className={styles.p}>{t('wiki.ipfs.sections.4.p0')}</p>
						<p className={styles.p}>
							{t('wiki.ipfs.sections.4.p1')}{' '}
							<Link passHref href={`https://js.ipfs.io/`}>
								JS IPFS
							</Link>{' '}
							{t('wiki.ipfs.sections.4.p2')}
						</p>
					</div>
					<div className="edited">
						<p className={styles.p}>
							{t('wiki.edited.text')} {t('wiki.ipfs.edited.date')} {t('wiki.edited.by')} {t('wiki.ipfs.edited.name')}
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
