import styles from './Layout.module.scss'
import { ReactNode } from 'react'
import Head from 'next/head'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

interface Props {
  children?: ReactNode,
  title: string,
  className?: string,
  mainClassName?: string,
  titleSuffix?: string,
}

/**
 * Page layout component.
 */
const Layout = ({
  title,
  children,
  className,
  mainClassName,
  titleSuffix = 'Josh Howson'
}: Props) => {
  const layoutClass = [
    styles.layout,
    className,
  ].filter(i => !!i).join(' ')

  const fullTitle = [title, titleSuffix].filter(i => !!i).join(' - ')

  return (
    <div
      className={layoutClass}>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content="Meta description" />
        <link rel="icon" type="image/svg+xml" href="jh.svg" />
      </Head>
      <Header />
      <main
        className={mainClassName}>
        {children}
      </main>
      <Footer />
    </div >
  )
}

export default Layout
