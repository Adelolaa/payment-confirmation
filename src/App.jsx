import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [isLoading,setIsloading] = useState(true)
  const [isSuccess,setIsSuccess] = useState(false)
  useEffect(()=>{
   async function createOrder (){
    const urlParams = window.location.search
    const  searchParams= new URLSearchParams(urlParams)
    const     status = searchParams.get("status")
    const tx_ref    =  searchParams.get("tx_ref")
    const transaction_id = searchParams.get("transaction_id")
    console.log(searchParams.get("transaction_id"))
    console.log('..creating order')
try {
  const resp=   await axios.get(`https://b3a0-105-113-63-160.ngrok-free.app/api/v1/webhook`,{params:{
    transaction_id,status,tx_ref
  }}) 
  setIsSuccess(true) 
     setIsloading(false)
} catch (error) {
  console.log(error)
  setIsloading(false)
}
   }
   createOrder()
  
  },[])



  return (
    <div className="App">
      
        <h1>
          Everything Meat Checkout

          </h1> 
          {
            isLoading&& <h3>Please Wait for confirmation...............</h3>
          }

          {
             (isSuccess && !isLoading) &&<h2>Your payment is successfull</h2>
          }
{(!isSuccess&&!isLoading)&&             
             <h2>
              Payment failed
             </h2>

}
         
    </div>
  );
}

export default App;
