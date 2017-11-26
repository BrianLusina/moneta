/**
 * @author lusinabrian on 25/11/17.
 * @notes: App container component
 */

import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { Text, View, StatusBar } from "react-native";
import styles from "./config/styles";

/**
 * App container component
 * export keyword here is used to import this module as a named import
 * useful when running tests
 */
export class App extends Component {
	constructor(props, context) {
		super(props, context);

	}

	render() {
		return (
			<View style={styles.container}>
				<StatusBar translucent={false} barStyle="light-content"/>
				<Text>Moneta</Text>
			</View>
		);
	}
}

/**
 * Validates App prop types
 */
App.propTypes = {};

/**
 * maps the state of the redux store to the App props
 * @param {Object} state of redux store
 * @param {Object} ownProps App properties
 * @returns {Object} new state of redux store
 */
function mapStateToProps(state, ownProps) {
	return {
		state: state
	};
}

/**
 * maps dispatch actions to props in this container
 * component
 * @param {Object} dispatch
 * @returns {Object} actions object
 */
function mapDispatchToProps(dispatch) {
	return {
		// actions: bindActionCreators(actions, dispatch)
	};
}

/**
 * Connect App container to redux store and map
 * actions to the store and props of this container to
 * state of store
 */
export default connect(mapStateToProps, mapDispatchToProps)(App)