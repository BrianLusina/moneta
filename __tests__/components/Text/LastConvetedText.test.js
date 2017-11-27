import "react-native";
import React from "react";
import expect from "expect";
import LastConvetedText from "../../../app/components/Text/LastConvertedText";
import renderer from "react-test-renderer";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import moment from "moment";

configure({ adapter: new Adapter() });

const setup = () => {
	const props = {
		date: new Date(),
		baseCurrency: "USD",
		quoteCurrency: "GBP",
		conversionRate: Math.random()
	};

	return shallow(<LastConvetedText {...props} />);
};

describe("LastConvertedText should", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = setup();
	});

	it("render without crashing", () => {
		const rendered = renderer.create(<wrapper />).toJSON();
		expect(rendered).toBeTruthy();
		expect(rendered).toMatchSnapshot();
	});

	it("contain 1 Text element", () => {
		expect(wrapper.find("Text").length).toEqual(1);
	});

	it("contain Text element with passed in props rendered", () => {
		const children = wrapper.props().children;

		expect(children).toContain("GBP");
		expect(children).toContain("USD");
		expect(children).toContain(moment(new Date()).format("MMMM D, YYYY"));
		expect(children).toContain(" as of");
	});
});
