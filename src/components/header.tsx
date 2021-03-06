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
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Link href="/">
        <img src="/logo.svg" alt="logo" />
      </Link>

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
      <div className="curriculum menu-movil">
        <Link href="/blog">
          <a className="boton-blog">BLOG</a>
        </Link>
      </div>
      <div className="curriculum menu-movil">
        <ExtLink className="boton">CURR??CULUM</ExtLink>
      </div>
    </header>
  )
}

export default Header
