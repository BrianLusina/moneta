import expect from "expect";
import * as actions from "../../app/actions/appActions";
import * as types from "../../app/actionTypes/appActionTypes";
import {
	changeCurrencyAmountAction,
	swapCurrencyAction
} from "../../app/actionCreators/appActionCreator";
import thunk from "redux-thunk";
import nock from "nock";
import configureMockStore from "redux-mock-store";
import axios from "axios";
import sinon from "sinon";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("appActions", () => {
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
		const expectedActions = [changeCurrencyAmountAction()];

		store.dispatch(actions.changeAmount(amount)).then(() => {
			const storeActions = store.getActions();

			// the expected actions from the store are what we expect
			expect(storeActions).toEqual(expectedActions);

			// expect that the amount has been updated;
			expect(store.getState().currencies.amount).toEqual(amount);
		});
	});
});
