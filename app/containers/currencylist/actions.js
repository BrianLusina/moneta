/**
 * @author lusinabrian on 27/11/17.
 * @notes: Action actions that will be used by this container. This will be used to dispatch
 * actions to the redux reducer for updating the state of the store
 */
import {
	fetchCurrencyListSuccessAction, fetchCurrencyListFailureAction, fetchCurrencyListRequestAction,
	changeQuoteCurrencyAction, changeBaseCurrencyAction
} from "./actionCreator";
import {
	ajaxCallFailureAction, ajaxCallBeginAction, ajaxCallSuccess
} from "../../actionCreators/ajaxActionCreator";
import {fetchCurrencyList} from "./api";

/**
 * Action used by container to fetch currency items from API
 * This will dispatch actions to redux store and the store will update the data which will be used
 * to update the UI
 * @return {function} Returns a dispatch action that will be handled by a middleware
 * */
export function fetchCurrencies() {
	return dispatch => {
		dispatch(ajaxCallBeginAction());
		dispatch(fetchCurrencyListRequestAction());
		return fetchCurrencyList()
			.then(response => {
				dispatch(fetchCurrencyListSuccessAction(response.data));
				dispatch(ajaxCallSuccess());
			})
			.catch(error => {
				dispatch(fetchCurrencyListFailureAction(error));
				dispatch(ajaxCallFailureAction(error));
			})
	}
}

/**
 * Action to change the base currency
 * Dispatches an action for the reducer to update the redux store. Will be passed in with the
 * base currency
 * @param {String} baseCurrency
 * @returns {Function} dispatch function
 * */
export function changeBaseCurrency(baseCurrency){
	return dispatch => {
		dispatch(changeBaseCurrencyAction(baseCurrency))
	}
}

/**
 * Action to change the quote currency
 * This returns a dispatch action that is handled by redux-thunk
 * @param {String} quoteCurrency the selected quote currency
 * @returns {Function} dispatch function
 * */
export const changeQuoteCurrency = quoteCurrency => {
	return dispatch => {
		dispatch(changeQuoteCurrencyAction(quoteCurrency))
	}
};