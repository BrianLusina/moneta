import "react-native"
import expect from 'expect';
import React from 'react';
import {render} from "react-dom";
import { shallow, configure} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import ListItem from '../../../app/components/List/ListItem';
import renderer from 'react-test-renderer';

configure({adapter: new Adapter()});

function setup() {
	const props = {
		text : "KES",
		selected: false,
		checkMark: true,
		visible: true,
		onClick: jest.fn(),
	};

	return shallow(<ListItem {...props}/>);
}

describe("ListItem should", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup();
	});

	it("render without crashing", () => {
		const rendered = renderer.create(<wrapper/>).toJSON();
		expect(rendered).toBeTruthy();
		expect(rendered).toMatchSnapshot();
	});

	it("contain 1 TouchableHighlight element", () => {
		expect(wrapper.find("TouchableHighlight").length).toEqual(1);
		expect(wrapper.find("TouchableHighlight").props().onPress).toBeDefined();
		expect(wrapper.find("TouchableHighlight").props().underlayColor).toBeDefined();
	});

	it("contain 1 View element", () => {
		expect(wrapper.find("View").length).toEqual(1);
		expect(wrapper.find("View").props().children).toBeDefined();
	});

	it("contain 1 Text element", () => {
		expect(wrapper.find("Text").length).toEqual(1);
		expect(wrapper.find("Text").props().children).toEqual("KES");

		wrapper.setProps({
			text: "USD"
		});
		expect(wrapper.find("Text").props().children).toEqual("USD");
	});

	it("contain 1 Icon element when the selected prop is true", () => {
		expect(wrapper.find("Icon").length).toEqual(1);
		// selected prop is false, we expect Icon displayed to have no checkMark and visible
		// props
		expect(wrapper.find("Icon").props().checkMark).toBeUndefined();
		expect(wrapper.find("Icon").props().visible).toBeUndefined();

		wrapper.setProps({
			selected: true
		});

		expect(wrapper.find("Icon").props().checkMark).toBeDefined();
		expect(wrapper.find("Icon").props().checkMark).toEqual(true);
		expect(wrapper.find("Icon").props().visible).toEqual(true);

	});

});