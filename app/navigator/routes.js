/**
 * @author lusinabrian on 26/11/17.
 * @notes: Route configurations in application
 * This will set the screen navigation routes to use
 */
import { StackNavigator } from "react-navigation";
import { StatusBar } from "react-native";
import CurrencyList from "../containers/currencylist/CurrencyList";
import Home from "../containers/home/Home";
import Settings from "../components/Settings/Settings";
import Themes from "../containers/themes/Themes";


/**
 * Home navigation Stack, Will handle navigation in the Home screen
 * @property HOME_SCREEN:
 * Home Screen of application. The navigtionOptions specifies that this screen has no header
 */
const HomeNavigation = StackNavigator(
	{
		Home: {
			screen: Home,
			navigationOptions: {
				header: () => null
			}
		},
		Settings: {
			screen: Settings,
			navigationOptions: {
				headerTitle: "Settings"
			}
		},
		Themes: {
			screen: Themes,
			navigationOptions: {
				headerTitle: "Themes"
			}
		}
	},
	{
		headerMode: "screen"
	}
);

/**
 * CurrencyList Navigation Stack
 * @property CURRENCY_LIST_SCREEN will display a list of currencies
 * The navigation options will return a function that will get the navigation state to access
 * the current screen in view. In this case access to the navigation.state.params.title
 * will allow setting the title of the current navigation screen. This navigation title will
 * be set from the home screen when either the base or quote currency buttons are clicked
 */
const CurrencyListNavigation = StackNavigator({
	CURRENCY_LIST_SCREEN: {
		screen: CurrencyList,
		navigationOptions: ({ navigation }) => ({
			headerTitle: navigation.state.params.title
		})
	}
});

/**
 * Handles navigation options in Application
 * @property HOME_SCREEN: This is another navigator in the application. This navigation as defined
 * above will handle navigation from the Home Screen
 *
 * @property CURRENCY_LIST_SCREEN: Another stack navigation option
 *
 * The second object passed will handle how the stack navigator handles navigations in the app
 * The mode specifies how the navigation screen being moved to in the application will appear
 * on the scree, the default mode is to move from right to left on enter and left to righ on exit
 * the passed in mode is modal to specify that the application navigation will move from bottom to
 * top like a modal on enter and on exit from top to bottom
 */
export default StackNavigator(
	{
		Home: {
			screen: HomeNavigation
		},
		CurrencyList: {
			screen: CurrencyListNavigation
		}
	},
	{
		mode: "modal",
		cardStyle: {
			paddingTop: StatusBar.currentHeight
		},
		headerMode: "none"
	}
);
