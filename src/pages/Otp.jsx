import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'


const Otp = () => {
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
            setTimeout(() => {
                navigate("/home")

            }, 2000)


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
                label="Otp"
                name="otp"
                rules={[{ required: true, message: 'Please input your otp' }]}>
                <Input />

            </Form.Item>

            


            <div className='flex gap-x-1 ml-38'>
                <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
            <Form.Item label={null}>
                <Button type="primary" >
                   <Link to="/login"> Back to Login</Link>
                </Button>
            </Form.Item>
            </div>
           
        </Form>
    )
}

export default Otp