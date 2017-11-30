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
 * @returns {Function} dispatch function
 * */
export function updateConversionRates(currency){
	return dispatch => {
		dispatch(updateConversionRatesAction(currency))
	}
}
