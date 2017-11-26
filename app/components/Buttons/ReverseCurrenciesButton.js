/**
 * @author lusinabrian
 * @date 26/11/17
 * @notes
 */

import React from "react";
import {View, StyleSheet, Text} from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

const ReverseCurrenciesButton = ({ onClick }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>
			</Text>
		</View>
	)
};

/**
 * Prop validation
 */
ReverseCurrenciesButton.propTypes = {
	onClick : PropTypes.func.isRequired
}

export default ReverseCurrenciesButton;