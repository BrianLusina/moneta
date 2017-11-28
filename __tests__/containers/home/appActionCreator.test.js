import expect from "expect";
import * as actions from "../../app/actionCreators/appActionCreator";
import * as types from "../../app/actionTypes/appActionTypes";

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
});
