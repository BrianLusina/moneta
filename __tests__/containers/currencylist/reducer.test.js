import expect from "expect";
import reducer from "../../../app/containers/currencylist/reducer";
import * as actions from "../../../app/containers/currencylist/actionCreator";

describe("currency reducer ", () => {
	let initialState;
	beforeEach(() => {
		initialState = {
			isFetching: false,
			currencies: [],
			error: {}
		}
	});

	it("should handle request action updating isFetching value", () => {
		const action = actions.fetchCurrencyListRequestAction();

		// ACT
		const newState = reducer(initialState, action);

		// ASSERT
		expect(newState.isFetching).toEqual(true);

		expect(initialState.isFetching).toEqual(false);
	});

	it("should handle failure action updating isFetching and error values", () => {
		const error = {
			message: "Failed to fetch currencies"
		};

		const action = actions.fetchCurrencyListFailureAction(error);

		// ACT
		const newState = reducer(initialState, action);

		// ASSERT
		expect(newState.isFetching).toBe(false);
		expect(newState.error).toEqual(error);

		// initial State is untouched
		expect(initialState.error).toEqual({});
	});

	it("should handle success action updating isFetching and currency list value", () => {
		const payload = {
			data: [1, 2, 3, 4, 5, 6, 7],
			message: "Success",
			status: true,
		};

		const action = actions.fetchCurrencyListSuccessAction(payload.data);

		// ACT
		const newState = reducer(initialState, action);

		// ASSERT
		expect(newState.isFetching).toBe(false);
		expect(newState.currencies).toEqual(payload.data);
		expect(newState.error).toEqual({});

		// initial State is untouched
		expect(initialState.error).toEqual({});
		expect(initialState.currencies).toEqual([]);
		expect(initialState.currencies.length).toEqual(0);
	});
});