import React from "react";
import { shallow } from "enzyme";

import Toolbar from "./component";
import NavigationItems from "../NavigationItems/component";

describe("/components/Navigation/Toolbar/component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Toolbar />);
  });

  it("should render header tag", () => {
    expect(wrapper.find("header").length).toBe(1);
  });

  it("should render a nav tag", () => {
    expect(wrapper.find("nav").length).toBe(1);
  });

  it("should render <NavigationItems /> component", () => {
    expect(wrapper.find(NavigationItems).length).toBe(1);
  });
});
