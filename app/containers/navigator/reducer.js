import Navigator from "./routes";
import {NavigationActions} from "react-navigation";
import initialState from "./initialState";
import {
	NAVIGATE_TO_CURRENCY_LIST_SCREEN,
	NAVIGATE_TO_HOME_SCREEN,
	NAVIGATE_TO_SETTINGS_SCREEN,
	NAVIGATE_TO_THEMES_SCREEN
} from "./actionTypes";
import {CURRENCY_LIST_ROUTE, HOME_SCREEN_ROUTE, SETTINGS_SCREEN_ROUTE, THEMES_SCREEN_ROUTE} from "./routeNames";

export default function reducer(state = initialState, action) {
	let nextState;
	switch (action.type) {
	case "Navigation/NAVIGATE":
		nextState = Navigator.router.getStateForAction(
			NavigationActions.navigate({routeName: action.routeName}),
			state
		);
		break;
	case NAVIGATE_TO_HOME_SCREEN:
		nextState = Navigator.router.getStateForAction(
			NavigationActions.navigate({routeName: HOME_SCREEN_ROUTE}),
			state
		);
		break;
	case NAVIGATE_TO_THEMES_SCREEN:
		nextState = Navigator.router.getStateForAction(
			NavigationActions.navigate({
				routeName: THEMES_SCREEN_ROUTE,
				params: {
					title: "Themes"
				}
			}
			),
			state
		);
		break;
	case NAVIGATE_TO_CURRENCY_LIST_SCREEN:
		let title = action.title;
		let type = "";
		if (title === "Base Currency") {
			type = "base"
		} else if (title === "Quote Currency") {
			type = "quote"
		}
		nextState = Navigator.router.getStateForAction(
			NavigationActions.navigate({
				routeName: CURRENCY_LIST_ROUTE,
				params: {
					title, type
				}
			}),
			state
		);
		break;
	case NAVIGATE_TO_SETTINGS_SCREEN:
		nextState = Navigator.router.getStateForAction(
			NavigationActions.navigate({routeName: SETTINGS_SCREEN_ROUTE}),
			state
		);
		break;
	default:
		nextState = Navigator.router.getStateForAction(action, state);
	}

	return nextState || state;
}
