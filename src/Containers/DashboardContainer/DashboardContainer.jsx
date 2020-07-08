import React, { Component } from "react"
import Header from "../../components/Header/Header"
import Sidebar from "../../components/Sidebar/Sidebar"
import Footer from "../../components/Footer/Footer"
import { connect } from "react-redux"

class DashboardContainer extends Component {
	render() {
		const { isSidebarCollapsed, currentTheme } = this.props
		return (
			<div className={`layout-wrapper ${currentTheme}`}>
				<div className={isSidebarCollapsed ? `vertical-collapsed` : ``}>
					<Header />
					<Sidebar />
					<div className="main-content">
						<div className="page-content">
							{this.props.children}
						</div>
					</div>
					<Footer />
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({ appData }) => ({
	isSidebarCollapsed: appData.sidebarCollapsed,
	currentTheme: appData.currentTheme,
})

export default connect(mapStateToProps)(DashboardContainer)
