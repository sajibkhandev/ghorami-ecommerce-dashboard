import React from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

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
            { key: '/dashboard/createcategory', label: 'Create Category' },
            { key: '/dashboard/viewcategory', label: 'View Category' },

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
            { key: '/dashboard/createsubcategory', label: 'Create SubCategory' },
            { key: '/dashboard/viewsubcategory', label: 'View SubCategory' },

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
            { key: '/dashboard/createproduct', label: 'Create Product' },
            { key: '/dashboard/viewproduct', label: 'View Product' },

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
            { key: '/dashboard/createvarient', label: 'Create Varient' },
            { key: '/dashboard/viewvarient', label: 'View Varient' },

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
            { key: '/dashboard/adddiscount', label: 'Discount' },

        ],
    },
    {
        type: 'divider',
    },

    ,
];

const Dashboard = () => {
    let data = useSelector(state => state.userinfo.value)
   

    let navigate = useNavigate()

    let handleLogout = () => {
        localStorage.removeItem("userinfo")
        navigate('/login')
    }





    const onClick = e => {
        // console.log(e.key);
        navigate(e.key)
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
                    <p>{data.username}</p>

                </div>
                <h3 onClick={handleLogout} className='text-center font-bold py-3 cursor-pointer'>Log Out</h3>
            </div>
        </div>
    )
}

export default Dashboard