import React from "react";
import { shallow } from "enzyme";

import RatesItem from "./component";

describe("/components/Rates/components/RatesItem/component", () => {
  let wrapper;

  let props = {
    currency: "ABC",
    rate: 1.23456789
  };

  beforeEach(() => {
    wrapper = shallow(<RatesItem {...props} />);
  });

  it("should render an li element", () => {
    expect(wrapper.find("li").length).toBe(1);
  });

  it("should render render correct currency value", () => {
    expect(wrapper.find(".currency").text()).toBe("ABC");
  });

  it("should render render correct rate value", () => {
    expect(wrapper.find(".rate").text()).toBe("1.23456789");
  });
});
