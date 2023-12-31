import { Form, Button, Input } from "antd";

import styles from "./index.module.less"

const Login = () => {

	const onFinish = (values: any) => {

	}

	return (
			<div className={styles.login}>
				<div className={styles.loginWrapper}>
					<div className={styles.title}>系统登录</div>
				<Form
					name="basic"
					onFinish={onFinish}
					autoComplete="off"
				>
					<Form.Item
						name="username"
						rules={[{ required: true, message: 'Please input your username!' }]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						name="password"
						rules={[{ required: true, message: 'Please input your password!' }]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item>
						<Button type="primary" block htmlType="submit">
							Submit
						</Button>
					</Form.Item>
				</Form>
				</div>
			</div>
	)
}

export default Login;