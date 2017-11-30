/**
 * Action creators that will create actions dispatched with the type of action and the payload
 * for the reducer to handle
 */
import * as types from "./actionTypes";


/**
 * Action that changes the primary color of the application
 * @param {String} color The color we dispatch to the redux store to allow for the updating of the
 * primary color
 * @returns {Object} Object with type of action and the color
 * */
export const changePrimaryColorAction = color => ({
	type: types.CHANGE_PRIMARY_COLOR, color
});
