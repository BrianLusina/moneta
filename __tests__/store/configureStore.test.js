import expect from 'expect';
import {
	createStore
} from 'redux';
import rootReducer from '../../app/reducers/rootReducer';
import initialState from '../../app/reducers/initialState';
import * as ajaxActions from '../../app/actionCreators/ajaxActionCreator';


describe("Redux store", function () {
	it("should handle given action", function () {

		//arrange
		const store = createStore(rootReducer, initialState);

		// act        
		// TODO: creat actions
		// const actions = actions.
		//store.dispatch(action);

		// assert

		// TODO: set the expected value
		// const expectedValue = 
	});
});