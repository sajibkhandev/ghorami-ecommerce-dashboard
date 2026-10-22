import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
  let navigate = useNavigate()
  const onFinish = async values => {
    let data = await axios.post('http://localhost:5000/api/v1/authentication/login',
      {
        email: values.email,
        password: values.password

      },

    )
    if (data.data.success == "Login Successfully") {
      toast.success("Login Successfully")
      setTimeout(()=>{
        navigate("/home")

      },2000)


    } else if (data.data.error == "Invalid Cradrintial") {
      toast.error("Invalid Cradrintial")
    }else if(data.data.error=="Verify Your Email")
      toast.error("Verify Your Email")
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
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}>
        <Input />

      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>


      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
      <p className='ml-32 cursor-pointer'>Don't you have Account?
        <Link to="/"><span className='text-blue-400 font-bold'> Sigi Up</span></Link>
      </p>
    </Form>
  )
}

export default Login