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
		const expectedAction = { type: types.FETCH_CURRENCY_LIST_FAILURE, error};

		const action = actions.fetchCurrencyListFailureAction(error);

		expect(action).toEqual(expectedAction);
	});

	it("should create a fetchCurrencyListSuccess action", function () {
		const payload = {};
		const expectedAction = { type: types.FETCH_CURRENCY_LIST_SUCCESS, payload};

		const action = actions.fetchCurrencyListSuccessAction(payload);

		expect(action).toEqual(expectedAction);
	});

	it("should create a changeBaseCurrencyAction", function () {
		const baseCurrency = "GBP";
		const expectedAction = { type: types.CHANGE_BASE_CURRENCY, baseCurrency};

		const action = actions.changeBaseCurrencyAction(baseCurrency);

		expect(action).toEqual(expectedAction);
	});

	it("should create a changeQuoteCurrencyAction", function () {
		const quoteCurrency = "USD";
		const expectedAction = { type: types.CHANGE_QUOTE_CURRENCY, quoteCurrency};

		const action = actions.changeQuoteCurrencyAction(quoteCurrency);

		expect(action).toEqual(expectedAction);
	});
});