import styles from './Layout.module.scss'
import { ReactNode } from 'react'
import Head from 'next/head'
import Header from '../Header/Header'

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
      </Head>
      <Header />
      <main>
        {children}
      </main>
      <footer>
        footer
      </footer>
    </div>)
}

export default Layout
