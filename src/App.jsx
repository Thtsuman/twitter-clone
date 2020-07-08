import React, { Component } from "react"
import "./assets/styles/bootstrapTheme.scss"
import "./assets/styles/_base.scss"
import { Provider } from "react-redux"
import store from "./redux/store"
import DashboardContainer from "./Containers/DashboardContainer/DashboardContainer"

export class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<DashboardContainer>
          Content
        </DashboardContainer>
			</Provider>
		)
	}
}

export default App
