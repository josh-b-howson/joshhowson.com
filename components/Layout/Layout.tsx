import styles from './Layout.module.scss'
import { ReactNode } from 'react'
import Head from 'next/head'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

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
        <title>{title} - Josh Howson</title>
        <meta name="description" content="Meta description" />
      </Head>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>)
}

export default Layout
