/**
 * @author lusinabrian on 30/11/17.
 * @notes: Application actions
 */
import {
	updateConversionRatesAction
} from "../actionCreators/appActionCreator";

/**
 * Updates the conversion rates based on the currency selected from the currency list
 * @param {String} currency
 * @param {String} currType Whether we are updating the base or the quote currency
 * @returns {Function} dispatch function
 * */
export function updateConversionRates(currency, currType){
	return dispatch => {
		dispatch(updateConversionRatesAction(currency, currType))
	}
}
