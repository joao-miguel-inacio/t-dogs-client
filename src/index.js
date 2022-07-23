import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import UserWrapper from "./context/auth/UserWrapper"

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<UserWrapper>
				<App />
			</UserWrapper>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
)
