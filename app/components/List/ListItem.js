/**
 * @author lusinabrian
 * @date 27/11/17
 * @notes List item component
 */

import React from "react";
import PropTypes from "prop-types";
import {View, Text, TouchableHighlight} from "react-native";
import styles from "./styles";
import Icon from "./Icon";

/**
 * ListItem component to be used in FlatList components to render individual data items
 * @param {String} text if the currency name to display
 * @param {Boolean} selected PropType specifying whether the current list Item has been clicked
 * @param {Boolean} checkMark PropType specifying whether the current ListItem should display Tick
 * @param {Boolean} visible Whether the checkmark should be visible
 * @param {Function} onClick Handler that will be called when this list item is clicked
 * */
const ListItem = ({text, selected = false, checkMark=true, visible=true, onClick}) => {
	return (
		<TouchableHighlight onPress={onClick} underlayColor={styles.$underlayColor}>
			<View style={styles.row}>
				<Text style={styles.text}>{text}</Text>
				{
					selected
						?
						<Icon checkMark={checkMark} visible={visible}/>
						:
						<Icon />
				}
			</View>
		</TouchableHighlight>
	)
};

/**
 * Prop Validation
 * */
ListItem.propTypes = {
	text : PropTypes.string.isRequired,
	selected: PropTypes.bool.isRequired,
	checkMark: PropTypes.bool,
	visible: PropTypes.bool,
	onClick: PropTypes.func.isRequired,
};

export default ListItem;