import React, { useEffect } from 'react'
import Dashboard from '../components/Dashboard'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { Col, Row } from 'antd';



const Home = () => {
  let navigate = useNavigate()

 let data = useSelector(state=>state.userinfo.value)
 

 useEffect(()=>{
  if(data==null){
    navigate('/login')
  }
 },[])
 
  

  return (
 

    <Row>
      <Col span={6}><Dashboard/></Col>
      <Col span={18}><Outlet/></Col>
    </Row>
 

   
 
  )
}

export default Home