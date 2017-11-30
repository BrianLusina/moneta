/**
 * @author lusinabrian on 25/11/17.
 * @notes: App container component
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions";
import {
	Text,
	View,
	StatusBar,
	Keyboard,
	KeyboardAvoidingView,
	TouchableWithoutFeedback
} from "react-native";
import styles from "./styles";
import Logo from "../../components/Logo/Logo";
import InputWithButton from "../../components/TextInput/InputWithButton";
import ReverseCurrenciesButton from "../../components/Buttons/ReverseCurrenciesButton";
import LastConvertedText from "../../components/Text/LastConvertedText";
import Header from "../../components/Header/Header";
import {
	CURRENCY_LIST_SCREEN,
	SETTINGS_SCREEN
} from "../../navigator/constants";

/**
 * App container component
 * export keyword here is used to import this module as a named import
 * useful when running tests
 */
export class Home extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			baseCurrency: "",
			quoteCurrency:"",
			isFetching: false,
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
				isFetching: nextProps.isFetching,
				baseCurrency: nextProps.selectedBaseCurrency || nextProps.baseCurrency,
				quoteCurrency: nextProps.selectedQuoteCurrency || nextProps.quoteCurrency,
			});
		});
	}

	render() {
		let quotePrice = "...";
		if (!this.props.isLoadingRates) {
			quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
		}

		return (
			<TouchableWithoutFeedback onPress={this.handleTouchableWithoutFeedback}>
				<View style={styles.container}>
					<StatusBar translucent={false} barStyle="light-content" />
					<Header onClick={this.handleOptionsPress} />

					<KeyboardAvoidingView behavior="padding">
						<Logo />

						<InputWithButton
							buttonText={this.state.baseCurrency}
							keyboadType="numeric"
							onChangeText={this.handleTextChange}
							defaultValue={this.props.amount.toString()}
							onPress={this.handlePressBaseCurrency}
						/>

						<InputWithButton
							buttonText={this.state.quoteCurrency}
							editable={false}
							onPress={this.handlePressQuoteCurrency}
							value={quotePrice}
						/>
						<LastConvertedText
							date={this.props.lastConversionDate}
							baseCurrency={this.state.baseCurrency}
							quoteCurrency={this.state.quoteCurrency}
							conversionRate={this.props.conversionRate}
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
Home.propTypes = {
	navigation: PropTypes.object
};

/**
 * maps the state of the redux store to the App props
 * @param {Object} state of redux store
 * @param {Object} ownProps App properties
 * @returns {Object} new state of redux store
 */
function mapStateToProps(state, ownProps) {
	const baseCurrency = state.currencies.baseCurrency;
	const quoteCurrency = state.currencies.quoteCurrency;

	// currently selected quote and base currencies from the currency list object in the redux
	// store
	const selectedBaseCurrency = state.currencyList.currentBase;
	const selectedQuoteCurrency = state.currencyList.currentQuote;

	const conversionSelector = state.currencies.conversions[baseCurrency] || {};
	const rates = conversionSelector.rates || {};

	return {
		baseCurrency, quoteCurrency, selectedBaseCurrency, selectedQuoteCurrency,
		amount: state.currencies.amount,
		conversionRate : rates[quoteCurrency] || 0,
		lastConversionDate : conversionSelector.date ? new Date(conversionSelector.date)
			: new Date(),
		isFetching : state.currencies.isFetching,
		isLoadingRates: conversionSelector.isLoadingRates,
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);
