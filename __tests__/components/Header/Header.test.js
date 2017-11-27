import "react-native";
import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import Header from "../../../app/components/Header/Header";

configure({ adapter: new Adapter() });

const setup = () => {
	const props = {
		onClick: jest.fn()
	};

	return shallow(<Header {...props} />);
};

describe("Header should", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup();
	});

	it("render without a crash", () => {
		const rendered = renderer.create(<wrapper />).toTree();
		expect(rendered).toBeTruthy();
		expect(rendered).toMatchSnapshot();
	});

	it("contain 1 View element", () => {
		expect(wrapper.find("View").length).toEqual(1);
	});

	it("contain a TouchableOpacity with an onPress Prop", () => {
		expect(wrapper.find("TouchableOpacity").length).toEqual(1);
		expect(wrapper.find("TouchableOpacity").props().onPress).toBeTruthy();

		wrapper
			.find("TouchableOpacity")
			.props()
			.onPress();

		expect(wrapper.find("TouchableOpacity").props().onPress).toHaveBeenCalled();
	});

	it("contain an Image element with source", () => {
		expect(wrapper.find("Image").length).toEqual(1);
		expect(wrapper.find("Image").props().resizeMode).toEqual("contain");
		expect(wrapper.find("Image").props().source).toBeDefined();
	});
});
