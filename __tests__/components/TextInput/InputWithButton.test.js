import "react-native";
import expect from 'expect';
import React from 'react';
import renderer from 'react-test-renderer';
import {mount, shallow, configure} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import InputWithButton from '../../../app/components/TextInput/InputWithButton';

configure({adapter: new Adapter()});

function setup() {
	const props = {
		onPress: jest.fn(),
		buttonText: "",
		editable: false
	};

	return shallow(<InputWithButton {...props}/>);
}

describe("InputWithButton should", () => {
	let wrapper;
	beforeEach(() => {

		jest.mock('TouchableHighlight', () => {
			const RealComponent = require.requireActual('TouchableHighlight');
			const React = require('react');
			class TouchableHighlight extends React.Component {
				render() {
					return React.createElement('TouchableHighlight', this.props, this.props.children);
				}
			}
			TouchableHighlight.propTypes = RealComponent.propTypes;
			return TouchableHighlight;
		});

		wrapper = setup();
	});

	it("render without crashing", () => {
		const rendered = renderer.create(<wrapper/>).toJSON();
		expect(rendered).toBeTruthy();
		expect(rendered).toMatchSnapshot();
	});

	it("contain 2 View element", () => {
		expect(wrapper.find("View").length).toEqual(2);
		expect(wrapper.find("View").first().props().style).toBeDefined();
	});

	it("contain 1 TouchableHighlight element", () => {
		const touchableHighlight = wrapper.find("TouchableHighlight");

		expect(touchableHighlight.length).toEqual(1);
		expect(touchableHighlight.props().onPress).toBeDefined();
	});

	it("contain 1 TextInput element", () => {
		const textInput = wrapper.find("TextInput");
		expect(textInput.length).toEqual(1);
		expect(textInput.props().editable).toBeDefined();
		expect(textInput.props().editable).toEqual(false);
		expect(textInput.props().underlineColorAndroid).toBeDefined();
		expect(textInput.props().underlineColorAndroid).toEqual("transparent");

		wrapper.setProps({
			editable: true
		});

		// test that the editable prop is set to true
		expect(wrapper.find("TextInput").props().editable).toEqual(true);
	});
});