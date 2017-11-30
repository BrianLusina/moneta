import * as types from "./actionTypes";

/**
 * Swap currency action that swaps the current base currency with the quote currency
 * This is dispatched to the reducer which updates the state of the application
 * @returns {Object} with type of action for the reducer to handle
 */
export function swapCurrencyAction() {
	return { type: types.SWAP_CURRENCY_ACTION };
}

/**
 * Change currency amount action that is dispatched to the Reducer to handle updating the redux
 * store. This amount will be the amount from the base currency input and will be dispatched
 * to the reducer with the type of action and amount from the input
 * @param {Number} amount Currency Amount to handle
 * @returns {Object} with type of action and the payload information for reducer to handle
 */
export function changeCurrencyAmountAction(amount) {
	return { type: types.CHANGE_CURRENCY_AMOUNT, amount };
}

/**
 * Action that is dispatched to redux store stating that there is a request for an ajax call
 * to fetch conversion rates for a base to quote currency. This will trigger the app to display
 * a loading state
 * @returns {Object} Returns type of action to be used by reducer to update the state of the store
 * */
export function fetchConversionRatesRequestAction(){
	return { type: types.FETCH_CONVERSION_RATES_REQUEST}
}

/**
 * Fetch Conversion Rates success action is dispatched on successful request of conversion rates
 * of a base to quote currency. This will be dispatched with the payload data that will be used
 * to update the state of the redux store
 * @param {Object} payload Object payload with conversion rate data
 * @returns {Object} Object with type and payload information
 * */
export const fetchConversionRatesSuccessAction = (payload) => ({
	type: types.FETCH_CONVERSION_RATES_SUCCESS, payload
});

/**
 * Fetch conversion rates failure action is dispatched on failure to request for conversion rates
 * This could be due to any type of error causing the failure to retrieve conversion rates and thus
 * the error object is passed to the store and an appropriate error message can then be displayed
 * by components.
 * @param {Object} error Object with error information of the request
 * @returns {Object} Object with type and error object
 * */
export const fetchConversionRatesFailureAction = (error) => ({
	type: types.FETCH_CONVERSION_RATES_FAILURE, error
});
