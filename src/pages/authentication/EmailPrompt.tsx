import { Button, Form, Input } from "antd"
import { AuthWrapper } from "../../components"
import { useNavigate } from "react-router-dom"

function EmailPrompt() {
    const navigate = useNavigate();

  return (
    <AuthWrapper title="Password reset request" subtitle="Enter your id to request an on-time code">
        <Form
            layout='vertical'
        >
            <Form.Item name="email" label="Email" required>
                <Input placeholder='ex: johndoe@gmail.com' size='large' />
            </Form.Item>
            <Form.Item>
                <Button type='primary' block size='large' onClick={() =>navigate('../otp', {replace: true})}>Submit</Button>
            </Form.Item>
            <Form.Item>
                <div className="flex justify-between">
                    <Button type='link' onClick={() =>navigate('../login', {replace: true})}>Cancel and go to login</Button>
                </div>
            </Form.Item>
        </Form>
    </AuthWrapper>
  )
}

export default EmailPrompt