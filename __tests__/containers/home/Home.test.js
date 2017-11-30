import React from "react";
import { Home } from "../../../app/containers/home/Home";

import renderer from "react-test-renderer";

describe("Home should", () => {
	xit("render without crashing", () => {
		const rendered = renderer.create(<Home />).toJSON();
		expect(rendered).toBeTruthy();
	});
});
