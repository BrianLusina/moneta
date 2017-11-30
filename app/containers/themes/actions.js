/**
 * Actual actions that will be handled by the container component
 */
import {
	changePrimaryColorAction
} from "./actionCreator";


/**
 * Action to dispatch a change primary color action to the reducer for updating the current
 * theme of the application
 * @param {String} color
 * @returns {Function} Dispatch function that the redux-thunk will use to dispatch to the reducer
 * */
export const changePrimaryColor = color => {
	return dispatch => {
		dispatch(changePrimaryColorAction(color))
	}
};