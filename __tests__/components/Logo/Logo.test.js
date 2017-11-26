import "react-native";
import expect from "expect";
import React from "react";
import renderer from "react-test-renderer";
import { mount, shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Logo from "../../../app/components/Logo/Logo";

configure({ adapter: new Adapter() });

function setup() {
	const props = {};

	return shallow(<Logo {...props} />);
}

describe("Logo should", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup();
	});

	it("render without crashing", () => {
		const rendered = renderer.create(<wrapper />).toJSON();
		expect(rendered).toBeTruthy();
		expect(rendered).toMatchSnapshot();
	});

	it("contain 1 View element", () => {
		expect(wrapper.find("View").length).toEqual(1);
	});

	xit("contain 2 Animated.Image elements", () => {
		const element = wrapper.find("Animated.Image");
		expect(element.length).toEqual(2);
		expect(element.first().props().source).toBeDefined();
		expect(element.first().props().resizeMode).toEqual("contain");
	});

	it("contain 1 Text element", () => {
		expect(wrapper.find("Text").length).toEqual(1);
		expect(wrapper.find("Text").props().children).toEqual("Moneta");
	});
});
