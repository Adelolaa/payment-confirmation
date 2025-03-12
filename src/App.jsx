import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';const stringUrl = window.location

function App() {
  const [isLoading,setIsloading] = useState(true)
  const [isSuccess,setIsSuccess] = useState(false)
  useEffect(()=>{
    const urlParams = window.location.search
    const  searchParams= new URLSearchParams(urlParams)
    const     status = searchParams.get("status")
    const tx_ref    =  searchParams.get("tx_ref ")
    const transaction_id = searchParams.get("transaction_id")
    console.log(searchParams.get("id"))
   async function createOrder (){
try {
  const resp=    await fetch(` https://ae60-105-113-69-49.ngrok-free.app/api/v1/webhook?status=${status}&tx_ref =${tx_ref }&transaction_id=${transaction_id}`,{
    method:"GET"
   })
   const jsonResp = await resp.json()
   if(jsonResp.status==200)  setIsSuccess(true)
   console.log(await resp.json())
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
