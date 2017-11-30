/**
 * @author lusinabrian on 30/11/17
 * @notes: appActionCreator action creator test
 */
import expect from 'expect';
import * as actions from '../../app/actionCreators/appActionCreator';
import * as types from '../../app/actionTypes/appActionTypes';

describe("appActionCreator ", function () {

	it("should create a update conversion rates action", function () {
		const currency = "CAD";
		const expectedAction = {
			type: types.UPDATE_CONVERSION_RATES,
			currency
		};

		const action = actions.updateConversionRatesAction(currency);

		expect(action).toEqual(expectedAction);
	});
});