import React from 'react'
import Link from 'next/link'
import navItem from './config/config.json';
import styles from './header.module.css';

const Header = () => {
  return (
    <nav className={styles.nav}>
        {
        navItem?.map(({item,route},index)=>{
            return <Link  className={styles.link} key={`nav_${index}`}  href={route}>{item}</Link>
        })
      }
    </nav>
  )
}

export default Header
