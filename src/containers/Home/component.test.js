import React from "react";
import { shallow } from "enzyme";

import Home from "./component";

describe("/containers/Home/component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it("should render a 'h1' element", () => {
    expect(wrapper.find("h1").length).toBe(1);
  });
});
