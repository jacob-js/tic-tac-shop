import { Input, Form, Button } from 'antd';
import { AuthWrapper } from '../../components';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();

  return (
    <AuthWrapper title='Register' subtitle='Please create an account to continue'>
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
                <Button type='link' onClick={() =>navigate('../login', {replace: true})}>Back to login</Button>
            </Form.Item>
        </Form>
    </AuthWrapper>
  )
}

export default Signup