import React, { useEffect, useState } from 'react'

export default function Get() {
    let [data,setData]=useState([])
 
    useEffect(()=>{
        fetch("http://localhost:3000/Student").then((result)=>{
        result.json().then((resp)=>{
        //     console.log(resp)
            setData(resp)
        })
    })
    },[])

  return (
    <>
   <table border='1'>
    <tbody>
        <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Subject</th>
        <th>Roll_no</th>
        </tr>
        {
            data.map((item,id)=>
            <tr key={id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.subject}</td>
                <td>{item.rollno}</td>
            </tr>)
        }
    </tbody>
   </table>
    </>
  )
}
