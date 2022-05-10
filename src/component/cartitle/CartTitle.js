import React from 'react'
import './CartTitle.css'

const CartTitle = ({title}) => {
  return (
     <div className='cart-title'>
           {title}
     </div>
  )
}

export default CartTitle