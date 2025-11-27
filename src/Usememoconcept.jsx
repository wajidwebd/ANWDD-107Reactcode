import React, { useCallback, useEffect, useMemo, useState } from 'react'

export const Usememoconcept = () => {
    const [myname,setMyname] = useState('')
    const [mynumber,setMynumber] = useState(0)

    useCallback(()=>{
        calculatedprogram(mynumber)
    },[mynumber])

  return (
    <div>
        {myname}
        {mynumber}
        <input type="text" placeholder='enter your name' onChange={(event) => setMyname(event.target.value)} />
        <input type="number" placeholder='enter your number' onChange={(event) => setMynumber(event.target.value)}/>
    </div>
  )
}


function calculatedprogram(params) {
    for (let index = 0; index < 1000000000; index++) {}
    return params * 2
}