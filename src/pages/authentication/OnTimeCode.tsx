import { Button, Form } from "antd"
import { AuthWrapper } from "../../components"
import OTPInput from "react-otp-input"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function OnTimeCode() {
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();

  return (
    <AuthWrapper title="On-time Code" subtitle="Confirm the code you received by email to continue">
        <Form>
            <Form.Item>
                <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={5}
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props} className="border-gray-300 border focus:border-primary outline-none p-2 px-5 rounded-md" />}
                    containerStyle={{
                        width: '100%',
                        display: "flex",
                        justifyContent: "space-between"
                    }}
                />
            </Form.Item>
            <Form.Item>
                <Button type='primary' block size='large'>Login</Button>
            </Form.Item>
            <Form.Item>
                <div className="flex justify-between">
                    <Button type='link' onClick={() =>navigate('../email-prompt', {replace: true})}>Change email</Button>
                    <Button type='link' onClick={() =>navigate('../signup')}>Resend the code</Button>
                </div>
            </Form.Item>
        </Form>
    </AuthWrapper>
  )
}

export default OnTimeCode;