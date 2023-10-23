import React from 'react'

export default function Table({list, total}) {
  return (
    <>
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
            <td> {amount}</td>
          </tr>
        </tbody>
      
   </React.Fragment>
    )
    )}
     </table>
     <div>
      <h2 className='flex items-end justify-end text-gray-800 text-3xl font-bold mb-10'> Total Amount:- {total.toLocaleString()}</h2>
     </div>
    </>
  )
}
