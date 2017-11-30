/**
 * @author lusinabrian on 30/11/17.
 * @notes: Action creator for actionCreators
 */
import * as types from "./actionTypes";

/**
 * Navigates to currency list screen
 * @param {String} title This is the title for the screen. This will either be Base Currency or
 * Quote currency
 * @returns {Object} contains type of action for the navigation
 * */
export function navigateToCurrencyListScreenAction(title) {
	return {type: types.NAVIGATE_TO_CURRENCY_LIST_SCREEN, title};
}

/**
 * Navigates to home screen
 * @returns {Object} contains type of action for the navigation
 * */
export function navigateToHomeScreenAction() {
	return {type: types.NAVIGATE_TO_HOME_SCREEN};
}

/**
 * Navigates to settings screen
 * Dispatches an action that navigates to the settings screen
 * @returns {Object} navigates to setting screen
 * */
export function navigateToSettingsScreenAction() {
	return {type: types.NAVIGATE_TO_SETTINGS_SCREEN};
}

/**
 * Navigates to themes screen
 * @returns {Object} Type of action
 * */
export function navigateToThemesScreenAction() {
	return {type: types.NAVIGATE_TO_THEMES_SCREEN};
}