import { Link, useNavigate } from "react-router-dom"
import WelcomeContent from "../common/welcome-content"
import { Form, Input, Button, message } from 'antd'
import { registerUser } from "../../../api-services/users-service"
import { useState } from "react"

function RegisterPage() {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const onFinish = async (values: never) => {
        try {
            const response = await registerUser(values);
            message.success(response.message)
            navigate('/login')
        } catch (error: any) {
            message.error(error.response?.data.message || error.message)
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="cols-span-1 lg:flex hidden">
                <WelcomeContent />
            </div>
            <div className="h-screen flex items-center justify-center">
                <Form className="flex flex-col gap-5 w-96" layout="vertical" onFinish={onFinish}>
                    <h1 className="text-2xl font-bold text-gray-600">
                        Regjistro llogarinë tuaj
                    </h1>


                    <Form.Item name='name' required label='Emri' rules={[{ required: true }]}>
                        <Input placeholder="Emri" />
                    </Form.Item>

                    <Form.Item name='email' required label='Emaili' rules={[{ required: true }]}>
                        <Input placeholder="Emaili" />
                    </Form.Item>

                    <Form.Item name='password' required label='Fjalëkalimi' rules={[{ required: true }]}>
                        <Input placeholder="Fjalëkalimi" />
                    </Form.Item>

                    <Button type="primary" htmlType="submit" block loading={loading}>
                        Regjistrohu
                    </Button>


                    <Link to='/login'>
                        Keni një llogari? Kyçu
                    </Link>
                </Form>

            </div>
        </div>
    )
}

export default RegisterPage
