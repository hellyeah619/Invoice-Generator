import React from 'react'

export default function MainDetails({name,address}) {
  return (
    <>
     <section className="flex flex-col items-end justify-end"> 
      <h2 className=" font-bold text-xl upparcase  md:text-4xl mb-1"> {name}</h2>
      <p> {address}</p>
      </section>
    </>
  )
}
