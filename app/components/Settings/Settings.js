/**
 * @author lusinabrian
 * @date 27/11/17
 * @notes Settings Screen
 */

import React, { Component } from "react";
import {StatusBar, ScrollView, Platform} from "react-native";
import ListItem from "../List/ListItem";
import Separator from "../List/Separator";
import {Ionicons} from "@expo/vector-icons"

const ICON_COLOR = "#868686" ;
const ICON_SIZE = 23;
const ICON_PREFIX = Platform.OS === "ios" ? "ios" : "md";


class Settings extends Component {

	/**
	 * Handles Theme Press. This will open Theme Settings
	 * */
	handleThemesPress(){

	}

	/**
	 * Event handler that handles Fixer.io click event for opening Fixer.io
	 * Opens Fixer.io link
	 * */
	handleFixerIoPress(){

	}

	/**
	 * Handles Github link click event
	 * Opens Github link to this project
	 * */
	handleGithubLink(){

	}

	render() {
		return (
			<ScrollView>
				<StatusBar translucent={false} barStyle={"default"}/>
				<ListItem
					text={"Themes"} onClick={this.handleThemesPress}
					customIcon={
						<Ionicons name={`${ICON_PREFIX}-arrow-forward`} color={ICON_COLOR} size={ICON_SIZE}/>}
				/>
				<Separator/>
				<ListItem
					text={"Fixer.io"} onClick={this.handleFixerIoPress}
					customIcon={
						<Ionicons name={`${ICON_PREFIX}-link`} color={ICON_COLOR} size={ICON_SIZE}/>}
				/>
				<Separator/>
				<ListItem
					text={"Github"} onClick={this.handleGithubLink}
					customIcon={
						<Ionicons name={`${ICON_PREFIX}-link`} color={ICON_COLOR} size={ICON_SIZE}/>}
				/>
				<Separator/>
			</ScrollView>
		)
	}
}

export default Settings;