import React from 'react'
import './DragContainer.css'
const DragContainer = ({name}) => {
  return (
  <div>
  <h2>{name}</h2>
  <div className='containerx' contentEditable='true'></div>
  </div>
  )
}

export default DragContainer
