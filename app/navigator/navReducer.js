import Navigator from "./routes";
import { NavigationActions } from "react-navigation";
import initialState from "./initialState";
import {
	HOME_SCREEN,
	THEMES_SCREEN,
	CURRENCY_LIST_SCREEN,
	SETTINGS_SCREEN
} from "./constants";

export default function navReducer(state = initialState, action) {
	let nextState;
	switch (action.type) {
	case "Navigation/NAVIGATE":
		nextState = Navigator.router.getStateForAction(
			NavigationActions.navigate({ routeName: action.routeName }),
			state
		);
		break;
	case HOME_SCREEN:
		nextState = Navigator.router.getStateForAction(
			NavigationActions.navigate({ routeName: HOME_SCREEN }),
			state
		);
		break;
	case THEMES_SCREEN:
		nextState = Navigator.router.getStateForAction(
			NavigationActions.navigate(
				{ routeName: THEMES_SCREEN },
				{ title: "Themes" }
			),
			state
		);
		break;
	case CURRENCY_LIST_SCREEN:
		nextState = Navigator.router.getStateForAction(
			NavigationActions.navigate(
				{ routeName: CURRENCY_LIST_SCREEN },
				{ title: "Base Currency" }
			),
			state
		);
		break;
	case SETTINGS_SCREEN:
		nextState = Navigator.router.getStateForAction(
			NavigationActions.navigate({ routeName: SETTINGS_SCREEN }),
			state
		);
		break;
	default:
		nextState = Navigator.router.getStateForAction(action, state);
	}

	return nextState || state;
}
