import React, { useState } from "react";

export const Usestatefile = () => {

    // usestate -> react variable declaration. variable values can change in var type.let and const cannot change.
    // Can change in usestate- > variable name.
    // const or let [variablename,setVariablename] = useState(data type);
    const [myname,setMyname] = useState('')
    const [myage,setMyage] = useState(0)

    // They are three types of syntax:

    // useEffect(()=>{

    // })

    // useEffect(()=>{

    // },[])

    // useEffect(()=>{

    // },['variablename'])

    // const [counting,setCounting] = useState(0);
    // const [myname,setMyname] = useState('rohith');
    // function changename() {
    //     setMyname('kaliyaperumal')
    // }
    // function changename1() {
    //     setMyname(20)
    // }
    // function incrementfunction() {
    //     setCounting(counting+1)
    // }
    // function decrementfunction() {
    //     if (counting <= 0) {
    //         setCounting(0)
    //     } else {
    //         setCounting(counting-1)
    //     }
    //     setCounting(counting <= 0 ? 0 : counting-1)
    // }

    return(
    <div>
        {myname} - {myage}
        <input type="text" placeholder="enter your name" onChange={(event) => setMyname(event.target.value)}/>
        <input type="number" placeholder="enter your age"  onChange={(event) => setMyage(event.target.value)}/>

        {/* <h2>usestate code - {counting}</h2>
        <button onClick={incrementfunction}>increment</button>
        <button onClick={decrementfunction}>increment</button> */}

        {/* <button onClick={()=>setCounting(counting+1)}>increment</button>
        <button onClick={()=>setCounting(counting<= 0 ? 0 : counting-1)}>decrement</button> */}
        {/* <h2>usestate code - {myname}</h2> */}
        {/* <button onClick={changename}>change</button>
        <button onClick={changename1}>change1</button> */}
    </div>
    )
}