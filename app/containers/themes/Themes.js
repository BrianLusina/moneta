/**
 * @author lusinabrian on 27/11/17.
 * @notes:
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ScrollView, StatusBar, View } from "react-native";
import ListItem from "../../components/List/ListItem";
import Separator from "../../components/List/Separator";
import styles from "./styles";
import * as actions from "./actions";

/**
 * Themes container component
 * export keyword here is used to import this module as a named import
 * useful when running tests
 */
export class Themes extends Component {
	constructor(props, context) {
		super(props, context);
	}

	/**
	 * Creates the theme list
	 * */
	createThemeList() {
		const themeOptions = [
			{
				text: "Blue",
				color: styles.$blue
			},
			{
				text: "Orange",
				color: styles.$orange
			},
			{
				text: "Green",
				color: styles.$green
			},
			{
				text: "Purple",
				color: styles.$purple
			}
		];

		return themeOptions.map((theme, index) => {
			return (
				<View key={index}>
					<ListItem
						text={theme.text}
						onClick={() => this.handleThemePress(theme.color)}
						selected={false}
						checkMark={false}
						iconBackground={theme.color}
					/>
					<Separator />
				</View>
			);
		});
	}

	/**
	 * Handles theme press on an item. This will set the theme of the application when clicked
	 * @param {String} color The color theme of the list item selected
	 * */
	handleThemePress(color) {
		this.props.navigation.goBack();
	}

	/**
	 * Render container component
	 */
	render() {
		return (
			<ScrollView>
				<StatusBar translucent={false} barSyle={"default"} />
				{this.createThemeList()}
			</ScrollView>
		);
	}
}

/**
 * Validates Themes prop types
 */
Themes.propTypes = {
	navigation: PropTypes.object
};

/**
 * maps the state of the redux store to the Themes props
 * @param {Object} state of redux store
 * @param {Object} ownProps Themes properties
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
		actions: bindActionCreators(actions, dispatch)
	};
}

/**
 * Connect Themes container to redux store and map
 * actions to the store and props of this container to
 * state of store
 */
export default connect(mapStateToProps, mapDispatchToProps)(Themes);
