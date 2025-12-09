import React, { useState } from 'react'
import useStore from './store/useStore'

export const Zustandtopic = () => {

    const [myname,setMyname] = useState('');
    const [particulardata,setParticulardata] = useState(null);


    const users = useStore((state) => state.users);
    const addUsers = useStore((state) => state.addUsers)
    const deleteUsers=  useStore((state) => state.deleteUsers)
    const updateUsers=  useStore((state) => state.updateUsers)

    console.log(users);

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (particulardata) {
            updateUsers({...particulardata,myname:myname})
        } else {
            addUsers({id:users.length,myname:myname})
        }
        setMyname('')
        setParticulardata(null)

        
    }

    const updatefunction = (params) =>{
        console.log(params);
        
        setMyname(params.myname)
        setParticulardata(params)
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='enter your name' value={myname}  onChange={(e)=> setMyname(e.target.value)} />
            <button>Add</button>
        </form>

        {
            users.map((arr,index)=>
            <div key={index}>
                <p>{arr.myname}</p>
                <button onClick={()=> updatefunction(arr)}>Edit</button>
                <button onClick={() => deleteUsers(arr.id)}>Delete</button>

            </div>
            )
        }
    </div>
  )
}
