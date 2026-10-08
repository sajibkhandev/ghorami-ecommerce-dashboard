import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'


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
      navigate("/home")


    } else if (data.data.error = "Invalid Cradrintial") {
      toast.error("Invalid Cradrintial")
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
    </Form>
  )
}

export default Login