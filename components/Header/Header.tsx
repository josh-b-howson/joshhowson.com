import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.scss'

const Header = () => {
  return <header
    className={styles.header}>
    <nav>
      <Link href="/">Home</Link>
      <Link href="https://github.com/josh-b-howson/joshhowson.com"><a target="_blank"><SVGGithubLogo />Source code</a></Link>
      <Link href="/articles">Articles</Link>
      <Link href="#">Resume</Link>
    </nav>
  </header>
}

const SVGGithubLogo = () => <svg viewBox="0 0 256 256" width="256" height="256" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M128.5 19C66.93 19 17 68.8 17 130.25c0 49.15 31.95 90.85 76.25 105.56 5.57 1.03 7.62-2.41 7.62-5.35 0-2.66-.1-11.42-.15-20.72-31.02 6.73-37.57-13.12-37.57-13.12-5.07-12.86-12.38-16.28-12.38-16.28-10.11-6.9.77-6.76.77-6.76 11.2.78 17.09 11.46 17.09 11.46 9.94 17.01 26.08 12.1 32.44 9.25 1-7.19 3.9-12.1 7.08-14.88-24.76-2.8-50.8-12.35-50.8-54.97 0-12.15 4.36-22.07 11.5-29.86-1.17-2.8-4.98-14.12 1.07-29.45 0 0 9.36-2.99 30.67 11.4 8.9-2.46 18.44-3.7 27.91-3.74 9.48.05 19.02 1.28 27.93 3.75 21.28-14.4 30.63-11.4 30.63-11.4 6.07 15.32 2.26 26.63 1.1 29.44 7.15 7.79 11.47 17.71 11.47 29.86 0 42.72-26.08 52.13-50.9 54.89 3.99 3.45 7.55 10.22 7.55 20.6 0 14.88-.13 26.86-.13 30.53 0 2.96 2.01 6.43 7.66 5.33C208.1 221.07 240 179.4 240 130.25 240 68.8 190.08 19 128.5 19Z" /></svg>

export default Header