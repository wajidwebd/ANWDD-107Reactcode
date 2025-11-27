import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Cart = ({cartdata,setCartdata}) => {

  const [price,setPrice] = useState(0)

  function removeprogram(params) {
    const removeddata = cartdata.filter((values)=> values.id !== params.id);
    setCartdata(removeddata)
  }

  function particularprogram(params,countdown) {
    const particulardata = cartdata.indexOf(params)
    console.log(particulardata);
    cartdata[particulardata].count = cartdata[particulardata].count + countdown;
    setCartdata([...cartdata])
    
    
  }
  return (
    <div>
        {
        cartdata.map((values,index)=>
        <div key={index}>
          <h2>{values.productname}</h2>
          <h4>{values.brand}</h4>
          <p>{values.price}</p>
          <button onClick={()=> particularprogram(values,-1)}>-</button>
          <h6>{values.count}</h6>
          <button onClick={()=> particularprogram(values,1)}>+</button>
          <button className='btn btn-danger' onClick={()=> removeprogram(values)}>Remove</button>
          
        </div>
        )
      }
      {price}
      <Link to='/rohith'>Back</Link>
    </div>
  )
}
