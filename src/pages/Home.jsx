import React, { useEffect, useState } from 'react'
import "./Home.css"
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const [data,setData]=useState([])
  const navigate=useNavigate()

  useEffect(()=>{
    loadData()
  },[])


  const loadData=()=>{
    fetch('http://localhost:3004/home')
    .then(res=>res.json())
    .then(json=>setData(json))
  } 

  const viewDetails=(id)=>{
      navigate(`/${id}`)    
  }


  return (
    <div className='main'>
    <div className='Create'>
    <Button variant="outlined">Create New Project</Button>
    </div>
 
 <div className='grid'>
      {
        data.map((e)=>{
          return(<>
            <div className='card' onClick={()=>viewDetails(e.ProjectID)}>
              <p>ProjectID : {e.ProjectID}</p>
              <p>Project Name :{e.Project_Name}</p>
              <p>Budget :{e.Budget}</p>
              <p>End Date :{e.End_Date}</p>
            </div>
          </>)
        })
      }
    </div>
    </div>
   
  )
}

export default Home