/**
 * @author lusinabrian on 27/11/17.
 * @notes: This will interface with the API to fetch currency data
 */
import axios from "axios";
import {CURRENCY_LIST_ENDPOINT} from "./endpoints";

/**
 * Fetches the currency list from the CurrencyList endpoint
 * This returns a {Promise} that is resolved by the caller to either reject or resolve the request
 * @return {Object} Promise
 * */
export function fetchCurrencyList() {
	return axios.get(CURRENCY_LIST_ENDPOINT)
}