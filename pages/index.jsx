/* eslint-disable @next/next/no-img-element */

import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import toTitleCase from '../lib/title_case';
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n';

export default function Home() {
	const { t } = useTranslation();
	const [query] = useLanguageQuery();

	return (
		<>
			<div>
				<nav>
					<img src="/oPronouns-logo.svg" alt={t('global.logo')} className="nav-img" />
					<Link href="/" passHref>
						<a className="active">openPronouns</a>
					</Link>
					<ul className="nav-list">
						<li className="nav-list">
							<Link href="/wiki">{toTitleCase(t('global.wiki'))}</Link>
						</li>
					</ul>
				</nav>

				<main>
					<div className="container hero">
						<img src="/pronouns-en.png" alt="hero image" />
						<h1>openPronouns</h1>
					</div>
					<div className="container" id="about">
						<h1>{t('index.about.title')}</h1>
						<p>{t('index.about.p.0')}</p>
						<p>
							<span>{t('index.about.p.1.0')}</span>
							<Link passHref href={`https://matrix.org`}>
								Matrix project
							</Link>
							. <span>{t('index.about.p.1.1')}</span>
						</p>
						<p>{t('index.about.p.2')}</p>
						<ul>
							<li>{t('index.about.li.0')}</li>
							<li>{t('index.about.li.1')}</li>
							<li>{t('index.about.li.2')}</li>
						</ul>
						<p>{t('index.about.p.3')}</p>
						<p>
							<span>{t('index.about.p.4.0')}</span>
							<Link passHref href={`https://matrix.to/#/#oPronouns-g:matrix.org`}>
								Matrix
							</Link>{' '}
							<span>{t('index.about.p.4.1')}</span>{' '}
							<Link passHref href={`https://gitter.im/openPronouns/`}>
								Gitter
							</Link>
							.
						</p>
					</div>
					<div className="container" id="projects">
						<h1>{t('index.projects.title')}</h1>
						<p>{t('index.projects.p.0')}</p>
						<div className="card">
							<h2>{t('index.projects.odin.title')}</h2>
							<ul className="card-data">
								<li className="card-data-item">{`${t('index.projects.status')} ${t('index.projects.odin.extra')}`}</li>
							</ul>
							<p>{t('index.projects.odin.desc')}</p>
							<ul className="card-links">
								<li>
									<Link passHref href="https://github.com/openPronouns/Odin">
										{t('index.projects.odin.link')}
									</Link>
								</li>
							</ul>
						</div>
						<p>
							<span>{t('index.projects.p.1.0')}</span>{' '}
							<Link passHref href={`https://matrix.to/#/@ludoviko_:matrix.org`}>
								Matrix
							</Link>{' '}
							<span>{t('index.projects.p.1.1')}</span> <Link href="mailto:hi@opronouns.net">{t('index.projects.a.0')}</Link>
						</p>
					</div>
				</main>
			</div>
		</>
	);
}
