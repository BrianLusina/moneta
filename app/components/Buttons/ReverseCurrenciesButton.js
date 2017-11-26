/**
 * @author lusinabrian
 * @date 26/11/17
 * @notes
 */

import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

const ReverseCurrenciesButton = ({ onClick, text }) => {
	return (
		<TouchableOpacity onPress={onClick} style={styles.container}>
			<View style={styles.wrapper}>
				<Image
					resizeMode="contain"
					style={styles.icon}
					source={require("./images/icon.png")}
				/>
				<Text style={styles.text}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
};

/**
 * Prop validation
 */
ReverseCurrenciesButton.propTypes = {
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};

export default ReverseCurrenciesButton;
