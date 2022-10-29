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
      <div className="home-wrap">

        <h1>
          <div className="emoji">👋</div>
          <div>Hi I&apos;m Josh,</div>
          <div>I build things on the web.</div>
        </h1>
        <p>You&apos;re seeing a very early version of this website.
          {/* It was born <code>{new Date(daysSinceStart).getTime()} day{daysSinceStart !== 1 && 's'} ago</code>. */}
        </p>
        <p>But don&apos;t let that hold you up. While I&apos;m working on making this more presentable, why not...</p>
        <div
          className='things'>
          <Link href='/josh-howson-resume.pdf'><a target="_blank">Take a look at my resume</a></Link>
          <Link href='/articles'>Read some articles I wrote</Link>
          <Link href='https://github.com/josh-b-howson/joshhowson.com'><a target="_blank">Check out this site&apos;s source code</a></Link>
        </div>
        <small>
          <br />
          <br />
          or...
          <br />
          <br />
          <p>Click around on <Link href='https://www.boatline.com'><a target="_blank">Boatline.com</a></Link>, whose UI I&apos;ve spent the better part of 2 years building. If anything looks nice, I built it. If something&apos;s broken, I swear it wasn&apos;t me 🤞</p>
        </small>
      </div>
      <style jsx>{`
        h1 {
          display: flex;
          flex-flow: column nowrap;
          gap: .3em;
        }
        .home-wrap {
          display: flex;
          flex-flow: column nowrap;
          gap: 1em;
          padding-inline: var(--gutter-x);
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
