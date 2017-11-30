/**
 * @author lusinabrian on 27/11/17.
 * @notes: Action creators These are pure functions that could take parameters and return the type
 * of action for reducer to handle or return the type of action and the data
 */
import * as types from "./actionTypes";

/**
 * Request action to trigger to application that data is being fetched
 * @return {Object} Returs an object with type of action for reducer to handle a request action.
 * */
export function fetchCurrencyListRequestAction() {
	return {type: types.FETCH_CURRENCY_LIST_REQUEST};
}

/**
 * Fetch currency list failure action is used to trigger to redux store that there was an error
 * in handling a given request. This will pass on the error object to the redux store which
 * will update the application accordingly
 * @param {Object} error, Error object with information about the error
 * @return {Object} Object with Type of action and error object
 * */
export function fetchCurrencyListFailureAction(error) {
	return {type: types.FETCH_CURRENCY_LIST_FAILURE, error};
}

/**
 * Fetch currency list success action is used to trigger to redux store that the async request was
 * a success and passes on the payload data to the store which will make it available in the app
 * @param {Object} payload, Payload object with information of the currency list data
 * @return {Object} Object with Type of action and payload object
 * */
export function fetchCurrencyListSuccessAction(payload) {
	return {type: types.FETCH_CURRENCY_LIST_SUCCESS, payload};
}

/**
 * Action to change the base currency from the selected currencies that pop up on the screen
 * @param {String} baseCurrency New currency to change to
 * @returns {Object} Object with type of action for reducer to resolve and the currency to set as
 * new base currency
 * */
export function changeBaseCurrencyAction (baseCurrency){
	return {type: types.CHANGE_BASE_CURRENCY, baseCurrency}
}

/**
 * Changes the quote currency by passing the newly selected currency to the redux store
 * This will pass a type of action [Change quote currency action] to the store along with the quote
 * currency to change to
 * @param {String} quoteCurrency. The newly selected quote currency item
 * @returns {Object} type of action and the quote currency
 * */
export function changeQuoteCurrencyAction(quoteCurrency){
	return {type: types.CHANGE_QUOTE_CURRENCY, quoteCurrency}
}