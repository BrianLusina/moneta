import expect from "expect";
import appReducer from "../../app/reducers/appReducer";
import * as actions from "../../app/actionCreators/appActionCreator";

describe("appReducer ", () => {
	let initialState;

	beforeEach(() => {
		initialState = {
			baseCurrency: "GBP",
			quoteCurrency: "USD",
			amount: 100,
			isFetching: false,
			conversions: {
				GBP: {
					date: "",
					rates: {}
				}
			}
		};
	});

	it("should perform swapCurrencyAction interchanging base and quote currencies", () => {
		const action = actions.swapCurrencyAction();

		// ACT
		const newState = appReducer(initialState, action);

		// ASSERT
		expect(newState.baseCurrency).toEqual("USD");
		expect(newState.quoteCurrency).toEqual("GBP");

		// old state is not mutated
		expect(initialState.baseCurrency).toEqual("GBP");
		expect(initialState.quoteCurrency).toEqual("USD");
	});

	it("should changeCurrencyAmountAction updating the amount of the base currency", () => {
		const amount = 5000;

		const action = actions.changeCurrencyAmountAction(amount);

		// ACT
		const newState = appReducer(initialState, action);

		// ASSERT
		expect(newState.amount).toEqual(amount);

		// old state is not mutated
		expect(initialState.amount).toEqual(100);
	});

	xit("should perform ajaxCallSuccessAction without mutating state", () => {
		const action = actions.ajaxCallSuccess();

		// ACT
		const newState = ajaxReducer(initialState, action);

		// ASSERT
		expect(newState.isFetching).toEqual(false);
		expect(newState.callsInProgress).toEqual(0);

		// old state is not mutated
		expect(initialState.isFetching).toEqual(false);
		expect(initialState.callsInProgress).toEqual(0);
		expect(initialState.error).toEqual({});
		expect(initialState.error.message).toBeUndefined();
	});
});
