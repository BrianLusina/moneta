import expect from "expect";
import reducer from "../../../app/containers/currencylist/reducer";
import * as actions from "../../../app/containers/currencylist/actionCreator";

describe("currency reducer ", () => {
	let initialState;
	beforeEach(() => {
		initialState = {
			isFetching: false,
			currentBase: "USD",
			currentQuote:"GBP",
			currencies : [
				"AUD",
				"BGN",
				"BRL",
				"CAD",
				"CHF",
				"CNY",
				"CZK",
				"DKK",
				"EUR",
				"GBP",
				"HKD",
				"HRK",
				"HUF",
				"IDR",
				"ILS",
				"INR",
				"JPY",
				"KRW",
				"MXN",
				"MYR",
				"NOK",
				"NZD",
				"PHP",
				"PLN",
				"RON",
				"RUB",
				"SEK",
				"SGD",
				"THB",
				"TRY",
				"USD",
				"ZAR",
			],
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
	});

	it("should handle changing base currency action", () => {
		const baseCurrency = "AZL";

		const action = actions.changeBaseCurrencyAction(baseCurrency);

		// ACT
		const newState = reducer(initialState, action);

		// ASSERT
		expect(newState.currentBase).toEqual(baseCurrency);

		// initial State is untouched
		expect(initialState.currentBase).toEqual("USD");
	});

	it("should handle changing quote currency", () => {
		const quoteCurrency = "CAD";

		const action = actions.changeQuoteCurrencyAction(quoteCurrency);

		// ACT
		const newState = reducer(initialState, action);

		// ASSERT
		expect(newState.currentQuote).toEqual(quoteCurrency);

		// initial State is untouched
		expect(initialState.currentQuote).toEqual("GBP");
	});


});