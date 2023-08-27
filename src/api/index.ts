import requests from "@/utils/requests";


export const login = (params: any) => {
	return requests.post("/users/login", params)
}