/**
 * @author lusinabrian on 27/11/17.
 * @notes: Initial state of currency list
 *
 * @property {Boolean} isFetching whether we are fetching currency data from API
 * @property {String} currentBase currently selected base currency
 * @property {String} currentQuote currently selected quote currency
 * @property {Array} currencies the array of currencies from api
 * @property {Object} error error object encountered while fetching currencies
 */
export default {
	isFetching: false,
	currentBase: "USD",
	currentQuote:"GBP",
	currencies : [
		"AUD",
		"BGN",
		"BRL",
		"CAD",
		"CHF",
		"CNY",
		"CZK",
		"DKK",
		"EUR",
		"GBP",
		"HKD",
		"HRK",
		"HUF",
		"IDR",
		"ILS",
		"INR",
		"JPY",
		"KRW",
		"MXN",
		"MYR",
		"NOK",
		"NZD",
		"PHP",
		"PLN",
		"RON",
		"RUB",
		"SEK",
		"SGD",
		"THB",
		"TRY",
		"USD",
		"ZAR",
	],
	error: {

	}
}
