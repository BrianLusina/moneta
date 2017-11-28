import * as types from "../actionTypes/appActionTypes";

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
