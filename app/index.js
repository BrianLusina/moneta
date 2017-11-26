import React from "react";
import App from "./App";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import EStyleSheet from "react-native-extended-stylesheet";

const store = configureStore();

EStyleSheet.build({
	$primaryBlue: "#4F6D7A",
	$white: "#fff"
});

export default () => {
	return (
		<Provider store={store}>
			<App/>
		</Provider>
	)
}