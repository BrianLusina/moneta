/**
 * @author lusinabrian on 25/11/17.
 * @notes: App container component
 */

import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { Text, View, StatusBar, Keyboard, TouchableWithoutFeedback } from "react-native";
import styles from "./config/styles";
import Logo from "./components/Logo/Logo";
import InputWithButton from "./components/TextInput/InputWithButton";

/**
 * App container component
 * export keyword here is used to import this module as a named import
 * useful when running tests
 */
export class App extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {

		}

		this.handlePressBaseCurrency = this.handlePressBaseCurrency.bind(this);
		this.handlePressQuoteCurrency = this.handlePressQuoteCurrency.bind(this);		
		this.handleTextChange = this.handleTextChange.bind(this);
	}

	/**
	 * Handles press on base currency
	 */
	handlePressBaseCurrency(){
		console.log("handle base currency");
	}

	/**
	 * @function handlePressQuoteCurrency
	 * This handles presses on the Quote currency
	 */
	handlePressQuoteCurrency(){
		console.log("Handle quote");
	}

	/**
	 * Handles text change
	 * @param {String} text The text input received from the input
	 */
	handleTextChange(text){
		console.log("Text", text);
	}

	/**
	 * @function
	 * Dismises the keyboard when the use touches outside the text inputs
	 */
	handleTouchableWithoutFeedback(){
		Keyboard.dismiss();
	}

	render() {
		return (
			<TouchableWithoutFeedback onPress={this.handleTouchableWithoutFeedback}>
				<View style={styles.container}>
					<StatusBar translucent={false} barStyle="light-content"/>
					<Logo />
				
					<InputWithButton 
						buttonText={"USD"}
						keyboadType="numeric"
						onChangeText={this.handleTextChange}
						defaultValue={"45"}
						onPress={this.handlePressBaseCurrency}/>
				
					<InputWithButton 
						buttonText={"GPB"}
						editable={false}
						onPress={this.handlePressQuoteCurrency}
						value={"85"}/>				
				</View>
			</TouchableWithoutFeedback>
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