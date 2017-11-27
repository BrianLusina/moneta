/**
 * @author lusinabrian on 27/11/17.
 * @notes:
 */

import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {View, StatusBar, Text, FlatList} from "react-native";
import currencies from "./data";
import CurrencyListItem from "../../components/List/ListItem";
import Separator from "../../components/List/Seperator";

/**
 * CurrencyList container component
 * export keyword here is used to import this module as a named import
 * useful when running tests
 */
export class CurrencyList extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {

		};

		this.handleSelectedCurrencyItem = this.handleSelectedCurrencyItem.bind(this);
	}

	/**
	 * Handles selected currency items in flat list
	 * */
	handleSelectedCurrencyItem(){

	}

	/**
	 * Creates the render items for the FlatList*/
	createRenderItems(item){
		return (
			<CurrencyListItem
				text={item}
				selected={true}
				onClick={this.handleSelectedCurrencyItem}
			/>
		)
	}

	/**
	 * Render container component
	 */
	render() {
		return (
			<View style={{flex:1}}>
				<StatusBar barStyle="default" translucent={false}/>
				<FlatList
					data={currencies}
					renderItem={this.createRenderItems({item})}
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
CurrencyList.propTypes = {};

/**
 * maps the state of the redux store to the CurrencyList props
 * @param {Object} state of redux store
 * @param {Object} ownProps CurrencyList properties
 * @returns {Object} new state of redux store
 */
function mapStateToProps(state, ownProps) {
	return {
		state: state.currency
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
 * Connect CurrencyList container to redux store and map
 * actions to the store and props of this container to
 * state of store
 */
export default connect(mapStateToProps, mapDispatchToProps)(CurrencyList)