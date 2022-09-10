import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewProject = () => {
  let params = useParams();
  const [data,setData]=useState([])

  console.log(params.projectId)

  useEffect(()=>{
    fetch(`http://localhost:3004/home?ProjectID=${params.projectId}`)
    .then(res=>res.json())
    .then(json=>
      {
      setData(json)
       console.log(json) 
      }).catch(erro=>console.log(erro))
  },[])



  return (
    <div>
      {
        data ? <div>
        
        <p>Project Name:{data[0].Project_Name}</p> 
        <p>Project Manager:{data[0].Project_Manager}</p> 
        <p>Start Date:{data[0].Start_Date}</p> 
      </div> : <></>
      }
    </div>
  )
}

export default ViewProject