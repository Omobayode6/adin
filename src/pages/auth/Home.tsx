import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  
  useEffect(()=>{
    setTimeout(()=>{
      navigate('/admin/course-management')
    },1000)
  },[]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div></div>
  )
}

export default Home