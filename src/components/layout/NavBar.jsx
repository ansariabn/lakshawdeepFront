import React, { useContext, useState } from "react"
import { NavLink, Link } from "react-router-dom"
import Logout from "../auth/Logout"


const NavBar = () => {
	const [showAccount, setShowAccount] = useState(false)

	const handleAccountClick = () => {
		setShowAccount(!showAccount)
	}

	const isLoggedIn = localStorage.getItem("token")
	const userRole = localStorage.getItem("userRole")

	return (
		<nav className="main-header navbar navbar-expand-lg">
			<div className="container-fluid">
				<Link to={"/"} className="navbar-brand">
					<span className=" logo">make My room</span>
				</Link>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarScroll"
					aria-controls="navbarScroll"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarScroll">
					<ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
						<li className="nav-item">
							<Link className="nav-link" aria-current="page" to={"/browse-all-rooms"}>
								Browse all rooms
							</Link>
						</li>

						{isLoggedIn && userRole === "ROLE_ADMIN" && (
							<li className="nav-item">
								<Link className="nav-link" aria-current="page" to={"/admin"}>
									Admin
								</Link>
							</li>
						)}
					</ul>

					<ul className="d-flex navbar-nav">
						<li className="nav-item">
							<Link className="nav-link" to={"/find-booking"}>
								Find my booking
							</Link>
						</li>

						<li className="nav-item dropdown">
							<Link
								className={`nav-link dropdown-toggle ${showAccount ? "show" : ""}`}
								href="#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
								onClick={handleAccountClick}>
								{" "}
								Account
							</Link>

							<ul
								className={`dropdown-menu ${showAccount ? "show" : ""}`}
								aria-labelledby="navbarDropdown">
								{isLoggedIn ? (
									<Logout />
								) : (
									<li>
										<Link className="dropdown-item" to={"/login"}>
											Login
										</Link>
									</li>
								)}
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
