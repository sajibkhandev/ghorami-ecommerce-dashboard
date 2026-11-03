import React from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom'

const items = [
    {
        key: 'sub1',
        label: 'Dashboard',
        icon: <AppstoreOutlined />,
        children: [
            { key: '1', label: 'User' },

        ],

    },
    {
        type: 'divider',
    },
    {
        key: 'sub2',
        label: 'Category',
        icon: <MailOutlined />,
        children: [
            { key: '2', label: 'Create Category' },
            { key: '3', label: 'View Category' },

        ],
    },
    {
        type: 'divider',
    },
    {
        key: 'sub3',
        label: 'SubCategory',
        icon: <MailOutlined />,
        children: [
            { key: '4', label: 'Create SubCategory' },
            { key: '5', label: 'View SubCategory' },

        ],
    },
    {
        type: 'divider',
    },
    {
        key: 'sub4',
        label: 'Product',
        icon: <MailOutlined />,
        children: [
            { key: '6', label: 'Create Product' },
            { key: '7', label: 'View Product' },

        ],
    },
    {
        type: 'divider',
    },
    {
        key: 'sub5',
        label: 'Varient',
        icon: <MailOutlined />,
        children: [
            { key: '8', label: 'Create Varient' },
            { key: '9', label: 'View Varient' },

        ],
    },
    {
        type: 'divider',
    },
    {
        key: 'sub6',
        label: 'Discount',
        icon: <MailOutlined />,
        children: [
            { key: '10', label: 'Discount' },

        ],
    },
    {
        type: 'divider',
    },

    ,
];

const Dashboard = () => {
    let navigate =useNavigate()

    let handleLogout=()=>{
        localStorage.removeItem("userinfo")
        navigate('/login')
    }





    const onClick = e => {
        console.log('click ', e);
    };



    return (
        <div className='relative h-screen'>
            <Menu
                onClick={onClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
            />
            <div className='absolute bottom-0 left-[20px]'>
               <div className='flex items-center gap-x-3'>
                 <div className='w-[50px] h-[50px] bg-red-200 rounded-full'></div>
                <p>Sajib khan</p>
                
               </div>
                <h3 onClick={handleLogout} className='text-center font-bold py-3 cursor-pointer'>Log Out</h3>
            </div>
        </div>
    )
}

export default Dashboard