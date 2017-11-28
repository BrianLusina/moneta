/**
 * @author lusinabrian on 25/11/17.
 * @notes:
 */
export default {
	ajax: {
		callsInProgress: 0,
		isFetching: false,
		error: {}
	},
	app: {
		baseCurrency: "GBP",
		quoteCurrency: "USD",
		amount: 100,
		isFetching: false,
		conversions: {
			GBP: {
				date: "",
				rates: {}
			}
		}
	}
};
