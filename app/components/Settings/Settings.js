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
import { THEMES_SCREEN } from "../../config/navigationRoutes";
import { GITHUB_LINK, FIXER_IO_LINK } from "./constants";
import connectAlert from "../Alerts/connectAlert";

const ICON_COLOR = "#868686";
const ICON_SIZE = 23;
const ICON_PREFIX = Platform.OS === "ios" ? "ios" : "md";

export class Settings extends Component {
	/**
	 * Handles Theme Press. This will open Theme Settings
	 * */
	handleThemesPress() {
		this.props.navigation.navigate(THEMES_SCREEN);
	}

	/**
	 * Event handler that handles Fixer.io click event for opening Fixer.io
	 * Opens Fixer.io link
	 * */
	handleFixerIoPress() {
		this._openExternalLink(FIXER_IO_LINK);
	}

	/**
	 * Handles Github link click event
	 * Opens Github link to this project
	 * */
	handleGithubLink() {
		this._openExternalLink(GITHUB_LINK);
	}

	/**
	 * Opens External link given a url
	 * @param {String} url URL to open external link
	 */
	_openExternalLink(url) {
		Linking.openURL(url).catch(() =>
			this.props.alertWithType("error", "Sorry", "Can't open link right now")
		);
	}

	render() {
		return (
			<ScrollView>
				<StatusBar translucent={false} barStyle={"default"} />
				<ListItem
					text={"Themes"}
					onClick={this.handleThemesPress}
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
					onClick={this.handleFixerIoPress}
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
					onClick={this.handleGithubLink}
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
	}
}

Settings.propTypes = {
	navigation: PropTypes.object,
	alertWithType: PropTypes.func
};

export default connectAlert(Settings);
