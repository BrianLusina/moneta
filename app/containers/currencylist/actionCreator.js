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
	return {type: types.FETCH_CURRENTY_LIST_FAILURE, error};
}

/**
 * Fetch currency list success action is used to trigger to redux store that the async request was
 * a success and passes on the payload data to the store which will make it available in the app
 * @param {Object} payload, Payload object with information of the currency list data
 * @return {Object} Object with Type of action and payload object
 * */
export function fetchCurrencyListSuccessAction(payload) {
	return {type: types.FETCH_CURRENTY_LIST_SUCCESS, payload};
}