import "react-native"
import expect from 'expect';
import React from 'react';
import {render} from "react-dom";
import { shallow, configure} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Separator from '../../../app/components/List/Separator';
import renderer from 'react-test-renderer';

configure({adapter: new Adapter()});

function setup() {
	const props = {};

	return shallow(<Separator {...props}/>);
}

describe("Seperator should", () => {
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

});