import React, { Component } from "react"
import { toggleSidebar, toggleTheme } from "../../redux/actions/appDataAction"
import { connect } from "react-redux"

class Header extends Component {
	render() {
		const { toggleSidebar, toggleTheme } = this.props
		return (
			<header id="page-topbar">
				<div className="navbar-header">
					<div className="d-flex">
						<div className="navbar-brand-box">Logo</div>
						<button className="btn btn-primary" onClick={toggleSidebar}>
							toggle-sidebar
						</button>
					</div>
					<div className="d-flex">
						<button className="btn btn-light px-3 py-1" onClick={() => toggleTheme("light")}>
							Light
						</button>
						<button className="btn btn-dark px-3 py-1" onClick={() => toggleTheme("dark")}>
							Dark
						</button>
					</div>
				</div>
			</header>
		)
	}
}

export default connect(null, { toggleSidebar, toggleTheme })(Header)
