import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'


const Otp = () => {
    let navigate = useNavigate()
    let param = useParams()
    // console.log(param.email);
    
    
    

    const onFinish = async values => {
        let data = await axios.post('http://localhost:5000/api/v1/authentication/otp',
            {
                otp: values.otp,
                email:param.email

            },

        )
        if (data.data.success == "Otp match") {
            toast.success("Verification Successful")
            setTimeout(() => {
                navigate("/login")
            }, 2000)
        } else if (data.data.error = "Otp not match") {
            toast.error("Otp not match")
        }
        else if (data.data.error = "We don't find your account") {
            toast.error("We don't find your account")
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