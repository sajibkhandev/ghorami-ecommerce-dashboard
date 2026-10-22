import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'


const Otp =  () => {
    let navigate = useNavigate()
    let param = useParams()
    let [heading,setHeading]=useState("Verification Proccing..........")
    // console.log(param.email);
    // console.log(param.otp);
    
 useEffect( ()=>{
    async function myfunction(){
          let data = await axios.post('http://localhost:5000/api/v1/authentication/otp',
            {
                otp: param.otp,
                email:param.email

            },

        )
        if (data.data.success == "Otp match") {
            toast.success("Verification Successful")
            setHeading("Verification Successful")
            setTimeout(() => {
                navigate("/login")
            }, 3000)
        } else if (data.data.error = "Otp not match") {
            toast.error("Otp not match")
            setHeading("Verification Failed")
        }
        else if (data.data.error = "We don't find your account") {
            toast.error("We don't find your account")
        }
        console.log(data.data);

     }
     myfunction()

 },[])
    

    
  
    return (
        <h1 className='text-center text-4xl pt-5'>{heading}</h1>
    )
}

export default Otp