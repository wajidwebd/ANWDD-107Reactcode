import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Useeffectfile = () => {
    // const [myname,setMyname] = useState()
    // const [arraydata,setArraydata] = useState([]);

    // arraydata.map((dd) => {
    //     console.log(dd.name)
        
    // })
    

    // axios.get("url").then((anyvariable)=>{
    //     console.log(anyvariable.data);        
    // })
    // useEffect(()=>{        
    //     axios.get("https://jsonplaceholder.typicode.com/users").then((output)=>{
    //         setArraydata(output.data);        
    //     })
    // },[])
    // useEffect(()=>{
    //     alert()
    //     axios.get("https://jsonplaceholder.typicode.com/users").then((output)=>{
    //         setArraydata(output.data);        
    //     })
    // })
    // useEffect(()=>{
    //     alert()
    //     axios.get("https://jsonplaceholder.typicode.com/users").then((output)=>{
    //         setArraydata(output.data);        
    //     })
    // },[myname])

  return (
    <div>Useeffectfile
        {/* {
            arraydata.map((display,index)=>
            <div key={index}>
                {display.name}
                {display.email}
            </div>
            )
        } */}

        <input type="text" placeholder='enter your name' onChange={(event) => setMyname(event.target.value)} />
    </div>
  )
}
