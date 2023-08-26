import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { ConfigProvider } from "antd";

function App() {

  return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: '#ed6c00'
				}
			}}
		>
			<BrowserRouter>
        <Router />
      </BrowserRouter>
		</ConfigProvider>
  )
}

export default App;
