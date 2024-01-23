import Name from "../name/Name";
import Title from "../title/Title";
import Image from "../image/Image";
import "./Cart.css"


const Cart=({title,image,name,whenClick})=>{
    return(
       <div className="cart" onClick={whenClick}>
         <div className="card-body">
         <Title title={title}></Title>
         <Image image={image}></Image>
         <Name name={name}></Name>
         </div>
       </div>
    )
}

export default Cart;