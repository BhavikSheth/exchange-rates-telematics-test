import React from "react";
import { shallow } from "enzyme";

import Layout from "./component";
import Toolbar from "../../components/Navigation/Toolbar";

describe("/hoc/Layout/component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Layout />);
  });

  it("should render a <Toolbar /> component", () => {
    expect(wrapper.find(Toolbar).length).toBe(1);
  });

  it("should render a 'main' element", () => {
    expect(wrapper.find("main").length).toBe(1);
  });
});
