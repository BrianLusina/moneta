import expect from 'expect';
import reducer from '../../../app/containers/themes/reducer';
import * as actions from '../../../app/containers/themes/actionCreator';

describe("reducer ", () => {
	let initialState = {};

	beforeEach(() => {
		initialState = {
			themes: [],
			primaryColor: "#4F6D7A"
		}
	});

	it("should perform actions without mutating tests", () => {
		const color = "#789523";

		const action = actions.changePrimaryColorAction(color);

		// ACT
		const newState = reducer(initialState, action);

		// ASSERT
		expect(newState.primaryColor).toEqual(color);
		expect(initialState.primaryColor).toEqual("#4F6D7A");
	});
});