import { useEffect, useState } from 'react'
import { Button, Form, Input, Modal, Space, Table } from 'antd';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'

const ViewCategory = () => {
  const [allCategory, setAllCategory] = useState([])
  const [editingCategory, setEditingCategory] = useState(null)
  const [editForm] = Form.useForm()

  const handleDelete = async (category) => {
     const response = await axios.delete(`http://localhost:5000/api/v1/product/deletecategory?id=${category.id}`)
      if (response.data.success === "Category Deleted") {
        setAllCategory(current => current.filter(item => item.id !== category.id))
        toast.success("Category Deleted")
      }
    
  }

  const handleEdit = async values => {
     const response = await axios.put('http://localhost:5000/api/v1/product/editcategory', {
        id: editingCategory.id,
        categoryname: values.categoryname,
      })

      if (response.data.success === "Category Updated") {
        setAllCategory(current => current.map(category =>
          category.id === editingCategory.id
            ? { ...category, categoryname: response.data.category.categoryname }
            : category
        ))
        setEditingCategory(null)
        editForm.resetFields()
        toast.success("Category Updated")
      }
    
  
   
  }

  const columns = [
    {
      title: 'Serial',
      dataIndex: 'serial',
      render: (item,array,index) => <a>{index+1}</a>,
    },
    {
      title: 'Category Name',
      dataIndex: 'categoryname',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="medium">
          <a onClick={() => {
            setEditingCategory(record)
            editForm.setFieldsValue({ categoryname: record.categoryname })
          }}>Edit</a>
          <a onClick={() => handleDelete(record)}>Delete</a>
        </Space>
      ),
    },
  ];


  useEffect(() => {
    async function loadCategories() {
      
        const response = await axios.get("http://localhost:5000/api/v1/product/viewcategory")
        setAllCategory(response.data.map(item => ({
          id: item._id,
          categoryname: item.categoryname,
        })))
      
    }

    loadCategories()
  }, [])



  return (
    <div className='mt-10 mr-20'>
      <h2 className='text-center text-3xl font-bold pb-3'>All Categories</h2>
      <Table columns={columns} dataSource={allCategory} />
      <Modal
        title="Edit Category"
        open={Boolean(editingCategory)}
        onCancel={() => {
          setEditingCategory(null)
          editForm.resetFields()
        }}
        footer={null}
      >
        <Form form={editForm} layout="vertical" onFinish={handleEdit}>
          <Form.Item
            label="Category Name"
            name="categoryname"
            rules={[{ required: true, whitespace: true, message: 'Please input Category Name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Save</Button>
          </Form.Item>
        </Form>
      </Modal>
        <Toaster />
    </div>
  )
}

export default ViewCategory