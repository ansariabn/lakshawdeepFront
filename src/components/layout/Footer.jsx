import React from "react"
import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
	let today = new Date()
	return (
		<footer className=" bg-dark text-light py-3 footer mt-lg-5">
			<Container>
				<Row>
					<Col xs={12} md={12} className="text-center">
						<p className="mb-0"> &copy; {today.getFullYear()} make My room</p>
					</Col>
				</Row>
				<p className="text-secondary" >Made By ABN</p>
			</Container>
		</footer>
	)
}

export default Footer
