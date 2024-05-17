import React from 'react'
import styles from './home.module.css'
import Image from 'next/image'
const Home = () => {
  return (
    <div className={`container`}>
      <div className={styles.text}>
        <span>welcome to</span>
        <span>NIT App</span>
      </div>
      <div>
        <Image width='100' height='100' alt='test img' src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" />
      </div>
    </div>
  )
}

export default Home
