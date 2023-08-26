export default {
	
	/**
	 * storage的存储
	 * @param key {string} 参数名称
	 * @param value {any} 参数的值
	 */
	set(key: string, value: any) {
		localStorage.setItem(key, value)
	},

	/**
	 * storage的读取
	 * @param key {string} 参数名称
	 * @returns storage的值
	 */
	get(key: string) {
		const value = localStorage.getItem(key)
		if(!value) return ''
		try{
			return JSON.parse(value)
		}catch(error) {
			return value
		}
	},

	/**
	 * storage的删除
	 * @param key {string} 参数名称
	 */
	remove(key: string) {
		localStorage.removeItem(key)
	},


	/**
	 * 清空所有
	 */
	clear(){
		localStorage.clear()
	}
}