import expect from "expect";
import reducer from "../../../app/containers/home/reducer";
import * as actions from "../../../app/containers/home/actionCreators";

describe("reducer ", () => {
	let initialState;

	beforeEach(() => {
		initialState = {
			baseCurrency: "GBP",
			quoteCurrency: "USD",
			amount: 100,
			isFetching: false,
			conversions: {
				GBP: {
					base: "USD",
					date: "2017-05-31",
					isLoadingRates : false,
					rates: {
						AUD: 1.3416,
						BGN: 1.743,
						BRL: 3.2515,
						CAD: 1.3464,
						CHF: 0.97104,
						CNY: 6.813,
						CZK: 23.547,
						DKK: 6.6302,
						GBP: 0.77858,
						HKD: 7.7908,
						HRK: 6.6068,
						HUF: 273.77,
						IDR: 13308,
						ILS: 3.5431,
						INR: 64.463,
						JPY: 110.86,
						KRW: 1118.4,
						MXN: 18.765,
						MYR: 4.281,
						NOK: 8.4117,
						NZD: 1.4071,
						PHP: 49.77,
						PLN: 3.7173,
						RON: 4.0687,
						RUB: 56.774,
						SEK: 8.6942,
						SGD: 1.3829,
						THB: 34.07,
						TRY: 3.5366,
						ZAR: 13.133,
						EUR: 0.89119,
					},
				}
			}
		};
	});

	it("should perform swapCurrencyAction interchanging base and quote currencies", () => {
		const action = actions.swapCurrencyAction();

		// ACT
		const newState = reducer(initialState, action);

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
		const newState = reducer(initialState, action);

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
