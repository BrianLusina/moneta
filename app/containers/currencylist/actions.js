/**
 * @author lusinabrian on 27/11/17.
 * @notes: Action actions that will be used by this container. This will be used to dispatch
 * actions to the redux reducer for updating the state of the store
 */
import {
	fetchCurrencyListSuccessAction, fetchCurrencyListFailureAction, fetchCurrencyListRequestAction
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