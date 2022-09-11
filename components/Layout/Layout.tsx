import styles from './Layout.module.scss'
import { ReactNode } from 'react'
import Head from 'next/head'

interface Props {
  children?: ReactNode,
  title: string,
}

const Layout = ({
  title,
  children,
}: Props) => {
  return (
    <div
      className={styles.layout}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Meta description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        header
      </header>
      <main>
        {children}
      </main>
      <footer>
        footer
      </footer>
    </div>)
}

export default Layout
