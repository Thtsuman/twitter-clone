import React, { Component } from "react"

class Sidebar extends Component {
	state = {
		sidebarItems: [
			{ name: "Home", icon: "bx bxs-home-circle" },
			{ name: "Explore", icon: "bx bx-hash" },
			{ name: "Notification", icon: "bx bx-bell" },
			{ name: "Messages", icon: "bx bx-message-square-detail" },
			{ name: "Bookmarks", icon: "bx bx-bookmark" },
			{ name: "List", icon: "bx bx-detail" },
			{ name: "Profile", icon: "bx bx-user" },
			{ name: "More", icon: "bx bx-dots-horizontal-rounded" },
		],
		currentActiveInd: 0,
	}

	render() {
		const { sidebarItems, currentActiveInd } = this.state
		return (
			<div className="d-flex justify-content-end">
				<div className="sidebar mr-4 d-flex flex-column justify-content-between">
					<div className="upper">
						<div className="logo-container py-3 px-1">
							<i className="bx bxl-twitter logo"></i>
						</div>
						<div className="sidebar-items-container">
							{sidebarItems?.map((item, ind) => (
								<div
									className={`sidebar-item d-flex align-items-center ${
										currentActiveInd === ind ? `active` : ``
									}`}
									key={ind}
								>
									<i className={`${item.icon} mr-3`}></i>
									<label className="mb-0 font-weight-bold mr-2">{item.name}</label>
								</div>
							))}
						</div>
						<div className="mt-3">
							<button className="btn btn-primary btn-block rounded-lg font-weight-bold">Tweet</button>
						</div>
					</div>
					<div className="lower mb-3">
						<div className="user-info">
							<div className="d-flex justify-content-between align-items-center">
								<div className="left d-flex align-items-center">
									<div className="img-container mr-2">
										<img
											src="https://pbs.twimg.com/profile_images/1246857380110823425/Dc0tPelN_normal.jpg"
                      alt=""
                      className="img-fluid rounded-lg"
										/>
									</div>
									<div className="mr-5">
										<div className="h6 mb-0 font-weight-bold">John Doe</div>
										<div className="text-muted label-muted">@johnDoe</div>
									</div>
								</div>
								<div className="right">
									<i className="bx bxs-chevron-down"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Sidebar
