import React from 'react'

export default function Dates({invoicenumber, invoicedate, duedate}) {
  return (
    <>
    <article className="mt-10 mb-14 flex items-end justify-end">
        <ul>
            <li className='py-1 '>
                <span className='font-bold'>Invoice Number: </span> {invoicenumber}
            </li>
            <li className='bg-gray-200'>
                <span className='font-bold'>Invoice Date:</span>{invoicedate}
            </li>
            <li className='py-1 '>
                <span className='font-bold'>Due Date:</span>{duedate}
            </li>
        </ul>
    </article>      
    </>
  )
}
