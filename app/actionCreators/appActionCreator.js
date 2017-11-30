/**
 * @author lusinabrian on 30/11/17.
 * @notes: Action creator for appActionCreator
 */
import * as types from "../actionTypes/appActionTypes";

/**
 * Updates conversion rates based on the currency
 * @param {String} currency
 * @returns {Object} type of action and the currency update
 * */
export const updateConversionRatesAction = currency => ({
	type: types.UPDATE_CONVERSION_RATES, currency
});