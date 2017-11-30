/**
 * @author lusinabrian on 25/11/17.
 * @notes: App container component
 */

import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "./actions";
import {Keyboard, KeyboardAvoidingView, StatusBar, TouchableWithoutFeedback, View} from "react-native";
import styles from "./styles";
import Logo from "../../components/Logo/Logo";
import InputWithButton from "../../components/TextInput/InputWithButton";
import ReverseCurrenciesButton from "../../components/Buttons/ReverseCurrenciesButton";
import LastConvertedText from "../../components/Text/LastConvertedText";
import Header from "../../components/Header/Header";
import {
	navigateToCurrencyListScreenAction,
	navigateToSettingsScreenAction,
} from "../navigator/actionCreators";

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
			quoteCurrency: "",
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
		this.props.navigation.dispatch(navigateToCurrencyListScreenAction("Base Currency"));
	}

	/**
	 * @function handlePressQuoteCurrency
	 * This handles presses on the Quote currency and navigates to the currency list screen
	 */
	handlePressQuoteCurrency() {
		this.props.navigation.dispatch(navigateToCurrencyListScreenAction("Quote Currency"));
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
		this.props.navigation.dispatch(navigateToSettingsScreenAction());
	}

	componentWillReceiveProps(nextProps) {
		this.setState(prevState => {
			return Object.assign({}, prevState, {
				isFetching: nextProps.isFetching,
				baseCurrency: nextProps.baseCurrency,
				quoteCurrency: nextProps.quoteCurrency,
			});
		});
	}

	render() {
		let quotePrice = "...";
		if (!this.props.isLoadingRates) {
			quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
		}
		const containerStyles = [styles.container];

		let backgroundColor = this.props.primaryColor;

		if (backgroundColor) {
			containerStyles.push({backgroundColor});
		}

		return (
			<TouchableWithoutFeedback onPress={this.handleTouchableWithoutFeedback}>
				<View style={containerStyles}>
					<StatusBar translucent={false} barStyle="light-content"/>
					<Header onClick={this.handleOptionsPress}/>

					<KeyboardAvoidingView behavior="padding">
						<Logo tintColor={this.props.primaryColor}/>

						<InputWithButton
							buttonText={this.props.baseCurrency}
							keyboadType="numeric"
							onChangeText={this.handleTextChange}
							defaultValue={this.props.amount.toString()}
							onPress={this.handlePressBaseCurrency}
							textColor={this.props.primaryColor}
						/>

						<InputWithButton
							buttonText={this.props.quoteCurrency}
							editable={false}
							onPress={this.handlePressQuoteCurrency}
							textColor={this.props.primaryColor}
							value={quotePrice}
						/>
						<LastConvertedText
							date={this.props.lastConversionDate}
							baseCurrency={this.props.baseCurrency}
							quoteCurrency={this.props.quoteCurrency}
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

	const conversionSelector = state.currencies.conversions[baseCurrency] || {};
	const rates = conversionSelector.rates || {};

	return {
		baseCurrency, quoteCurrency,
		amount: state.currencies.amount,
		conversionRate: rates[quoteCurrency] || 0,
		lastConversionDate: conversionSelector.date ? new Date(conversionSelector.date)
			: new Date(),
		isFetching: state.currencies.isFetching,
		isLoadingRates: conversionSelector.isLoadingRates,
		primaryColor: state.themes.primaryColor
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
