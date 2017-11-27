import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import moment from "moment";

/**
 * Last Converted Component that displays the conversion of the Quote currency to the base
 * currency
 */
const LastConverted = ({
	date,
	baseCurrency,
	quoteCurrency,
	conversionRate
}) => {
	return (
		<Text style={styles.smallText}>
			1 {baseCurrency} = {conversionRate} {quoteCurrency} as of{" "}
			{moment(date).format("MMMM D, YYYY")}
		</Text>
	);
};

/**
 * Prop Validation. The PropTypes that this component will receive from parent Component
 */
LastConverted.propTypes = {
	date: PropTypes.object,
	baseCurrency: PropTypes.string,
	quoteCurrency: PropTypes.string,
	conversionRate: PropTypes.number
};

export default LastConverted;
