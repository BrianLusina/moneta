/**
 * @author lusinabrian on 25/11/17.
 * @notes: Action creator for ajaxActionCreator
 */
import * as types from "../actionTypes/ajaxActionTypes";

/**
 * Ajax call begin action. This is triggered and dispatched when an ajax call begins. The store
 * will be updated with a isFetching object being set to True, which will trigger the application
 * to display a loading progress bar
 * @return {Object} with type of action for the reducer to handle and update the state of the store
 * */
export function ajaxCallBeginAction() {
	return {type: types.AJAX_CALL_BEGIN};
}

/**
 * @function
 * Ajax call failure action. This is dispatched when an ajax call fails.
 * @param {Object} error , Error object with information of failure
 * @return {Object} With type of action for the reducer to resolve and the erro object for the
 * reducer to update the store with
 * */
export function ajaxCallFailureAction(error) {
	return {type: types.AJAX_CALL_FAILURE, error};
}

/**
 * Action that is triggered when an AJAX call is a success
 * @return {Object} type of action, a success action, for the reducer to update the state of
 * the store
 * */
export function ajaxCallSuccess() {
	return {type: types.AJAX_CALL_SUCCESS};
}