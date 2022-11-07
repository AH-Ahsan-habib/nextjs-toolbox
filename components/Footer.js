import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFile%3AFacebook_f_logo_(2021).svg&psig=AOvVaw1MkmpV01HVYADFqWUkg8tz&ust=1667940224645000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOjp5Nb3nPsCFQAAAAAdAAAAABAE" alt="Facebook" className={styles.logo} /> for you
      </footer>
    </>
  )
}
