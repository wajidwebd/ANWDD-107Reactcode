import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Navbarsh = () => {
  return (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/rohith'>Product</Link>
        <Link to='/darani'>Cart</Link>
        <Outlet></Outlet>

    </div>
  )
}
