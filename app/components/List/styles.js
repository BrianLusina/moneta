/**
 * @author lusinabrian on 27/11/17.
 * @notes: Styles for list components
 */
import EStylesheet from "react-native-extended-stylesheet";
import {StyleSheet} from "react-native";

export default EStylesheet.create({
	$underlayColor: "$border",
	container: {
		display: "flex",
		marginTop: 55,
		alignItems: "center"
	},
	row: {
		paddingHorizontal: 20,
		paddingVertical: 16,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "$white"
	},
	text: {
		fontWeight: "bold",
		fontSize: 16,
		color: "$darkText"
	},
	separator: {
		marginLeft: 20,
		backgroundColor: "$border",
		flex: 1,
		height: StyleSheet.hairlineWidth
	},

	icon: {
		backgroundColor: "transparent",
		width: 30,
		height: 30,
		borderRadius: 15,
		alignItems:"center",
		justifyContent:"center"
	},

	iconVisible: {
		backgroundColor: "$primaryBlue"
	},

	checkIcon:{
		width:18
	}
});