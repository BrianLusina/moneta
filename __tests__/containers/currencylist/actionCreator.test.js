/**
 * @author lusinabrian on 27/11/17
 * @notes: actionCreator action creator test
 */
import expect from 'expect';
import * as actions from '../../../app/containers/currencylist/actionCreator';
import * as types from '../../../app/containers/currencylist/actionTypes';

describe("actionCreator ", function () {

	it("should create a fetchCurrencyListRequest action", function () {
		const expectedAction = { type: types.FETCH_CURRENCY_LIST_REQUEST};

		const action = actions.fetchCurrencyListRequestAction();

		expect(action).toEqual(expectedAction);
	});

	it("should create a fetchCurrencyListFailureAction action", function () {
		const error = {};
		const expectedAction = { type: types.FETCH_CURRENTY_LIST_FAILURE, error};

		const action = actions.fetchCurrencyListFailureAction(error);

		expect(action).toEqual(expectedAction);
	});

	it("should create a fetchCurrencyListSuccess action", function () {
		const payload = {};
		const expectedAction = { type: types.FETCH_CURRENTY_LIST_SUCCESS, payload};

		const action = actions.fetchCurrencyListSuccessAction(payload);

		expect(action).toEqual(expectedAction);
	});
});