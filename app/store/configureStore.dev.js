/**
 * @author lusinabrian on 25/11/17.
 * @notes: Redux Development Store for React Native
 */
import {Platform} from "react-native";
import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "../reducers/rootReducer";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import logger from "redux-logger";
import promise from "redux-promise";
import devTools from "remote-redux-devtools";

const middleWare = applyMiddleware(promise, reduxImmutableStateInvariant(), logger);

/**
 * Configures the application store
 * */
export default function configureStore(initialState) {
	return createStore(
		rootReducer, initialState,
		compose(
			middleWare,
			devTools({
				name: Platform.OS,
				hostname: "localhost",
				port: 5678
			})
		)
	);
}