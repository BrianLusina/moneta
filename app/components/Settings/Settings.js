/**
 * @author lusinabrian
 * @date 27/11/17
 * @notes Settings Screen
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Linking, StatusBar, ScrollView, Platform } from "react-native";
import ListItem from "../List/ListItem";
import Separator from "../List/Separator";
import { Ionicons } from "@expo/vector-icons";
import { navigateToThemesScreenAction } from "../../containers/navigator/actionCreators";
import { GITHUB_LINK, FIXER_IO_LINK } from "./constants";
import connectAlert from "../Alerts/connectAlert";

const ICON_COLOR = "#868686";
const ICON_SIZE = 23;
const ICON_PREFIX = Platform.OS === "ios" ? "ios" : "md";

const Settings = ({ navigation, alertWithType }) => {

	/**
	 * Handles Theme Press. This will open Theme Settings
	 * */
	const handleThemesPress =() => {
		//navigation.dispatch(navigateToThemesScreenAction());
		navigation.navigate("Themes")
	};

	/**
	 * Event handler that handles Fixer.io click event for opening Fixer.io
	 * Opens Fixer.io link
	 * */
	const handleFixerIoPress = () => {
		Linking.openURL(FIXER_IO_LINK).catch(() =>
			alertWithType(
				"error",
				"Sorry",
				"Can't open Fixer.io right now"
			)
		);
	};

	/**
	 * Handles Github link click event
	 * Opens Github link to this project
	 * */
	const handleGithubLink = () => {
		Linking.openURL(GITHUB_LINK).catch(() =>
			alertWithType("error", "Sorry", "Can't open Github right now")
		);
	};

	return (
		<ScrollView>
			<StatusBar translucent={false} barStyle={"default"} />
			<ListItem
				text={"Themes"}
				onClick={handleThemesPress}
				customIcon={
					<Ionicons
						name={`${ICON_PREFIX}-arrow-forward`}
						color={ICON_COLOR}
						size={ICON_SIZE}
					/>
				}
			/>
			<Separator />
			<ListItem
				text={"Fixer.io"}
				onClick={handleFixerIoPress}
				customIcon={
					<Ionicons
						name={`${ICON_PREFIX}-link`}
						color={ICON_COLOR}
						size={ICON_SIZE}
					/>
				}
			/>
			<Separator />
			<ListItem
				text={"Github"}
				onClick={handleGithubLink}
				customIcon={
					<Ionicons
						name={`${ICON_PREFIX}-link`}
						color={ICON_COLOR}
						size={ICON_SIZE}
					/>
				}
			/>
			<Separator />
		</ScrollView>
	);
};

Settings.propTypes = {
	navigation: PropTypes.object,
	alertWithType: PropTypes.func
};

//export default connectAlert(Settings);
export default Settings;
