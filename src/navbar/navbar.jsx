import React from 'react'
import Link from 'next/link'
import navItem from './config/config.json';
import styles from './navbar.module.css';
import { Header } from '@/header';

const Navbar = () => {
  return (
    <div >
      <Header/>
      <nav className={styles.nav} >
        {
        navItem?.map(({item,route},index)=>{
            return <Link  className={styles.link} key={`nav_${index}`}  href={route}>{item}</Link>
        })
      }
    </nav>
    </div>
  )
}

export default Navbar
