import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { mount, configure } from "enzyme";
import App from "../App";
import Home from "../components/pages/Home";
import Sum from "../components/pages/Sum";
import Multiply from "../components/pages/Sum";
import Prime from "../components/pages/Prime";
import Fibonacci from "../components/pages/Fibo";
import { navigate } from "@reach/router";

configure({ adapter: new Adapter() });

describe("Renders correct routes", (): void => {
  const wrapper = mount(<App />);
  describe("home page", (): void => {
    it("should render correct component", async (): Promise<void> => {
      await navigate("/");

      wrapper.update();
      expect(wrapper.find(Home)).toHaveLength(1);
    });
  });
  describe("sum page", (): void => {
    it("should render correct component", async (): Promise<void> => {
      await navigate("/sum");

      wrapper.update();
      expect(wrapper.find(Sum)).toHaveLength(1);
    });
  });
  describe("multiply page", (): void => {
    it("should render correct component", async (): Promise<void> => {
      await navigate("/multiply");

      expect(wrapper.find(Multiply)).toHaveLength(1);
    });
  });
  describe("prime page", (): void => {
    it("should render correct component", async (): Promise<void> => {
      await navigate("/prime");

      wrapper.update();
      expect(wrapper.find(Prime)).toHaveLength(1);
    });
  });
  describe("fibonacci page", (): void => {
    it("should render correct component", async (): Promise<void> => {
      await navigate("/fibonacci");

      wrapper.update();
      expect(wrapper.find(Fibonacci)).toHaveLength(1);
    });
  });
});
