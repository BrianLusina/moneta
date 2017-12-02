import * as types from "./actionTypes";
import {UPDATE_CONVERSION_RATES} from "../../actionTypes/appActionTypes";
import initialState from "./initialState";

/**
 * Sets the conversion from the passed in currency
 * */
const setConversions = (state, action) => {
	let conversion = {
		isLoadingRates: true,
		date: "",
		rates: {},
	};

	if (state.conversions[action.currency]) {
		conversion = state.conversions[action.currency];
	}

	return {
		...state.conversions,
		[action.currency]: conversion,
	};
};


/**
 * Reducer that takes in state of redux store and an action object. The action type will be used
 * to determine if the state of the store will be updated. This will use the type and check
 * if the type is handled by this reducer. If not, the initial state will be returned. If the
 * action type is handled by this reducer, the redux store will be updated and the
 * @param {Object} state Redux store state
 * @param {Object} action action object to handle the action
 * @returns {Object} new state of redux store
 */
export default function reducer(state = initialState, action) {
	switch (action.type) {
	case types.SWAP_CURRENCY_ACTION:
		return Object.assign({}, state, {
			baseCurrency: state.quoteCurrency,
			quoteCurrency: state.baseCurrency
		});
	case types.CHANGE_CURRENCY_AMOUNT:
		return Object.assign({}, state, {
			amount: action.amount || 0
		});
	case types.FETCH_CONVERSION_RATES_REQUEST:
		return Object.assign({}, state, {
			isFetching: true
		});

	case types.FETCH_CONVERSION_RATES_FAILURE:
		return Object.assign({}, state, {
			isFetching: false,
			error: action.error
		});

	case types.FETCH_CONVERSION_RATES_SUCCESS:
		return Object.assign({}, state, {
			isFetching: false,
			baseCurrency: action.payload.base,
			conversions: {
				...state.conversions,
				[action.payload.base]: {
					isLoadingRates: false,
					...action.payload
				}
			}
		});

	case UPDATE_CONVERSION_RATES:
		let currType = action.currType;
		let baseCurrency = state.baseCurrency;
		let quoteCurrency = state.quoteCurrency;

		if (currType === "base") {
			baseCurrency = action.currency
		} else if (currType === "quote") {
			quoteCurrency = action.currency
		}

		return Object.assign({}, state, {
			baseCurrency, quoteCurrency,
			conversions: setConversions(state, action)
		});

	default:
		return state;
	}
}
