import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-grid-system";

const Layout = props => {
	return (
		<Container>
			<Row>
				<Col size="20">Layout added.</Col>
				<Col>{props.children}</Col>
			</Row>
		</Container>
	);
};

Layout.propTypes = {};

export default Layout;
