/**
 * @author lusinabrian on 25/11/17.
 * @notes: App container component
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions/appActions";
import {
	Text,
	View,
	StatusBar,
	Keyboard,
	KeyboardAvoidingView,
	TouchableWithoutFeedback
} from "react-native";
import styles from "./config/styles";
import Logo from "./components/Logo/Logo";
import InputWithButton from "./components/TextInput/InputWithButton";
import ReverseCurrenciesButton from "./components/Buttons/ReverseCurrenciesButton";
import LastConvertedText from "./components/Text/LastConvertedText";
import Header from "./components/Header/Header";
import { CURRENCY_LIST_SCREEN, SETTINGS_SCREEN } from "./navigator/constants";
import { NavigationActions } from "react-navigation";

/**
 * App container component
 * export keyword here is used to import this module as a named import
 * useful when running tests
 */
export class App extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			base: "USD",
			quote: "GBP",
			baseAmount: 0,
			quoteAmount: 0,
			date: new Date()
		};

		this.handlePressBaseCurrency = this.handlePressBaseCurrency.bind(this);
		this.handlePressQuoteCurrency = this.handlePressQuoteCurrency.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleSwapCurrencies = this.handleSwapCurrencies.bind(this);
		this.handleOptionsPress = this.handleOptionsPress.bind(this);
	}

	/**
	 * Handles press on base currency
	 * This navigates to the Currency list screen
	 */
	handlePressBaseCurrency() {
		this.props.navigation.dispatch({
			type: CURRENCY_LIST_SCREEN,
			routeName: "CurrencyList"
		});
		// this.props.baseCurrencyScreen();
	}

	/**
	 * @function handlePressQuoteCurrency
	 * This handles presses on the Quote currency and navigates to the currency list screen
	 */
	handlePressQuoteCurrency() {
		this.props.navigation.dispatch({
			type: CURRENCY_LIST_SCREEN,
			routeName: "CurrencyList"
		});
	}

	/**
	 * Handles text change
	 * @param {String} text The text input received from the input
	 */
	handleTextChange(text) {
		this.props.actions.changeAmount(text);
	}

	/**
	 * @function
	 * Dismises the keyboard when the use touches outside the text inputs
	 */
	handleTouchableWithoutFeedback() {
		Keyboard.dismiss();
	}

	/**
	 * @function
	 * Swaps the base and quote currencies
	 */
	handleSwapCurrencies() {
		this.props.actions.swapCurrency();
	}

	/**
	 * Handles Options/Settings Click
	 */
	handleOptionsPress() {
		this.props.navigation.dispatch({ type: SETTINGS_SCREEN });
		// this.props.navigation.dispatch({
		// 	type: SETTINGS_SCREEN,
		// 	routeName: SETTINGS_SCREEN
		// });
	}

	componentWillReceiveProps(nextProps) {
		this.setState(prevState => {
			return Object.assign({}, prevState, {
				base: nextProps.baseCurrency,
				quote: nextProps.quoteCurrency,
				baseAmount: nextProps.amount
			});
		});
	}

	render() {
		return (
			<TouchableWithoutFeedback onPress={this.handleTouchableWithoutFeedback}>
				<View style={styles.container}>
					<StatusBar translucent={false} barStyle="light-content" />
					<Header onClick={this.handleOptionsPress} />

					<KeyboardAvoidingView behavior="padding">
						<Logo />

						<InputWithButton
							buttonText={this.state.base}
							keyboadType="numeric"
							onChangeText={this.handleTextChange}
							defaultValue={this.state.baseAmount.toString()}
							onPress={this.handlePressBaseCurrency}
						/>

						<InputWithButton
							buttonText={this.state.quote}
							editable={false}
							onPress={this.handlePressQuoteCurrency}
							value={this.state.quoteAmount.toString()}
						/>
						<LastConvertedText
							date={this.state.date}
							baseCurrency={this.state.base}
							quoteCurrency={this.state.quote}
							conversionRate={0.789}
						/>
						<ReverseCurrenciesButton
							onClick={this.handleSwapCurrencies}
							text={"Reverse Currencies"}
						/>
					</KeyboardAvoidingView>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

/**
 * Validates App prop types
 */
App.propTypes = {
	navigation: PropTypes.object
};

/**
 * maps the state of the redux store to the App props
 * @param {Object} state of redux store
 * @param {Object} ownProps App properties
 * @returns {Object} new state of redux store
 */
function mapStateToProps(state, ownProps) {
	return {
		baseCurrency: state.app.baseCurrency,
		quoteCurrency: state.app.quoteCurrency,
		amount: state.app.amount
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
 * Connect App container to redux store and map
 * actions to the store and props of this container to
 * state of store
 */
export default connect(mapStateToProps, mapDispatchToProps)(App);
