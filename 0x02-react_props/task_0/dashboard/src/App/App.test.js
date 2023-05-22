import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App tests", () => {
    it("renders without crashing", () => {
        const component = shallow(<App />);

        expect(component).toBeDefined();
    });

// import App from "./App";

// test("renders learn react link", () => {
//     render(<App />);
//     const linkElement = screen.getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
});