import "react-native";
import expect from "expect";
import React from "react";
import renderer from "react-test-renderer";
import { mount, shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ReverseCurrenciesButton from "../../../app/components/Buttons/ReverseCurrenciesButton";

configure({ adapter: new Adapter() });

function setup() {
	const props = {
		text: "",
		onClick: jest.fn()
	};

	return shallow(<ReverseCurrenciesButton {...props} />);
}

describe("ReverseCurrenciesButton should", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup();
	});

	it("render without crashing", () => {
		const rendered = renderer.create(<wrapper />).toJSON();
		expect(rendered).toBeTruthy();
		expect(rendered).toMatchSnapshot();
	});

	it("contain 1 TouchableOpacity element", () => {
		expect(wrapper.find("TouchableOpacity").length).toEqual(1);
		expect(wrapper.find("TouchableOpacity").props().onPress).toBeDefined();

		wrapper
			.find("TouchableOpacity")
			.props()
			.onPress();

		expect(wrapper.find("TouchableOpacity").props().onPress).toHaveBeenCalled();
	});

	it("contain 1 View element", () => {
		expect(wrapper.find("View").length).toEqual(1);
	});

	it("contain 1 Image element", () => {
		expect(wrapper.find("Image").length).toEqual(1);
		expect(wrapper.find("Image").props().source).toBeDefined();
		expect(wrapper.find("Image").props().resizeMode).toEqual("contain");
	});

	it("contain 1 Text element", () => {
		expect(wrapper.find("Text").length).toEqual(1);
		expect(wrapper.find("Text").props().children).toEqual("");

		wrapper.setProps({
			text: "Reverse Currencies"
		});

		expect(wrapper.find("Text").props().children).toEqual("Reverse Currencies");
	});
});
