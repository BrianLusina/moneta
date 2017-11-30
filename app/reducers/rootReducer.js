/**
 * @author lusinabrian on 25/11/17
 * @notes: Root reducer
 */

import { combineReducers } from "redux";
import ajax from "./ajaxReducer";
import currencyList from "../containers/currencylist/reducer";
import themes from "../containers/themes/reducer";
import currencies from "../containers/home/reducer";
import nav from "../containers/navigator/reducer";

/**
 * Combines all reducers for use in the application
 * Uses short hand property names from ES6
 * */
const rootReducer = combineReducers({
	ajax,
	currencies,
	themes,
	currencyList,
	nav
});

export default rootReducer;
