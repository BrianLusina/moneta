/**
 * @author lusinabrian on 26/11/17
 * @notes: ajaxActionCreator action creator test
 */
import expect from 'expect';
import * as actions from '../../app/actionCreators/ajaxActionCreator';
import * as types from '../../app/actionTypes/ajaxActionTypes';

describe("ajaxActionCreator ", function () {

	it("should create an ajaxCallBeginAction", function () {
		const expectedAction = {type: types.AJAX_CALL_BEGIN};

		const action = actions.ajaxCallBeginAction();

		expect(action).toEqual(expectedAction);
	});

	it("should create an ajaxCallFailureAction", function () {
		const error = {};
		const expectedAction = {type: types.AJAX_CALL_FAILURE, error};

		const action = actions.ajaxCallFailureAction(error);

		expect(action).toEqual(expectedAction);
	});

	it("should create an ajaxCallSuccessAction", function () {
		const expectedAction = {type: types.AJAX_CALL_SUCCESS};

		const action = actions.ajaxCallSuccess();

		expect(action).toEqual(expectedAction);
	});
});