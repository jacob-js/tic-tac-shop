import { Input, Form, Button } from 'antd';
import { AuthWrapper } from '../../components';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

  return (
    <AuthWrapper title='Welcome' subtitle='Please login to your account to continue'>
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
                    <Button type='link' onClick={() =>navigate('../signup')}>Register</Button>
                </div>
            </Form.Item>
        </Form>
    </AuthWrapper>
  )
}

export default Login