import React from 'react'
import '../app/animations.css'
import styles from './home.module.css'
import Image from 'next/image'
const Home = () => {
  return (
    <div className={`container d-flex  flex-wrap justify-content-center align-item-center ${styles.home}`}>
      <div className={`${styles.text}`}>
        {/* <span>welcome to</span>
        <span>NIT App</span> */}
      </div>
      <div>
        <Image className='img' width='300' height='300' alt='test img' src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" />
      </div>
      <div class="circle">
            <h3>move with me</h3>
            <h4>square</h4>
        </div>
        
    </div>
  )
}

export default Home
