import axios, { AxiosError } from "axios";
import { message } from "antd"
import storage from "./storage";
import env from "@/config"

// 创建实例
const instance = axios.create({
    timeout: 8000,
    timeoutErrorMessage: "请求超时，稍后再试",
    withCredentials: true,
		headers: {
			icode: "0A10BB3F5DAAF6A2"
		}
})

// 请求拦截器
instance.interceptors.request.use(
	config => {
		const token = storage.get("token")
		if(token) {
			config.headers.Authorization = 'Token:: '+ token
		}
		config.baseURL = env.baseApi

		return {
			...config
		}
	},
	(error: AxiosError) => {
		return Promise.reject(error)
	}
)

// 响应拦截器
instance.interceptors.response.use(
	response => {
		const data = response.data;
		if(data.code === 500001) {
			message.error(data.msg)
			storage.remove("token")
			location.href = "/login"
		}else if(data.code !== 0) {
			message.error(data.msg)
			return Promise.reject(data)
		}
		return data.data
	}
    
)

export default {
	get<T>(url: string, params: object): Promise<T>{
		return instance.get(url, { params }) 
	},
	post<T>(url: string, params: object): Promise<T>{
		return instance.post(url, { params })
	}
}