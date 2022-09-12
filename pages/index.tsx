import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout/Layout'

/**
 * The homepage component.
 */
const Home: NextPage = () => {
  const startDate: any = new Date('2022-09-11')
  const now: any = new Date()
  const daysSinceStart: any = Math.round(Math.abs(now - startDate) / (1000 * 60 * 60 * 24))
  return (
    <Layout
      title="Josh Howson - UI Engineer"
      titleSuffix=''>
      <div className="emoji">👋</div>
      <h1>Hi I&apos;m Josh,<br /> I build things on the web.</h1>
      <p>You're seeing a very early version of this website. It was born {new Date(daysSinceStart).getTime()} day{daysSinceStart !== 1 && 's'} ago.</p>
      <p>While I'm working on making this more presentable, why not...</p>
      <div
        className='things'>
        <Link href='/resume'>Take a look at my resume</Link>
        <Link href='/resume'>Check out this site's source code</Link>
        <Link href='/articles'>Read some articles I wrote</Link>
      </div>
      <style jsx>{`
        .emoji {
          font-size:4em;
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
