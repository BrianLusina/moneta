import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import {
	View,
	Text,
	Keyboard,
	Animated,
	Platform,
	StyleSheet
} from "react-native";

const ANIMATION_DURATION = 250;

/**
 * Logo stateless component
 */
class Logo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			containerImageWidth: new Animated.Value(styles.$largeContainerSize),
			imageWidth: new Animated.Value(styles.$largeImageSize)
		};

		this.handleKeyboardHide = this.handleKeyboardHide.bind(this);
		this.handleKeyboardShow = this.handleKeyboardShow.bind(this);
	}

	/**
	 * Handler to handle keyboard when keyboard shows
	 * This will run the animations in parallel making the logo smaller when the keyboard
	 * is showing on the screen
	 */
	handleKeyboardShow() {
		Animated.parallel([
			Animated.timing(this.state.containerImageWidth, {
				toValue: styles.$smallContainerSize,
				duration: ANIMATION_DURATION
			}),
			Animated.timing(this.state.imageWidth, {
				toValue: styles.$smallImageSize,
				duration: ANIMATION_DURATION
			})
		]).start();
	}

	/**
	 * Handler to handle logo when the keyboard hides
	 */
	handleKeyboardHide() {
		Animated.parallel([
			Animated.timing(this.state.containerImageWidth, {
				toValue: styles.$largeContainerSize,
				duration: ANIMATION_DURATION
			}),
			Animated.timing(this.state.imageWidth, {
				toValue: styles.$largeImageSize,
				duration: ANIMATION_DURATION
			})
		]).start();
	}

	/**
	 * When the component unmounts, we remove the listeners
	 */
	componentWillUnmount() {
		this.keyboardDidHideListener.remove();
		this.keyboardDidShowListener.remove();
	}

	/**
	 * When the component mounts, we set the listeners to use based on the Platform OS
	 * if on Android, we use keyboardDidShow and keyboardDidHide listeners and a simple check
	 * on the Platform is run, simply setting those variables accordingly.
	 */
	componentDidMount() {
		const name = Platform.OS === "android" ? "Did" : "Will";
		this.keyboardDidShowListener = Keyboard.addListener(
			`keyboard${name}Show`,
			this.handleKeyboardShow
		);
		this.keyboardDidHideListener = Keyboard.addListener(
			`keyboard${name}Hide`,
			this.handleKeyboardHide
		);
	}

	render() {
		const containerImageStyle = [
			styles.containerImage,
			{
				width: this.state.containerImageWidth,
				height: this.state.containerImageWidth
			}
		];

		const imageStyle = [
			styles.image,
			{
				width: this.state.imageWidth
			},
			this.props.tintColor ? { tintColor: this.props.tintColor } : null
		];

		return (
			<View style={styles.container}>
				<Animated.View style={containerImageStyle}>
					<Animated.Image
						resizeMode="contain"
						style={[StyleSheet.absoluteFill, containerImageStyle]}
						source={require("./images/background.png")}
					>
						<Animated.Image
							resizeMode="contain"
							style={imageStyle}
							source={require("./images/logo.png")}
						/>
					</Animated.Image>
				</Animated.View>
				<Text style={styles.text}>Moneta</Text>
			</View>
		);
	}
}

Logo.propTypes = {
	tintColor: PropTypes.string
};

export default Logo;
