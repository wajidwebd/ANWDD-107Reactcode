import React, { useContext } from 'react'
import { Datapass } from './App'

export const Secondfile = () => {

  const display = useContext(Datapass);
  return (
    <div>Secondfile
      {display.myagevalue}
       {/* {myname}
       {myage} */}
    </div>
  )
}
