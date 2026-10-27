import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'

const ForgetPassword = () => {
    let navigate = useNavigate()
  const onFinish = async values => {
    let data = await axios.post('http://localhost:5000/api/v1/authentication/forgetpassword',
      {
        findemail: values.findemail,

      },

    )
    if (data.data.success == "Account found") {
      toast.success("Account found")
      setTimeout(()=>{
        navigate(`/changepassword/${values.findemail}`)

      },2000)


    } else if (data.data.error == "Your account is not Found") {
      toast.error("Your account is not Found")
    }
    console.log(data.data);




  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };




  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Toaster />


      <Form.Item
        label="Find Your Email"
        name="findemail"
        rules={[{ required: true, message: 'Please input your email!' }]}>
        <Input />

      </Form.Item>

     


      <div className='flex justify-center'>
        <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Continue
        </Button>
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" >
         <Link to="/login"> Back To Login</Link>
        </Button>
      </Form.Item>
      </div>
     
    </Form>
  )
}

export default ForgetPassword