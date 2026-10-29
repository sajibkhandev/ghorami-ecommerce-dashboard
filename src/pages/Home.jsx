import React from 'react'

const Home = () => {

 let data= JSON.parse(localStorage.getItem("userinfo"))


  return (
    <div>
      <h5>{data.username}</h5>
      <h5>{data.email}</h5>
    </div>
  )
}

export default Home