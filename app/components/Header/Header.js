import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

const Header = ({ onClick }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.button} onPress={onClick}>
				<Image
					resizeMode="contain"
					style={styles.icon}
					source={require("./images/gear.png")}
				/>
			</TouchableOpacity>
		</View>
	);
};

/**
 * Prop Type validation for Header Component
 */
Header.propTypes = {
	onClick: PropTypes.func.isRequired
};

export default Header;
