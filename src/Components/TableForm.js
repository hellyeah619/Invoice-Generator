import {useState, useEffect} from 'react'
import {v4 as uuidv4} from "uuid"
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai"

import React from 'react'

export default function TableForm({description,setdescription,quantity,setquantity,price,setprice,amount,setamount,list,setlist,total,settotal}) {


 const [isediting,setisediting] = useState(false)

 const handleSubmit = (e) =>{
  e.preventDefault()
  
  if (!description || !quantity || !price) {

    alert("Please fill in the values")
  } else{

  const newitems = {
    id: uuidv4(),
    description,
    quantity,
    price,
    amount
  }
  setdescription("")
  setquantity("")
  setprice("")
  setamount("")
  setlist([...list, newitems])
  setisediting(false)
  console.log(list)
}
}
 
 
 
  useEffect(() => {
  const calculateamount = (amount)=>{
    setamount(quantity*price)
  }

  calculateamount(amount)
 }, [amount,price,quantity,setamount])

  useEffect(()=>{
    let rows = document.querySelectorAll(".amount")
  let sum = 0

  for(let i = 0; i < rows.length;i++){
    if(rows[i].className==="amount"){
      sum += isNaN(rows[i].innerHTML)? 0: parseInt(rows[i].innerHTML)
      settotal(sum)
    }
  }

  })
 const editrow = (id) =>{
  const editingrow = list.find((row) => row.id ===id)
  setlist(list.filter((row)=> row.id !== id))
  setisediting(true)
  setdescription(editingrow.description)
  setquantity(editingrow.quantity)
  setprice(editingrow.price)

  }


 const deleterow = (id) =>{ setlist(list.filter((row)=> row.id !== id))}


  return (
    <>
   <form onSubmit = {handleSubmit}>
   <div className='flex flex-col mt-16'>
    <label htmlFor="description"> Item description</label>
    <input type ="text" name = "description" id="description" placeholder='Item description' 
    value={description} onChange={(e)=> setdescription(e.target.value)}/>
    </div>



    <div className='md:grid grid-cols-3 gap-10 md:mt-10'>
    <div className='flex flex-col'>
    <label htmlFor="quantity"> Quantity</label>
    <input type ="number" name = "quantity" id="quantity" placeholder='Quantity' 
    value={quantity} onChange={(e)=> setquantity(e.target.value)}/>
    </div>



    <div className='flex flex-col'>
    <label htmlFor="price"> Price</label>
    <input type ="number" name = "price" id="price" placeholder='Price' 
    value={price} onChange={(e)=> setprice(e.target.value)}/>
    </div>



    <div className='flex flex-col'>
    <label htmlFor="amount">Amount</label>
    <p>{amount}</p>
    </div>
    </div>
    <button type = "submit"className="mb-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shoadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"> 
    {isediting ? "Editing Row Items" : "Add Table items"}
    </button>
   </form>

   {/*Table items*/}
   <ul>
   <table width="100%" className='mb-10'>
   <thead>
          <tr className="bg-gray-200">
            <td><b>Description</b></td>
            <td><b>Quantity</b></td>
            <td><b>Price</b></td>
            <td><b>Amount</b></td>

          </tr>
        </thead>  
   
   {list.map(({id,description,quantity,price,amount})=>(
      <React.Fragment key = {id}>

        <tbody>
          <tr>
            <td>{description}</td>
            <td>{quantity}</td>
            <td> {price}</td>
            <td className='amount'> {amount}</td>
            <td><button onClick={()=> deleterow(id)}><AiOutlineDelete></AiOutlineDelete></button></td>
            <td><button onClick={()=> editrow(id)}><AiOutlineEdit></AiOutlineEdit></button></td>
          </tr>
        </tbody>
      
   </React.Fragment>
    )
    )}
     </table>

     <div>
      <h2 className='flex items-end justify-end text-gray-800 text-3xl font-bold mb-10'> Total Amount:- {total.toLocaleString()}</h2>
     </div>
   </ul>
    </>
  )
}
