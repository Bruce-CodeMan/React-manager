import { useRoutes, Navigate } from "react-router-dom";
import Login from "@/containers/Login";
import Welcome from "@/containers/Welcome";
import NotFound from "@/containers/NotFound";

const router = [
    {
        path: "/",
        element: <Welcome />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "*",
        element: <Navigate to="/404" />
    },
    {
        path: "/404",
        element: <NotFound />
    }
]

export default function Router() {
    return useRoutes(router)
}