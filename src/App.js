import { useState } from 'react';
import './App.css';
import Card from './component/Card';


function App() {
   
  const [products,setproducts]=useState(
   [
      {
        id:1,
        price:200,
        name:"ios",
        image:"https://images.unsplash.com/photo-1605546960121-24e957eb8c15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aXBob25lJTIwMTJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        title:"iphone 12"
      },
      {
        id:2,
        price:200,
        name:"ios",
        image:"https://images.unsplash.com/photo-1638038772924-ef79cce2426d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lJTIwMTN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        title:"iphone 13"
      },
      {
        id:3,
        price:200,
        name:"samsung",
        image:"https://images.unsplash.com/photo-1612814256254-5c0656760378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2Ftc3VuZyUyMDIwJTIwdWx0cmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  
        title:" galaxi not 20 ultra"
      },
      {
        id:4,
        price:200,
        name:"xaomi",
        image:"https://images.unsplash.com/photo-1649472070259-46146d7c01b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bm90JTIwMTB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        title:"xaomi 10"}
    ])
   
  
  const [boxProduct,setBoxProduct]=useState([])

  return (
    <>
    
    <div className="App">
      <h3>our product</h3>
      <div className='gridItems'>

     
         {products.map((product,index)=>
         {
           return(
            <Card onClick={()=>{
              const arr=[...boxProduct]
              arr.push(product)
              setBoxProduct(arr)
            }} key={index} title={product.title} image={product.image} write={product.name} /> 
           )
         })}
           
      </div>

            
        {boxProduct.length>0 && <div>
          <h4>aldiginiz urunler</h4>

        {
          boxProduct.map((boxProduct,index)=>{

            return(
                <div key={index}>
                    {JSON.stringify(boxProduct)}
                </div>
            )
          }
            
          )
        }

</div>
          }
    
      {boxProduct.length<1 && <div> sepetinizde urun yok </div>}

     </div>
   

     </>
      );
}

export default App;
