import React from 'react'
import styles from './contact.module.css'
import { DragContainer } from '@/components'
const Contact = () => {
  return (
    <div className='d-flex flex-wrap justify-content-center align-items-center'>
      <div>Hello world</div>
      <div className={`contact ${styles.contact}`}>
        <DragContainer name='Backlog'/>
        <DragContainer name='ongoing'/>
        <DragContainer name='completed'/>
    </div>
    </div>
  )
}

export default Contact
