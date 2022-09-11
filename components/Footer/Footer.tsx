import styles from './Footer.module.scss'

const Footer = () => {
  return <footer
    className={styles.footer}>
    &copy; {new Date().getFullYear()} Josh Howson
  </footer>
}

export default Footer
