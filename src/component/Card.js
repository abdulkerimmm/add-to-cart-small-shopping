import React, { Fragment } from 'react';
import './cart.css'
import './cartitle/CartTitle'
import CartTitle from './cartitle/CartTitle';
import CartText from './CartText/CartText';
import CartImage from './image/CartImage';

const Card = ({title, image, write,onClick}) => {
  // title,image,write
  //don't forget props is used  for assign a atrribute from other  component
  //but useState is used for change our atrributes  from other component or inside the component
  return (
    <>
      <div className='cartShape' onClick={()=>{onClick()}}>
        <div className='card-body'>
          <CartTitle title={title} />
          <CartImage url={image} />
          <CartText textt={write} />
        </div>
      </div>

    </>

  )
}

export default Card


