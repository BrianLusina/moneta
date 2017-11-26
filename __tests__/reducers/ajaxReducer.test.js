import expect from 'expect';
import ajaxReducer from '../../app/reducers/ajaxReducer';
import * as actions from '../../app/actionCreators/ajaxActionCreator';
import initialState from "../../app/reducers/initialState";

describe("ajaxReducer ", () => {
	let intialState = {};

	beforeEach(() => {
		initialState = {
			callsInProgress: 0,
			isFetching: false,
			error : {}
		};
	});

	it("should perform ajaxCallBeginAction without mutating state", () => {

		const action = actions.ajaxCallBeginAction();

		// ACT
		const newState = ajaxReducer(initialState, action);

		// ASSERT
		expect(newState.isFetching).toEqual(true);

		// old state is not mutated
		expect(initialState.isFetching).toEqual(false)
	});

	it("should perform ajaxCallBeginAction without mutating state", () => {
		const error = {
			message: "Failed to fetch data"
		};

		const action = actions.ajaxCallFailureAction(error);

		// ACT
		const newState = ajaxReducer(initialState, action);

		// ASSERT
		expect(newState.isFetching).toEqual(false);
		expect(newState.error).toEqual(error);
		expect(newState.error.message).toBeDefined();

		// old state is not mutated
		expect(initialState.isFetching).toEqual(false);
		expect(initialState.error).toEqual({});
		expect(initialState.error.message).toBeUndefined();
	});

	it("should perform ajaxCallBeginAction without mutating state", () => {

		const action = actions.ajaxCallSuccess();

		// ACT
		const newState = ajaxReducer(initialState, action);

		// ASSERT
		expect(newState.isFetching).toEqual(false);
		expect(newState.callsInProgress).toEqual(1);

		// old state is not mutated
		expect(initialState.isFetching).toEqual(false);
		expect(initialState.callsInProgress).toEqual(0);
		expect(initialState.error).toEqual({});
		expect(initialState.error.message).toBeUndefined();
	});
});