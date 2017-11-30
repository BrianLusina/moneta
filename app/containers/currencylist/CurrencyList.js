/**
 * @author lusinabrian on 27/11/17.
 * @notes:
 */

import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import * as actions from "./actions";
import { updateConversionRates } from "../../actions/appActions";
import {bindActionCreators} from "redux";
import {FlatList, StatusBar, View} from "react-native";
import CurrencyListItem from "../../components/List/ListItem";
import Separator from "../../components/List/Separator";

/**
 * CurrencyList container component
 * export keyword here is used to import this module as a named import
 * useful when running tests
 */
export class CurrencyList extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {};

		this.handleSelectedCurrencyItem = this.handleSelectedCurrencyItem.bind(
			this
		);
	}

	/**
	 * Handles selected currency items in flat list
	 * */
	handleSelectedCurrencyItem(currency) {
		const {type} = this.props.navigation.state.params;

		if (type === "base") {
			//dispatch change base currency
			this.props.actions.changeBaseCurrency(currency);
			this.props.updateConversionRates(currency);
		} else if (type === "quote") {
			// dispatch change quote currency
			this.props.actions.changeQuoteCurrency(currency);
			this.props.updateConversionRates(currency);
		}
		this.props.navigation.goBack(null);
	}

	/**
	 * Creates the render items for the FlatList*/
	createRenderItems(item) {
		// check for the comparison currency and update the selection based on the selected
		// currency and also check if we are updating the quote currency
		let comparisonCurrency = this.props.currentBase;
		if(this.props.navigation.state.params.type === "quote"){
			comparisonCurrency = this.props.currentQuote;
		}

		return (
			<CurrencyListItem
				text={item}
				selected={item === comparisonCurrency}
				onClick={() => this.handleSelectedCurrencyItem(item)}
			/>
		);
	}

	/**
	 * Render container component
	 */
	render() {
		return (
			<View style={{flex: 1}}>
				<StatusBar barStyle="default" translucent={false}/>
				<FlatList
					data={this.props.currencies}
					renderItem={({item}) => this.createRenderItems(item)}
					keyExtractor={item => item}
					itemSeparatorComponent={Separator}
				/>
			</View>
		);
	}
}

/**
 * Validates CurrencyList prop types
 */
CurrencyList.propTypes = {
	navigation: PropTypes.object
};

/**
 * maps the state of the redux store to the CurrencyList props
 * @param {Object} state of redux store
 * @param {Object} ownProps CurrencyList properties
 * @returns {Object} new state of redux store
 */
function mapStateToProps(state, ownProps) {
	return {
		currencies : state.currencyList.currencies,
		currentBase: state.currencyList.currentBase,
		currentQuote:state.currencyList.currentQuote,
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
		actions: bindActionCreators(actions, dispatch),
		updateConversionRates : bindActionCreators(updateConversionRates, dispatch)
	};
}

/**
 * Connect CurrencyList container to redux store and map
 * actions to the store and props of this container to
 * state of store
 */
export default connect(mapStateToProps, mapDispatchToProps)(CurrencyList);
