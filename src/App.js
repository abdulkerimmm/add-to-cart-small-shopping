import { useState } from 'react';
import './App.css';
import Cart from './component/Cart/Cart';

function App() {
  const [data,setData]=useState([
    {                         
      id:1,
      price:200,  
      name:"Iphone 12",
      image:"https://images.unsplash.com/photo-1607936854279-55e8a4c64888?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80",
      title:"Ios"
  },
  {
      id:2,
      price:150,
      name:"Iphone 11",
      image:"https://images.unsplash.com/photo-1603891128711-11b4b03bb138?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      title:"Ios"
  },
  {
      id:3,
      price:100,
      name:"Xiaomi 10",
      image:"https://images.unsplash.com/photo-1598327105854-c8674faddf79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1631&q=80",
      title:"Android"
  },
  {
      id:4,
      price:175,
      name:"Xiaomi 11",
      image:"https://images.unsplash.com/photo-1591531110744-49eacf536ee7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1044&q=80",
      title:"Android"
  }
])   
 
const [boxProduct,setboxProduct]=useState([])
  return (
    <div  className="App">  
          <h1 className='title'>Welcome to shopping</h1>
          <div className="gridItems">
            
              {data.map((item,index)=>{
                return <Cart whenClick={()=>{
                  let arr=[...boxProduct]
                  arr.push(item)
                  setboxProduct(arr)
                  
                }} key={item.index} title={item.title} image={item.image} name={item.name}/>
              })}       
          </div> 
          
            {boxProduct.length<1 && <h1>Your Cart is empty</h1>}



            {
              boxProduct.length>0 &&  
              <div>
                <h1>your products</h1>
              {
                boxProduct.map((item)=>{
                  return <div>{item.name}</div>
                }) 
              }
              </div>
            }


  </div>
    
  );
}

export default App;
