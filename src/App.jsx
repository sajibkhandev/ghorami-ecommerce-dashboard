import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';

const App =  () => {
  const onFinish = async values => {
    

   let data =await axios.post('http://localhost:5000/api/v1/authentication/registration',
      {
        username:values.username,
        email:values.email,
        password:values.password

      },
      {
        headers:{
          Authorization:"klsdjfklsdjhkj34jhkl5j34lkrjsdklfdksl"
        }
      }

  )
  console.log(data);
  



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
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input />
      </Form.Item>

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
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default App