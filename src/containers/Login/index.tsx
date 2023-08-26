import requests from "@/utils/requests";
import { useEffect } from "react";

const Login = () => {

    useEffect(() => {
        requests.post("/users/login", {
            id: 123
        }).catch(error => {
            console.log("error: ", error)
        })
    }, [])
    return (
        <div>Login</div>
    )
}

export default Login;