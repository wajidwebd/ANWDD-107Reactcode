import React, { useState } from 'react'

export const Projectone = () => {
    const [myname,setMyname] = useState('');
    const [arraydata,setArraydata] = useState([]);
    console.log(arraydata);


    function createcrd(event) {
        event.preventDefault();
        setArraydata([...arraydata, {id:arraydata.length,myname:myname}])
    }

    function deletefunction(params) {
        console.log(params);
       const removedata =  arraydata.filter((ddd)=> ddd.id !== params.id)
       console.log(removedata);
       setArraydata(removedata);      
    }
  return (
    <div>
        <form onSubmit={createcrd}>
            <input type="text" placeholder='enter your name' onChange={(event) => setMyname(event.target.value)} />
            <button className='btn btn-primary'>Add</button>
        </form>

        <h2>Data display:</h2>
        <div>
            {
                arraydata.map((datas,index)=>
                <div key={index}>
                    {datas.myname}
                    <button className='btn btn-danger' onClick={()=>deletefunction(datas)}>Delete</button>
                </div>
                )
            }
        </div>
    </div>
  )
}
