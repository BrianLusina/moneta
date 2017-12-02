import expect from "expect";
import * as actions from "../../../app/containers/themes/actions";
import {changePrimaryColorAction} from "../../../app/containers/themes/actionCreator";
import thunk from "redux-thunk";
import nock from "nock";
import configureMockStore from "redux-mock-store";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("actions", () => {
	let store;
	let initialState = {
		themes: [
			{
				name: "Blue",
				color: "#4F6D7A",
			},
			{
				name: "Orange",
				color: "#d57866",
			},
			{
				name: "Green",
				color: "#00BD9D",
			},
			{
				name: "Purple",
				color: "#9E768F",
			}
		],
		primaryColor: "#4F6D7A"
	};

	beforeEach(() => {
		store = mockStore(initialState);
	});

	/**
	 * After each test, clean up the test environment using nock
	 */
	afterEach(() => {
		nock.cleanAll();
		store = mockStore(initialState);
	});

	it("dispatches swapCurrencyAction to reducer to update redux store", () => {
		const color = "#789543";
		const expectedActions = [changePrimaryColorAction(color)];

		store.dispatch(actions.changePrimaryColor(color));
		const storeActions = store.getActions();

		// assert that the actions in the store are what we expect
		expect(storeActions).toEqual(expectedActions);

		// assert that the store was updated
		// expect(store.getState().primaryColor).toEqual(color);
	});
});
