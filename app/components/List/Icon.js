/**
 * @author lusinabrian
 * @date 27/11/17
 * @notes
 */

import React from "react";
import PropTypes from "prop-types";
import {View, Image} from "react-native";
import styles from "./styles";

const Icon = ({checkMark, visible, iconBackground}) => {
	const iconStyles = [styles.icon];

	// if the icon should be visible. Render the item
	if (visible) {
		iconStyles.push(styles.iconVisible)
	}

	// if the icon background exists, then add the icon background styles
	if(iconBackground){
		iconStyles.push({backgroundColor: iconBackground});
	}

	return (
		<View style={iconStyles}>
			{
				checkMark
					?
					<Image resizeMode="contain"
						   source={require("./images/check.png")}
						   style={styles.checkIcon}/>
					:
					null
			}
		</View>
	)
};

/**
 * PropTypes this component should receive from parent component
 * checkMark will be used to tell this component whether to display a Check mark or not
 * visible will be used to tell this component whether this icon should be visible
 * */
Icon.propTypes = {
	checkMark: PropTypes.bool,
	visible: PropTypes.bool,
	iconBackground: PropTypes.string,
};

export default Icon;