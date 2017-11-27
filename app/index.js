import React from "react";
import App from "./App";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import EStyleSheet from "react-native-extended-stylesheet";

const store = configureStore();

EStyleSheet.build({
	$primaryBlue: "#4F6D7A",
	$primaryOrange:"#d57866",
	$primaryGreen:"#00BD9D",
	$primaryPurple:"#9E768F",
	$white: "#fff",
	$border: "#E2E2E2",
	$inputText: "#797979",
	$lightGray: "#F0F0F0",
	$darkText:"#343434",
});

export default () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};
