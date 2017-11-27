import "react-native"
import expect from 'expect';
import React from 'react';
import {render} from "react-dom";
import {shallow, configure, mount} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Settings from '../../../app/components/Settings/Settings';
import renderer from 'react-test-renderer';

configure({adapter: new Adapter()});

function setup() {
	const props = {};

	return shallow(<Settings {...props}/>);
}

describe("Settings should", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup();
	});

	it("render without crashing", () => {
		const rendered = renderer.create(<wrapper/>).toJSON();
		expect(rendered).toBeTruthy();
		expect(rendered).toMatchSnapshot();
	});

	xit("contain 1 ScrollView element", () => {
		expect(wrapper.find("ScrollView").length).toEqual(1);
	});

	it("contain 1 StatusBar element", () => {
		expect(wrapper.find("StatusBar").length).toEqual(1);
	});

	it("contain 3 ListItem elements", () => {
		expect(wrapper.find("ListItem").length).toEqual(3);
	});

	it("contain 3 Separator elements", () => {
		expect(wrapper.find("Separator").length).toEqual(3);
	});

});