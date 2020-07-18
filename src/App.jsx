import React, { Component } from "react"
import "./assets/styles/bootstrapTheme.scss"
import "./assets/styles/_base.scss"
import "./assets/styles/custom.scss"
import "boxicons"
import "../node_modules/boxicons/css/boxicons.min.css"
import { Provider } from "react-redux"
import store from "./redux/store"
import { Row, Col, Container } from "react-bootstrap"
import Sidebar from "./components/Sidebar/Sidebar"

export class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="layout-wrapper bg-custom-color">
					<Container fluid>
						<Row>
							<Col sm="1" md="3" lg="3">
								<Sidebar />
							</Col>
							<Col sm="11" md="8" lg="5">
								<div className="content"></div>
							</Col>
							<Col sm="0" md="0" lg="4"></Col>
						</Row>
					</Container>
				</div>
			</Provider>
		)
	}
}

export default App
