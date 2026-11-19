import React, { useEffect, useState } from 'react'
import { Flex, Space, Table, Tag } from 'antd';
import axios from 'axios'

const ViewCategory = () => {
  let [allCategory, setAllCategory] = useState([])
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
          <a>Edit</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];


  useEffect(() => {
    async function allcategory() {
      let category = await axios.get("http://localhost:5000/api/v1/product/viewcategory")
      let arr = []
      category.data.map(item => {
        arr.push(
          {
            key: item._id,
            categoryname: item.categoryname,

          }
        )

      })
      setAllCategory(arr)


    }

    allcategory()

  }, [])



  return (
    <div className='mt-10 mr-20'>
      <h2 className='text-center text-3xl font-bold pb-3'>All Categories</h2>
      <Table columns={columns} dataSource={allCategory} />
    </div>
  )
}

export default ViewCategory