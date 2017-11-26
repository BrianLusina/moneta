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
	switch (action.type) {
	case types.AJAX_CALL_BEGIN:
		return state;
	case types.AJAX_CALL_SUCCESS:
		return state;
	case types.AJAX_CALL_FAILURE:
		return state;
	default:
		return state;
	}
}
