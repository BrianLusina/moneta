/**
 * @author lusinabrian on 25/11/17.
 * @notes: Action creator for ajaxActionCreator
 */
import * as types from "../actionTypes/ajaxActionTypes";

export function ajaxCallBeginAction() {
	return {type: types.AJAX_CALL_BEGIN};
}

export function ajaxCallFailureAction() {
	return {type: types.AJAX_CALL_FAILURE};
}

export function ajaxCallSuccess() {
	return {type: types.AJAX_CALL_SUCCESS};
}