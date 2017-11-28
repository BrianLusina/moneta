/**
 * @author lusinabrian
 * @notes: Themes reducer that will update the state of the store based on the action types
 * received from action creators.
 */
import * as types from "./actionTypes";
import initialState from "./initialState";

/**
 * @function
 * Reducer function that handles updating the state of the redux store. It takes the current
 * state of the store and an action and updates the state of the store based on the action type
 * dispatched to it. No mutation of state will take place, instead a new object is created.
 * If the type of action received is not handled by this reducer then the initial state is returned
 * @param {Object} state state of the redux store. This will default to the initial state of
 * the application
 * @param {Object} action Action that will contain the payload information used to update the
 * redux store with new values
 * @returns {Object} new state or initial state based on the action type received
 */
const reducer = (state = initialState, action) => {
	switch (action.type) {
	case types.FETCH_CURRENT_THEME:
		return Object.assign({}, state, {});

	default:
		return state;
	}
};

export default reducer;
