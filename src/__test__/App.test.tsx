import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { mount, configure } from "enzyme";
import App from "../App";
import Home from "../components/pages/Home";
import Sum from "../components/pages/Sum";
import { navigate } from "@reach/router";

configure({ adapter: new Adapter() });

describe("Renders correct routes", (): void => {
  describe("home page", (): void => {
    it("should render correct component", () => {
      navigate("/");
      const wrapper = mount(<App />);

      wrapper.update();
      expect(wrapper.find(Home)).toHaveLength(1);
    });
  });
  describe("sum page", (): void => {
    it("should render correct component", () => {
      navigate("/sum");
      const wrapper = mount(<App />);

      wrapper.update();
      expect(wrapper.find(Sum)).toHaveLength(1);
    });
  });
});
