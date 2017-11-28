import EStylesheet from "react-native-extended-stylesheet";

export default EStylesheet.create({
	container: {
		position: "absolute",
		left: 0,
		top: 0,
		right: 0,
		"@media ios": {
			paddingTop: 20
		}
	},
	button: {
		alignSelf: "flex-end",
		paddingVertical: 5,
		paddingHorizontal: 20
	},
	icon: {
		width: 18
	}
});
