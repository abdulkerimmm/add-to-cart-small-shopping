import React from 'react'
import './CartImage.css'

const CartImage = ({url}) => {
  return (
    <div className='cart-image'>
     <img alt='' src={url} />
    </div>
  )
}

export default CartImage
