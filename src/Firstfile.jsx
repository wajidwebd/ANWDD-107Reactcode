import React, { useContext } from 'react'
import { Secondfile } from './Secondfile'
import { Datapass } from './App'

export const Firstfile = () => {
  const display = useContext(Datapass)
  return (
    <div>Firstfile - {display.mynamevalue}
    <p>{display.myagevalue}</p>
        <Secondfile></Secondfile>
    </div>
  )
}
