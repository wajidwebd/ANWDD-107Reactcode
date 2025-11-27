import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Product = ({cartdata,setCartdata}) => {
  const productDetails = [
    {
      id:1,
      productname:"bag-1",
      brand:"puma",
      price:1000,
      count:1
    },
    {
      id:2,
      productname:"bag-2",
      brand:"puma",
      price:2000,
      count:1
    },
    {
      id:3,
      productname:"bag-3",
      brand:"puma",
      price:3000,
      count:1
    },
    {
      id:4,
      productname:"bag-4",
      brand:"puma",
      price:4000,
      count:1
    },
    {
      id:5,
      productname:"bag-5",
      brand:"puma",
      price:5000,
      count:1
    },
    {
      id:6,
      productname:"bag-6",
      brand:"puma",
      price:6000,
      count:1
    }
  ]

  const wajid = useNavigate();


  function passingdatatocart(params) {
    setCartdata([...cartdata,params])
    wajid('/darani')
  }
  return (
    <div>
      {
        productDetails.map((values,index)=>
        <div key={index}>
          <h2>{values.productname}</h2>
          <h4>{values.brand}</h4>
          <p>{values.price}</p>
          <button className='btn btn-primary' onClick={()=>passingdatatocart(values)}>Add to cart</button>
        </div>
        )
      }
    </div>
  )
}
