import expect from "expect";
import * as actions from "../../../app/containers/home/actions";
import {
	changeCurrencyAmountAction,
	fetchConversionRatesRequestAction,
	fetchConversionRatesSuccessAction,
	swapCurrencyAction
} from "../../../app/containers/home/actionCreators";
import thunk from "redux-thunk";
import nock from "nock";
import configureMockStore from "redux-mock-store";
import axios from "axios";
import sinon from "sinon";
import {ajaxCallBeginAction, ajaxCallSuccess} from "../../../app/actionCreators/ajaxActionCreator";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("actions", () => {
	let sandbox;
	let store;
	let initialState = {
		ajax: {
			callsInProgress: 0,
			isFetching: false,
			error: {}
		},
		currencies: {
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
		}
	};

	beforeEach(() => {
		sandbox = sinon.sandbox.create();
		store = mockStore(initialState);
	});

	/**
	 * After each test, clean up the test environment using nock
	 */
	afterEach(() => {
		sandbox.restore();
		nock.cleanAll();
		store = mockStore(initialState);
	});

	it("dispatches fetchActions to get currency data for the base currency", (done) => {
		const baseCurrency = "USD";
		const payload = {};

		const expectedActions = [
			ajaxCallBeginAction(), fetchConversionRatesRequestAction(),
			ajaxCallSuccess(), fetchConversionRatesSuccessAction(payload)
		];

		const resolved = new Promise((resolve, reject) => resolve({
			data: payload
		}));

		sandbox.stub(axios, "get").returns(resolved);

		store.dispatch(actions.fetchLatestBaseConversionRates(baseCurrency))
			.then(() => {
				const storeActions = store.getActions();
				expect(storeActions).toEqual(expectedActions);
			})
	});

	it("dispatches swapCurrencyAction to reducer to update redux store", () => {
		const expectedActions = [swapCurrencyAction()];

		store.dispatch(actions.swapCurrency()).then(() => {
			const storeActions = store.getActions();

			// assert that the actions in the store are what we expect
			expect(storeActions).toEqual(expectedActions);

			// asser that the base and quote currencies were swapped
			expect(store.getState().currencies.baseCurrency).toEqual("USD");
			expect(store.getState().currencies.quoteCurrency).toEqual("GBP");
		});
	});

	it("dispatches changeAmountAction to reducer to update amount in redux store", () => {
		let amount = 400;
		const expectedActions = [changeCurrencyAmountAction(amount)];

		store.dispatch(actions.changeAmount(amount)).then(() => {
			const storeActions = store.getActions();

			// the expected actions from the store are what we expect
			expect(storeActions).toEqual(expectedActions);

			// expect that the amount has been updated;
			expect(store.getState().currencies.amount).toEqual(amount);
		});
	});
});
