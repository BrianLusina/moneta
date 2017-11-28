import * as types from "../actionTypes/appActionTypes";
import initialState from "./initialState";

/**
 * Reducer that takes in state of redux store and an action object. The action type will be used
 * to determine if the state of the store will be updated. This will use the type and check
 * if the type is handled by this reducer. If not, the initial state will be returned. If the
 * action type is handled by this reducer, the redux store will be updated and the
 * @param {Object} state Redux store state
 * @param {Object} action action object to handle the action
 * @returns {Object} new state of redux store
 */
export default function appReducer(state = initialState.app, action) {
	switch (action.type) {
	case types.SWAP_CURRENCY_ACTION:
		return Object.assign({}, state, {
			baseCurrency: state.quoteCurrency,
			quoteCurrency: state.baseCurrency
		});
	case types.CHANGE_CURRENCY_AMOUNT:
		return Object.assign({}, state, {
			amount: action.amount || 0
		});
	default:
		return state;
	}
}
