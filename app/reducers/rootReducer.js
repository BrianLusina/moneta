/**
 * @author lusinabrian on 25/11/17
 * @notes: Root reducer
 */

import { combineReducers } from "redux";
import ajax from "./ajaxReducer";
import currency from "../containers/currencylist/reducer";
import themes from "../containers/themes/reducer";
import app from "./appReducer";
import nav from "../navigator/navReducer";
/**
 * Combines all reducers for use in the application
 * Uses short hand property names from ES6
 * */
const rootReducer = combineReducers({
	ajax,
	currency,
	themes,
	app,
	nav
});

export default rootReducer;
