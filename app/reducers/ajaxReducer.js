/**
 * @author lusinabrian on lusinabrian.
 * @notes: ajaxReducer reducer
 */

import * as types from "../actionTypes/ajaxActionTypes";
import initialState from "./initialState";

/**
 * ajaxReducer reducer takes current state and action and
 * returns a new state
 * @param state initial state of the application store
 * @param action function to dispatch to store
 * @return {Object} new state or initial state*/
export default function ajaxReducer(state = initialState.ajax, action) {
	let currentCalls = state.callsInProgress;
	switch (action.type) {
	case types.AJAX_CALL_BEGIN:
		return Object.assign({}, state, {
			callsInProgress: currentCalls + 1,
			isFetching: true
		});
	case types.AJAX_CALL_SUCCESS:
		return Object.assign({}, state, {
			callsInProgress: currentCalls <= 0 ? 0 : currentCalls - 1,
			isFetching: false
		});
	case types.AJAX_CALL_FAILURE:
		return Object.assign({}, state, {
			callsInProgress: currentCalls - 1,
			isFetching: false,
			error: action.error
		});
	default:
		return state;
	}
}