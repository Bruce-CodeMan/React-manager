import requests from "@/utils/requests";
import { useEffect } from "react";

const Welcome = () => {

    useEffect(() => {
        requests.get("/users/login", {
            id: 123
        }).catch(error => {
            console.log("error: ", error)
        })
    }, [])
    

    return (
        <div>Welcome</div>
    )
}

export default Welcome;