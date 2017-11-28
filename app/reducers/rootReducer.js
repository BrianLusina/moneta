/**
 * @author lusinabrian on 25/11/17
 * @notes: Root reducer
 */

import { combineReducers } from "redux";
import ajax from "./ajaxReducer";
import currency from "../containers/currencylist/reducer";
import themes from "../containers/themes/reducer";
/**
 * Combines all reducers for use in the application
 * Uses short hand property names from ES6
 * */
const rootReducer = combineReducers({
	ajax,
	currency,
	themes
});

export default rootReducer;
