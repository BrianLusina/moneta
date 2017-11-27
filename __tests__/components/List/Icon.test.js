import "react-native"
import expect from 'expect';
import React from 'react';
import {render} from "react-dom";
import {mount, shallow, configure} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Icon from '../../../app/components/List/Icon';
import renderer from 'react-test-renderer';

configure({adapter: new Adapter()});

function setup() {
	const props = {
		checkMark: true,
		visible: true,
	};

	return shallow(<Icon {...props}/>);
}

describe("Icon should", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup();
	});

	it("render without crashing", () => {
		const rendered = renderer.create(<wrapper/>).toJSON();
		expect(rendered).toBeTruthy();
		expect(rendered).toMatchSnapshot();
	});

	it("contain 1 View element", () => {
		expect(wrapper.find("View").length).toEqual(1);
	});

	it("contain 1 Image element when checkMark is true", () => {
		wrapper.setProps({
			checkMark: true
		});

		expect(wrapper.find("Image").length).toEqual(1);
		expect(wrapper.find("Image").props().resizeMode).toEqual("contain");
		expect(wrapper.find("Image").props().source).toBeDefined();
	});

	it("contain 0 Image elements when checkMark is false", () => {
		wrapper.setProps({
			checkMark: false
		});

		expect(wrapper.find("Image").length).toEqual(0);
	});
});