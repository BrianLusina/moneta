import React from "react";
import { addNavigationHelpers } from "react-navigation";
import Navigator from "./routes";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const AppNavigator = ({ dispatch, nav }) => {
	return (
		<Navigator
			navigation={addNavigationHelpers({
				dispatch,
				state: nav
			})}
		/>
	);
};

AppNavigator.propTypes = {
	dispatch: PropTypes.func,
	nav: PropTypes.object
};

const mapStateToProps = state => ({
	nav: state.nav
});

export default connect(mapStateToProps)(AppNavigator);
