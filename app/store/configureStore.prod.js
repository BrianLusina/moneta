/**
 * @author lusinabrian on 25/11/17
 * @notes: Redux Store
 */

import {createStore, applyMiddleware} from "redux";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";


/**
 * Configures the application store
 * */
export default function configureStore(initialState) {
	return createStore(
		rootReducer, initialState, applyMiddleware(thunk)
	);
}