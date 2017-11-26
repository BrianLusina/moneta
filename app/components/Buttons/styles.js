/**
 * @author lusinabrian on 26/11/17.
 * @notes: Styles for Button components
 */
import EStylesheet from "react-native-extended-stylesheet";

export default EStylesheet.create({
	container: {
		display: "flex",
		marginTop: 55,
		alignItems: "center"
	},
	wrapper: {
		flexDirection: "row",
		alignItems: "center"
	},
	icon: {},
	text: {
		fontWeight: "bold",
		fontSize: 20
	}
});
