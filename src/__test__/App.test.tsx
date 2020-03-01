import React from "react";
import Adapter from "enzyme-adapter-react-15";
import { render } from "@testing-library/react";
import { mount, configure } from "enzyme";
import App from "../App";
import { navigate } from "@reach/router";
import Home from "../components/pages/Home";

configure({ adapter: new Adapter() });
test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Wecan/i);
  expect(linkElement).toBeInTheDocument();
});

describe("Renders correct routes", (): void => {
  describe("home page", (): void => {
    const wrapper = mount(<App />);
    navigate("/");

    console.log(wrapper);
  });
});
