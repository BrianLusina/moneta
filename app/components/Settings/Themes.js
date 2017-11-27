/**
 * @author lusinabrian
 * @date 27/11/17
 * @notes
 */

import React, {Component} from "react";
import {ScrollView, StatusBar, View} from "react-native";
import ListItem from "../List/ListItem";
import Separator from "../List/Separator";
import styles from "./styles";


class Themes extends Component {

	/**
	 * Creates the theme list
	 * */
	createThemeList() {
		const themeOptions = [
			{
				text: "blue", color: styles.$blue
			},
			{
				text: "orange", color: styles.$orange
			},
			{
				text: "green", color: styles.$green
			},
			{
				text: "purple", color: styles.$purple
			},
		];

		return themeOptions.map(theme => {
			return (
				<View>
					<ListItem text={theme.text}
							  onClick={() => this.handleThemePress(theme.color)}
							  selected={false}
							  checkMark={false}
							  iconBackground={theme.color}
					/>
					<Separator/>
				</View>
			)
		})
	}

	/**
	 * Handles theme press on an item. This will set the theme of the application when clicked
	 * @param {String} color The color theme of the list item selected
	 * */
	handleThemePress(color) {

	}

	render() {
		return (
			<ScrollView>
				<StatusBar translucent={false} barSyle={"default"}/>
				{this.createThemeList()}
			</ScrollView>
		)
	}
}

export default Themes;