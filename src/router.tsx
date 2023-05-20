import { createBrowserRouter } from "react-router-dom";
import { EmailPrompt, Login, OnTimeCode, Signup } from "./pages";

export default createBrowserRouter([
    {
        path: '/auth',
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <Signup />
            },
            {
                path: 'email-prompt',
                element: <EmailPrompt />
            },
            {
                path: 'otp',
                element: <OnTimeCode />
            }
        ]
    }
])