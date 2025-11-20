import './App.css'
import { Navbar } from './Navbar'
import { Totalmain } from './Totalmain'
import { Secondfile } from './Secondfile'
import { Usestatefile } from './Usestatefile'
import { Useeffectfile } from './Useeffectfile';
import { createContext, useEffect, useState } from 'react'
import { Librarayuse } from './Librarayuse'
import { Projectone } from './Projectone'
export const Datapass = createContext();

function App() {

  // React : Concept -> what is react? ->
  // 1. React is the javascript library.
  // 2. Introduced by facebook. It will work as single page website.
  // 3. State management easily to handle.


  // 1. React overview -> Components
  // 2. Props
  // 3. Hooks -> useState,useEffect,useContext,useMemo, and useCallback.
  // 4. Conditional renderning
  // 5. React Library.
  // 6. Shoping website.
  // 7. Zustand : Project in master class
  // 8. Project


  // Apart from syllabus
  // 1. Lifecycle.
  // 2. Class component
  // 3. react flux.

  // const myname = prompt();
  // const [myname,setMyname]= useState('')
  // const [dataforsecenario,setDataforsecenerio] = useState('')
  // const myage = 20;

  // useEffect(()=>{
      
  // },[myname])

  // const myobject = {
  //   mynamevalue : myname,
  //   myagevalue:myage
  // }

  // 2. Props -> props is used to transfer the data one file to another.

  // function handlesubmit(e) {
  //   e.preventDefault();
  //   if (myname== "rohith") {
  //   setDataforsecenerio("Developer")
  // }
  // else{
  //   setDataforsecenerio("not Developer")
  // }
  // }
  
  return (
    <>
      <h4 className='text-center'>app</h4> 
      {/* <form onSubmit={handlesubmit}>
        <input type="text" onChange={(event)=>setMyname(event.target.value)} />
        <button type='submit'>Add</button>

      </form> */}
      
      {/* <Usestatefile/> */}
      {/* <Useeffectfile></Useeffectfile> */}
      {/* <Secondfile myname={myname} myage={myage}></Secondfile> */}

      {/* <Datapass.Provider value={myobject}>
        <Totalmain></Totalmain>
      </Datapass.Provider> */}
      
      {/* if - else statement. if-else if statement. -> conditional rendering. */}
      {/* {"condition" ? "true statement" : "false statement"} */}
      {/* {myname == "rohith" ? "developer" : "not a developer"} */}
      {/* {myname == "rohith" ? "Developer" : myname == "kaliyaperumal" ? "Developer" : "not developer" } */}
      {/* {dataforsecenario} */}
      {/* <Librarayuse></Librarayuse> */}
      <Projectone></Projectone>
    </>
  )
}

export default App
