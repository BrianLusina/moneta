/**
 * Application actions handled by the application container
 */
import {
	changeCurrencyAmountAction,
	swapCurrencyAction
} from "./actionCreators";

/**
 * Swap currency action that handles swapping the currency of the base and quote currencies
 * This will dispatch the swap currency action that the reducer will handle
 * @returns {function} dispatch function
 */
export function swapCurrency() {
	return dispatch => {
		dispatch(swapCurrencyAction());
		return Promise.resolve();
	};
}

/**
 * Changes the amount of the Base currency in the redux store. This action will dispatch an
 * action for the app reducer to handle when updating the state of the store
 * @param {Number} amount Amount to update the Redux Store
 * @returns {Function} Function that will be dispatched to the redux store
 */
export function changeAmount(amount) {
	return dispatch => {
		dispatch(changeCurrencyAmountAction(amount));
		return Promise.resolve();
	};
}
