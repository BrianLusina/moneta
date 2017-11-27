import expect from "expect";
import * as actions from "../../../app/containers/currencylist/actions";
import * as types from "../../../app/containers/currencylist/actionTypes";
import {
	fetchCurrencyListRequestAction,
	fetchCurrencyListFailureAction,
	fetchCurrencyListSuccessAction
} from "../../../app/containers/currencylist/actionCreator";
import {
	ajaxCallBeginAction,
	ajaxCallSuccess,
	ajaxCallFailureAction
} from "../../../app/actionCreators/ajaxActionCreator";
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

	/**
	 * callback to tell nock we are done with the async flow
	 */
	it("should handle success actions", (done) => {
		const payload = {
			data: [1, 2, 3, 4, 5, 6, 67, 8, 9]
		};

		const expectedActions = [
			ajaxCallBeginAction(), fetchCurrencyListRequestAction(),
			fetchCurrencyListSuccessAction(payload), ajaxCallSuccess()
		];

		const resolved = new Promise((resolved, rejected) => resolved({
			data: payload
		}));

		sandbox.stub(axios, "get").returns(resolved);

		store.dispatch(actions.fetchCurrencies()).then(() => {
			const storeActions = store.getActions();

			// assert that the actions in the store are what we expect
			expect(storeActions).toEqual(expectedActions);

			//expect(storeActions[0].type).toEqual(types.BEGIN_AJAX_CALL);
			//expect(storeActions[1].type).toEqual(types.LOAD_AUTHORS_SUCCESS);

			// called last to signify that we are done with async
			done();
		});
	});

	it("should handle error actions", (done) => {
		const error = {
			message: "failed to fetch resources"
		};

		// they will be dispatched
		const expectedActions = [
			ajaxCallBeginAction(), fetchCurrencyListRequestAction(),
			fetchCurrencyListFailureAction(error), ajaxCallFailureAction(error)
		];

		const rejected = new Promise((resolved, rejected) => rejected(error));

		sandbox.stub(axios, "get").returns(rejected);

		store.dispatch(actions.fetchCurrencies()).then(() => {
			const storeActions = store.getActions();

			// assert that the actions in the store are what we expect
			expect(storeActions).toEqual(expectedActions);

			//expect(storeActions[0].type).toEqual(types.BEGIN_AJAX_CALL);
			//expect(storeActions[1].type).toEqual(types.LOAD_AUTHORS_SUCCESS);

			// called last to signify that we are done with async
			done();
		});
	});

});
