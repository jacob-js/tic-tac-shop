import { Input, Form, Button } from 'antd';

function Signup() {
  return (
    <div className="w-full min-h-screen bg-white flex justify-center items-center">
        <div className="flex flex-col sm:flex-row rounded-lg shadow-light">
            <div className="bg-primary rounded-t-lg sm:rounded-s-lg sm:rounded-tr-none p-5 flex items-center justify-center">
                <div className="text-white font-bold">Tic-tac Shop</div>
            </div>
            <div className="bg-white p-10 sm:px-20 rounded-b-lg sm:rounded-e-lg">
                <div className="flex flex-col gap-2 mb-10 text-gray-500">
                    <div className="text-2xl font-bold">Register</div>
                    <div className="">Please create an account to continue</div>
                </div>
                <div className="">
                    <Form
                        layout='vertical'
                    >
                        <Form.Item name="fullName" label="Full Name" required>
                            <Input placeholder='ex: John Doe' size='large' />
                        </Form.Item>
                        <Form.Item name="email" label="Email" required>
                            <Input placeholder='ex: johndoe@gmail.com' size='large' />
                        </Form.Item>
                        <Form.Item name="password" label="Password" required>
                            <Input.Password placeholder='****' size='large' />
                        </Form.Item>
                        <Form.Item name="password" label="Confirm the same password" required>
                            <Input.Password placeholder='****' size='large' />
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' block size='large'>Login</Button>
                        </Form.Item>
                        <Form.Item>
                            <Button type='link'>Back to login</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup