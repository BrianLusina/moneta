/**
 * @author lusinabrian on 30/11/17
 * @notes: actionCreator action creator test
 */
import expect from 'expect';
import * as actions from '../../../app/containers/navigator/actionCreators';
import * as types from '../../../app/containers/navigator/actionTypes';

describe("Navigator actionCreator ", function () {

	it("should create a navigateToThemesScreen action", function () {
		const expectedAction = {type: types.NAVIGATE_TO_THEMES_SCREEN};

		const action = actions.navigateToThemesScreenAction();

		expect(action).toEqual(expectedAction);
	});

	it("should create a navigateToSettingsScreen action", function () {
		const expectedAction = {type: types.NAVIGATE_TO_SETTINGS_SCREEN};

		const action = actions.navigateToSettingsScreenAction();

		expect(action).toEqual(expectedAction);
	});

	it("should create a navigateToHomeScreen action", function () {
		const expectedAction = {type: types.NAVIGATE_TO_HOME_SCREEN};

		const action = actions.navigateToHomeScreenAction();

		expect(action).toEqual(expectedAction);
	});

	it("should create a navigateToCurrencyListScreen action", function () {
		const title = "Base Currency";
		const expectedAction = {type: types.NAVIGATE_TO_CURRENCY_LIST_SCREEN, title};

		const action = actions.navigateToCurrencyListScreenAction(title);

		expect(action).toEqual(expectedAction);
	});
});