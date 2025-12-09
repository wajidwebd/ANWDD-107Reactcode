import React from 'react'
import useIncrement from './store/useIncrement'

export const Testingfile = () => {
    const initialvalue = useIncrement((state)=> state.initialvalue)
    const incrementfunction = useIncrement((state)=> state.incrementfunction)
    const decrementfunction = useIncrement((state)=> state.decrementfunction)

    
  return (
    <div>
        {initialvalue < 0 ? 0 : initialvalue}
        <button onClick={()=>incrementfunction()}>plus</button>
        <button onClick={()=>decrementfunction()}>plus</button>
    </div>
  )
}
