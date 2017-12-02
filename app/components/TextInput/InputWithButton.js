import React from "react";
import { View, TextInput, TouchableHighlight, Text } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import color from "color";

/**
 * Input with button stateless component
 * This will handle text inputs
 * @param {Object} props Props passed from parent
 * This object contains the following properties:
 * 	1. onPress Handle press actions on the button
 *  2  buttonText the text to display
 *  3. editable defaults to true, this will be used to state whether this input is editable
 *  4. textColor Primary color
 */
const InputWithButton = props => {
	const { onPress, buttonText, editable = true, textColor, keyboardType} = props;

	// get the container styles and set them to an array, if the text input is editable. Then
	// add the containerDisabled property
	const containerStyles = [styles.container];
	if (!editable) {
		containerStyles.push(styles.containerDisabled);
	}

	const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
		styles.$buttonBackgroundColorModifier
	);

	const buttonTextStyles = [styles.buttonText];
	if(textColor){
		buttonTextStyles.push({ color: textColor });
	}

	return (
		<View style={containerStyles}>
			<TouchableHighlight
				underlayColor={underlayColor}
				style={styles.buttonContainer}
				onPress={onPress}>
				<Text style={buttonTextStyles}>{buttonText}</Text>
			</TouchableHighlight>
			<View style={styles.border} />
			<TextInput
				style={styles.input}
				editable={editable}
				underlineColorAndroid="transparent"
				keyboardType={keyboardType}
				{...props}
			/>
		</View>
	);
};

/**
 * Prop Validation of this component
 */
InputWithButton.propTypes = {
	onPress: PropTypes.func.isRequired,
	buttonText: PropTypes.string.isRequired,
	textColor:PropTypes.string,
	keyboardType: PropTypes.string,
	editable: PropTypes.bool
};

export default InputWithButton;
