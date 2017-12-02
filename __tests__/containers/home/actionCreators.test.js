import expect from "expect";
import * as actions from "../../../app/containers/home/actionCreators";
import * as types from "../../../app/containers/home/actionTypes";

describe("appActionCreator ", function() {
	it("should create a swapCurrenciesAction", function() {
		const expectedAction = { type: types.SWAP_CURRENCY_ACTION };

		const action = actions.swapCurrencyAction();

		expect(action).toEqual(expectedAction);
	});

	it("should create a changeCurrencyAmount action", () => {
		const amount = 5000;
		const expectedAction = { type: types.CHANGE_CURRENCY_AMOUNT, amount };

		const action = actions.changeCurrencyAmountAction(amount);

		expect(action).toEqual(expectedAction);
	});

	it("should create a fetchConversionRatesRequest action", () => {
		const expectedAction = { type: types.FETCH_CONVERSION_RATES_REQUEST };

		const action = actions.fetchConversionRatesRequestAction();

		expect(action).toEqual(expectedAction);
	});

	it("should create a fetchConversionRatesSuccess action", () => {
		const payload = {};
		const expectedAction = { type: types.FETCH_CONVERSION_RATES_SUCCESS, payload};

		const action = actions.fetchConversionRatesSuccessAction(payload);

		expect(action).toEqual(expectedAction);
	});

	it("should create a fetchConversionRatesFailure action", () => {
		const error = {};
		const expectedAction = { type: types.FETCH_CONVERSION_RATES_FAILURE, error };

		const action = actions.fetchConversionRatesFailureAction(error);

		expect(action).toEqual(expectedAction);
	});


});
