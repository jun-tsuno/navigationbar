import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const StyledNavbar = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<LinkContainer to="/">
					<Navbar.Brand>Navbar</Navbar.Brand>
				</LinkContainer>
				<Nav className="me-auto">
					<LinkContainer to="/about">
						<Nav.Link>About</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/photos">
						<Nav.Link>Photos</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/works">
						<Nav.Link>Works</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar>
		</>
	);
};

export default StyledNavbar;
