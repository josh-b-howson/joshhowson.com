import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout/Layout'

/**
 * The homepage component.
 */
const Home: NextPage = () => {
  return (
    <Layout
      title="title!">
      <h1>Hi I&apos;m Josh.<br /> I build things on the web.</h1>
      <Link href="/articles">Read more ➡️ </Link>
    </Layout>
  )
}

export default Home
