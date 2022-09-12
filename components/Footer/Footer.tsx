import styles from './Footer.module.scss'

/**
 * Layout footer component.
 */
const Footer = () => {
  return <footer
    className={styles.footer}>
    <div
      className='copy'>
      &copy; {new Date().getFullYear()} Josh Howson
    </div>
  </footer>
}

export default Footer
