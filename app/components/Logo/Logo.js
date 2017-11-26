import React from 'react';
import styles from "./styles";
import {View, ImageBackground, Image, Text} from "react-native";

/**
 * Logo stateless component
 */
const Logo = () => {
	return (
		<View style={styles.container}>
			<ImageBackground 
				resizeMode="contain" 
				style={styles.containerImage}
				source={require("./images/background.png")}>
				<Image 
					resizeMode="contain" 
					style={styles.image} 
					source={require("./images/logo.png")}/>
			</ImageBackground>
			<Text style={styles.text}>Moneta</Text>
		</View>
	);
};

export default Logo;