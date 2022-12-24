import React, { useState } from 'react'

export default function Post() {
    const [name,setName]=useState('')
    const [subject,setSubject]=useState('')
    const [rollno,setRollno]=useState('')


    const saveHandler=()=>{
        console.log(name,subject,rollno)
        let data={name,subject,rollno}
        fetch("http://localhost:3000/Student",{
            method:"POST",
            headers:{
                'Accept':"application/json",
                'Content-Type':"application/json"
            },
           body: JSON.stringify(data)
            
        }).then((result)=>{
          result.json().then((resp)=>{
            console.log(resp)
          })
        })

    }

  return (
    <div>
        <label>Name  :</label>
        <input type='text' value={name}   onChange={(e)=>setName(e.target.value)} name='name'/> <br/> <br/>
        <label>Subject :</label>
        <input type='text' value={subject} onChange={(e)=>setSubject(e.target.value)} name='subject'/><br/> <br/>
        <label>Roll_no :</label>
        <input type='number' value={rollno} onChange={(e)=>setRollno(e.target.value)} name='rollno'/><br/> <br/>
        <button type='button' onClick={saveHandler}>Save Data</button>
        


    </div>
  )
}
