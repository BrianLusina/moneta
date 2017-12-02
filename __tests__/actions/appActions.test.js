import expect from "expect";
import * as actions from "../../app/actions/appActions";
import * as types from "../../app/actionTypes/appActionTypes";
import {
	updateConversionRatesAction
} from "../../app/actionCreators/appActionCreator";
import thunk from "redux-thunk";
import nock from "nock";
import configureMockStore from "redux-mock-store";
import axios from "axios";
import sinon from "sinon"

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("currency actions", () => {
	let sandbox;
	let store;

	let initialState = {
		isFetching: false,
		currencies: [],
		error: {}
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

	it("dispatches changeBaseCurrencyAction", () => {
		let currency = "CAD";
		let currType = "quote";
		const expectedActions = [updateConversionRatesAction(currency, currType)];

		store.dispatch(actions.updateConversionRates(currency, currType));
		const storeActions = store.getActions();

		// the expected actions from the store are what we expect
		expect(storeActions).toEqual(expectedActions);

		// expect that the amount has been updated;
		// expect(store.getState().currencies.amount).toEqual(baseCurrency);
	});
});
