import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [isLoading,setIsloading] = useState(true)
  const [isSuccess,setIsSuccess] = useState(false)
  useEffect(()=>{
    const urlParams = window.location.search
    const  searchParams= new URLSearchParams(urlParams)
    const     status = searchParams.get("status")
    const tx_ref    =  searchParams.get("tx_ref")
    const transaction_id = searchParams.get("transaction_id")
    console.log(searchParams.get("transaction_id"))
   async function createOrder (){
try {
  const resp=   await axios.post(`https://ae60-105-113-69-49.ngrok-free.app/api/v1/webhook`,{transaction_id,status,tx_ref}) 
  setIsSuccess(true)
   console.log(resp) 
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
             isSuccess? <h2>Your payment is successfull</h2>:<h2>
              Payment failed
             </h2>
          }

         
    </div>
  );
}

export default App;
