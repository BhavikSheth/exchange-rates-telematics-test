import React from "react";
import { shallow } from "enzyme";

import About from "./component";

describe("/containers/About/component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<About />);
  });

  it("should render a 'h1' element", () => {
    expect(wrapper.find("h1").length).toBe(1);
  });
});
