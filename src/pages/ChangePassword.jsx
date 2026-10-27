import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate, useParams } from 'react-router-dom'

const ChangePassword = () => {
    let param =useParams()
    console.log(param.email);
    


    let navigate = useNavigate()
    const onFinish = async values => {
        let data = await axios.post('http://localhost:5000/api/v1/authentication/changepassword',
            {
                newpassword: values.newpassword,
                email:param.email
                

            },

        )
        if (data.data.success == "Password Updated") {
            toast.success("Password Updated")
            setTimeout(() => {
                navigate("/login")

            }, 1000)


        } else if (data.data.error == "Invaild Credential") {
            toast.error("Invaild Credential")
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
                label="New Password"
                name="newpassword"
                rules={[{ required: true, message: 'Please input your new Password!' }]}>
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

export default ChangePassword