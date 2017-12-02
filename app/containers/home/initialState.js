/**
 * @author lusinabrian on 30/11/17.
 * @notes: Initial state for home container to access from store
 * http://api.fixer.io/latest?base=USD
 */

export default {
	error: {},
	baseCurrency: "GBP",
	quoteCurrency: "USD",
	amount: 100,
	isFetching: false,
	conversions: {}
}
