/**
 * @author lusinabrian on 30/11/17
 * @notes: actionCreator action creator test
 */
import expect from 'expect';
import * as actions from '../../../app/containers/themes/actionCreator';
import * as types from '../../../app/containers/themes/actionTypes';

describe("actionCreator ", function () {

	it("should create a changePrimaryColorAction", function () {
		const color = "#4F6D7A";
		const expectedAction = {
			type: types.CHANGE_PRIMARY_COLOR,
			color
		};

		const action = actions.changePrimaryColorAction(color);

		expect(action).toEqual(expectedAction);
	});
});