import { useState, useRef} from "react";

import ClientDetails from "./Components/ClientDetails";
import Dates from "./Components/Dates";
import Footer from "./Components/Footer";
import MainDetails from "./Components/MainDetails";
import Notes from "./Components/Notes";
import Table from "./Components/Table";
import Header from "./Components/Header";
import TableForm from "./Components/TableForm";
import ReactToPrint from "react-to-print";

function App() {
  const [showInvoice, setShowInvoice]= useState(false)

  const[name,setname] = useState("")
  
  const [address,setaddress] = useState("")
  
  const [email,setemail] = useState("")
 
  const [phone,setphone] = useState("")
  
  const [bankname,setbankname] = useState("")
 
  const [bankaccountnumber,setbankaccountnumber] = useState("")
 
  const [website,setwebsite] = useState("")
 
  const [clientname,setclientname] = useState("")
 
  const [clientaddress,setclientaddress] = useState("")
 
  const [invoicenumber,setinvoicenumber] = useState("")
 
  const [invoicedate,setinvoicedate] = useState("")
  
  const [duedate,setduedate] = useState("")
 
  const [notes,setnotes] = useState("")

  const [description, setdescription]= useState("")
 
  const [quantity, setquantity] = useState("")

  const [price, setprice] = useState("")

  const [amount, setamount] = useState("")

  const [list, setlist] = useState([])

  const[total,settotal] = useState(0)

  const componenetref = useRef()

 
  const handlePrint = () =>{
  window.print()
 }
  return (
   <>
     <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
      
     
     {showInvoice ? (  
     <>
     <ReactToPrint trigger={()=> 
      <button className="bg-blue-500 ml-5 text-white font-bold py-2 px-8 rounded shoadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Print/Download</button>}
      content={()=> componenetref.current }/>

     <div ref = {componenetref} className="p-5">
     <Header handlePrint = {handlePrint}/>
     
     <MainDetails name={name} address={address} />
     
     <ClientDetails clientname = {clientname} clientaddress = {clientaddress} />
     
     <Dates  invoicenumber = {invoicenumber} invoicedate = {invoicedate} duedate = {duedate}/>
      
     <Table description = {description} quantity={quantity} price={price} amount={amount} list = {list} setlist = {setlist} total={total} settotal = {settotal}/>
    
     <Notes  notes = {notes}/>
    
    <Footer name = {name} address = {address}  website = {website} email = {email} phone = {phone} bankaccountnumber = {bankaccountnumber} bankname = {bankname} />
    
    </div> 
<button 
onClick={()=> setShowInvoice(false)}
className="mt-10 bg-blue-500 text-white font-bold py-2 px-8 rounded shoadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"> Edit Information</button>
     </>
      ): (
      <>
      <div className="flex flex-col justify-center">
      
      <article className="md:grid grid-cols-2 gap-10">
      <div className="flex flex-col">
           {/*Name of the client*/}
      <label htmlFor="name">Enter your full name</label>
      <input type = "text" name = "name" id = "text" placeholder=" Enter your name" 
      autoComplete="off"
      value={name}
      onChange={(e)=>setname(e.target.value)}
      />
      </div>
    
      <div className="flex flex-col">
        {/*address of the client */}
      <label htmlFor="address">Enter your address</label>
      <input type = "text" name = "address" id = "address" placeholder=" Enter your address" 
      autoComplete="off"
      value={address}
      onChange={(e)=>setaddress(e.target.value)}
      />
      </div>
      </article>

     <article className="md:grid grid-cols-3 gap-10">
      <div className="flex flex-col">
         {/*email of the client*/} 
       <label htmlFor="email">Enter your email</label>
      <input type = "email" name = "email" id = "email" placeholder=" Enter your email" 
      autoComplete="off"
      value={email}
      onChange={(e)=>setemail(e.target.value)}
      />
      </div>

      <div className="flex flex-col">
        {/*website*/}
      <label htmlFor="website">Enter your website</label>
      <input type = "url" name = "website" id = "website" placeholder=" Enter your website" 
      autoComplete="off"
      value={website}
      onChange={(e)=>setwebsite(e.target.value)}
      />
      </div>

      <div className="flex flex-col">
        {/* phone number of client*/}
      <label htmlFor="phone">Enter your phone no.</label>
      <input type = "number" name = "phone" id = "phone" placeholder=" Enter your Phone no." 
      autoComplete="off"
      value={phone}
      onChange={(e)=>setphone(e.target.value)}
      />
      </div>
     </article>

      <article className="md:grid grid-cols-2 gap-10">
      <div className="flex flex-col">
          {/*bank name of client*/}
      <label htmlFor="bankName">Enter your bank name</label>
      <input type = "text" name = "bankname" id = "bankname" placeholder=" Enter your bank name" 
      autoComplete="off"
      value={bankname}
      onChange={(e)=>setbankname(e.target.value)}
      />
      </div>
    <div className="flex flex-col">
      {/*bank account of client */}
      <label htmlFor="bankaccount">Enter your bank account number</label>
      <input type = "text" name = "bankaccount" id = "bankaccount" placeholder=" Enter your bank account number" 
      autoComplete="off"
      value={bankaccountnumber}
      onChange={(e)=>setbankaccountnumber(e.target.value)}
      />
    </div>
      </article>


      <article className="md:grid grid-cols-2 gap-10 md:mt-20">
        <div className="flex flex-col">
          {/*client name*/}
      <label htmlFor="bankName">Enter your Client's name</label>
      <input type = "text" name = "clientname" id = "clientname" placeholder=" Enter your client's name" 
      autoComplete="off"
      value={clientname}
      onChange={(e)=>setclientname(e.target.value)}
      />
        </div>
      
      <div className="flex flex-col">
        {/*client address*/}
      <label htmlFor="clientaddress">Enter your Client's address</label>
      <input type = "text" name = "clientaddress" id = "clientaddress" placeholder=" Enter your client's address" 
      autoComplete="off"
      value={clientaddress}
      onChange={(e)=>setclientaddress(e.target.value)}
      />
      </div>
      </article>


      <article className="md:grid grid-cols-3 gap-10">
       <div className="flex flex-col">
         {/*Invoice number*/}
      <label htmlFor="Invoicenumber">Enter the Invoice Number</label>
      <input type = "text" name = "invoicenumber" id = "invoicenumber" placeholder=" Enter the envoice number" 
      autoComplete="off"
      value={invoicenumber}
      onChange={(e)=>setinvoicenumber(e.target.value)}
      />
       </div>

      <div className="flex flex-col">
        {/*Invoice Date*/}
      <label htmlFor="invoicedate">Enter the date of Invoice</label>
      <input type = "date" name = "invoicedate" id = "invoicedate" placeholder=" Enter the date of invoice" 
      autoComplete="off"
      value={invoicedate}
      onChange={(e)=>setinvoicedate(e.target.value)}
      />
      </div>

     <div className="flex flex-col">
       {/*Due date*/}
       <label htmlFor="duedate">Enter due date</label>
      <input type = "date" name = "duedate" id = "duedate" placeholder=" Enter the due date" 
      autoComplete="off"
      value={duedate}
      onChange={(e)=>setduedate(e.target.value)}
      />
     </div>
      </article>
      
{/*This is table*/}
<article >
  <TableForm description ={description} setdescription= {setdescription}
            quantity ={quantity} setquantity= {setquantity}
            price ={price} setprice= {setprice}
            amount ={amount} setamount= {setamount}
            list = {list} setlist = {setlist}
            total = {total} settotal = {settotal}/>
            
</article>



      {/*NOtes*/}
      <label htmlFor="notes">Enter the notes</label>
      <textarea name = "notes" id = "notes" cols="30" rows = "10" placeholder=" Additional notes to the client " 
      value = {notes}
      onChange ={(e) => setnotes(e.target.value)}> </textarea>
      


      <button 
      onClick={() => setShowInvoice(true)} 
      className=" bg-blue-500 text-white font-bold py-2 px-8 rounded shoadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Preview Invoice</button>
      </div>

      </>
     )}
     </main>
   </>
  );
}

export default App;