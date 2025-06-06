import { Link, useNavigate } from "react-router-dom"
import WelcomeContent from "../common/welcome-content"
import { Form, Input, Button, message } from 'antd'
import { loginUser } from "../../../api-services/users-service";
import { useState } from "react"
import Cookies from "js-cookie";

function LoginPage() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onFinish = async (values: never) => {
        try {
            setLoading(true);
            const response = await loginUser(values);
            message.success(response.message);
            Cookies.set("token", response.token);
            navigate('/dashboard')
        } catch (error: any) {
            message.error(error.response?.data.message || error.message)
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
            <div className="cols-span-1 lg:flex hidden">
                <WelcomeContent />
            </div>
            <div className="h-screen flex items-center justify-center bg-primary">
                <Form className="flex flex-col gap-6 w-96 p-8 bg-white rounded-xl shadow-lg" layout="vertical" onFinish={onFinish}>
                    <h1 className="text-3xl font-bold text-gray-700 text-center">
                        Kyçu në llogarinë tënde
                    </h1>

                    <Form.Item name='email' required label='Emaili' rules={[{ required: true }]}>
                        <Input placeholder="Emaili" size="large" />
                    </Form.Item>

                    <Form.Item name='password' required label='Fjalëkalimi' rules={[{ required: true }]}>
                        <Input.Password placeholder="Fjalëkalimi" size="large" />
                    </Form.Item>

                    <Button type="primary" htmlType="submit" block loading={loading} size="large" className="h-12 text-lg">
                        Kyçu
                    </Button>

                    <Link to='/register' className="text-center text-gray-600 hover:text-primary transition-colors">
                        Nuk ke një llogari? Regjistrohu
                    </Link>
                </Form>
            </div>
        </div>
    )
}

export default LoginPage
