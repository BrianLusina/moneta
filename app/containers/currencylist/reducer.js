/**
 * @author lusinabrian on lusinabrian.
 * @notes: reducer reducer
 */

import * as types from "./actionTypes";
import initialState from "./initialState";

/**
 * reducer takes current state and action and
 * returns a new state of the currency list store state. This will handle async actions dispatched
 * by the application, request, success, failure and will update the store for each passed in action
 * @param state initial state of the application store
 * @param action function to dispatch to store
 * @return {Object} new state or initial state*/
export default function reducer(state = initialState, action) {
	switch (action.type) {
	case types.FETCH_CURRENCY_LIST_REQUEST:
		return Object.assign({}, state, {
			isFetching: true
		});
	case types.FETCH_CURRENCY_LIST_SUCCESS:
		return Object.assign({}, state, {
			isFetching: false,
			currencies: action.payload
		});
	case types.FETCH_CURRENCY_LIST_FAILURE:
		return Object.assign({}, state, {
			isFetching: false,
			error: action.error
		});

	case types.CHANGE_BASE_CURRENCY:
		return Object.assign({}, state, {
			currentBase: action.baseCurrency
		});

	case types.CHANGE_QUOTE_CURRENCY:
		return {
			...state,
			currentQuote: action.quoteCurrency
		};

	default:
		return state;
	}
}
