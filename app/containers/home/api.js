/**
 * @author lusinabrian on 03/12/17.
 * @notes: Makes api calls to fixer.io
 */
import axios from "axios";
import { BASE_URL } from "./constants";

/**
 * Gets the latest conversion rates for the base currency
 * @param {String} currency. The base currency
 * @returns {Promise} A promise that the caller has to resolve*/
export function getLatestBaseConversionRates(currency) {
	return axios.get(`${BASE_URL}latest?base=${currency}`)
}
