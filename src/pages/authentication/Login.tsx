import { Input, Form, Button } from 'antd';

function Login() {
  return (
    <div className="w-full min-h-screen bg-white flex justify-center items-center">
        <div className="flex rounded-2xl shadow-light">
            <div className="bg-primary rounded-s-lg p-5 flex items-center justify-center">
                <div className="text-white font-bold">Tic-tac Shop</div>
            </div>
            <div className="bg-white p-10 px-20 rounded-e-lg">
                <div className="flex flex-col gap-2 mb-10 text-gray-500">
                    <div className="text-2xl font-bold">Welcome</div>
                    <div className="">Please login to your account to continue</div>
                </div>
                <div className="">
                    <Form
                        layout='vertical'
                    >
                        <Form.Item name="email" label="Email" required>
                            <Input placeholder='ex: johndoe@gmail.com' size='large' />
                        </Form.Item>
                        <Form.Item name="password" label="Password" required>
                            <Input.Password placeholder='****' size='large' />
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' block size='large'>Login</Button>
                        </Form.Item>
                        <Form.Item>
                            <div className="flex justify-between">
                                <Button type='link'>Reset password</Button>
                                <Button type='link'>Register</Button>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login