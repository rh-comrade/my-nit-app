import React from 'react'
import styles from './footer.module.css'
const Footer = () => {
  return (
    <footer className={`container-fluid ${styles.footer}`}>
        <p className={styles.para}>&copy;2024 all rights belongs to me</p>
    </footer>
  )
}

export default Footer
