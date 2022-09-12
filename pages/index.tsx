import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout/Layout'

/**
 * The homepage component.
 */
const Home: NextPage = () => {
  const startDate: any = new Date('2022-09-11')
  const now: any = new Date()
  const daysSinceStart: any = Math.floor(Math.abs(now - startDate) / (1000 * 60 * 60 * 24))
  return (
    <Layout
      title="Josh Howson - UI Engineer"
      titleSuffix=''>
      <h1>
        <div className="emoji">👋</div>
        Hi I&apos;m Josh,<br />
        I build things on the web.
      </h1>
      <p>You&apos;re seeing a very early version of this website. It was born <code>{new Date(daysSinceStart).getTime()} day{daysSinceStart !== 1 && 's'} ago</code>.</p>
      <p>But don&apos;t let that hold you up. While I&apos;m working on making this more presentable, why not...</p>
      <div
        className='things'>
        <Link href='/resume'>Take a look at my resume</Link>
        <Link href='/resume'>Check out this site&apos;s source code</Link>
        <Link href='/articles'>Read some articles I wrote</Link>
      </div>
      <style jsx>{`
        h1 {
          display: flex;
          flex-flow: column nowrap;
          gap: .3em;
        }
        .emoji {
          font-size:2em;
        }
        .things {
          display: flex;
          flex-flow: row wrap;
          align-items: baseline;
          gap: 4rem;
        }
      `}</style>
    </Layout>
  )
}

export default Home
