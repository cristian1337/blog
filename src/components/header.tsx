import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Hola', page: '/' },
  { label: 'Proyectos', page: '/#proyectos' },
  { label: 'Blog', page: '/blog' },
  { label: 'Hablemos', page: '/#contacto' },
]

const ogImageUrl = 'https://notion-blog.now.sh/og-image.png'

const Header = ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} Portafolio y Blog</title>
        <meta
          name="description"
          content="Mi portafolio y mi blog super mamadisimo"
        />
        <meta name="og:title" content="Portafolio y blog" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@_ijjk" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      <img src="/logo.svg" alt="logo" />
      <ul className="menu">
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
      <div className="curriculum">
        <ExtLink className="boton">CURRÍCULUM</ExtLink>
      </div>
    </header>
  )
}

export default Header
