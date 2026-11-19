import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'

const CreateCategory = () => {
    let dispatch=useDispatch()
    let user = useSelector(state=>state.userinfo.value)
   
    
  let navigate = useNavigate()
  const onFinish = async values => {
    let data = await axios.post('http://localhost:5000/api/v1/product/createcategory',
      {
        categoryname: values.categoryname,
        categoryowerid: user.id
        

      },

    )
  
    if(data.data.success=="Category Created"){
      toast.success("Category Created")
    }else if(data.data.error=="Category Existed"){
      toast.error("Category Existed")
    }

      console.log(data.data.success);
 
    
  }

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
        label="Category Name"
        name="categoryname"
        rules={[{ required: true, message: 'Please input Category Name!' }]}>
        <Input />

      </Form.Item>

     


      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
     
    </Form>
  )
}

export default CreateCategory