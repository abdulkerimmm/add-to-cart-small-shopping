import React from 'react'
import './image.css'

 const Image = ({image}) => {
  return (
    <div className='divimg'>
       <img  src={image}/>
    </div> 
  )
}
export default Image