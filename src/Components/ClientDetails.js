import React from 'react'

export default function ClientDetails({clientname, clientaddress}) {
  return (
    <>
       <section className="mt-5"> 
        <h2 className="text-xl upparcase font-bold mb-1"> {clientname} </h2>
        <p> {clientaddress}</p>
      </section>
    </>
  )
}
