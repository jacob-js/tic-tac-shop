import { createBrowserRouter } from "react-router-dom";
import { Login, Signup } from "./pages";

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
            }
        ]
    }
])