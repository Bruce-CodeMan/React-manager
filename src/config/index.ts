type ENV = "dev" | "stg" | "prd"

const env = (document.documentElement.dataset.env as ENV) || "stg"

const config = {
	dev: {
		baseApi: "/api",
		uploadApi: "http://api-driver-dev.marsview.com",
		cdn: "http://xxx.aliyun.com"
	},
	stg: {
		baseApi: "/api",
		uploadApi: "http://api-driver-stg.marsview.com",
		cdn: "http://xxx.aliyun.com"
	},
	prd: {
		baseApi: "/api",
		uploadApi: "http://api-driver.marsview.cc",
		cdn: "http://xxx.aliyun.com"
	}
}

export default {
	env,
	...config['prd']
}