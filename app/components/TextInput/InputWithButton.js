import React from "react";
import { View, TextInput, TouchableHighlight, Text } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles"
import color from "color";

/**
 * Input with button stateless component
 * This will handle text inputs
 * @param {function} onPress Handle press actions on the button
 * @param {String} buttonText the text to display
 * @param {Boolean} editable defaults to true, this will be used to state whether this input is editable
 */
const InputWithButton = ({onPress, buttonText, editable = true}) => {

	// get the container styles and set them to an array, if the text input is editable. Then
	// add the containerDisabled property
	const containerStyles = [styles.container];
	if(!editable){
		containerStyles.push(styles.containerDisabled);
	}

	const underlayColor = color(styles.$buttonBackgroundColorBase)
		.darken(styles.$buttonBackgroundColorModifier);

	return(
		<View style={containerStyles}>
			<TouchableHighlight 
				underlayColor={underlayColor}
				style={styles.buttonContainer}
				onPress={onPress}>
				<Text style={styles.buttonText}>{buttonText}</Text>
			</TouchableHighlight>
			<View style={styles.border}/>
			<TextInput style={styles.input}
				editable={editable}
				underlineColorAndroid="transparent"/>
		</View>
	)
};

/**
 * Prop Validation of this component
 */
InputWithButton.propTypes = {
	onPress: PropTypes.func.isRequired,
	buttonText: PropTypes.string.isRequired,
	editable: PropTypes.bool
}

export default InputWithButton;