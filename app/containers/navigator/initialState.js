import { NavigationActions } from "react-navigation";
import Navigator from "./routes";

export default Navigator.router.getStateForAction(NavigationActions.init());
