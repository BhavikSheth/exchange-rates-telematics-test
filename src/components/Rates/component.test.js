import React from "react";
import { shallow } from "enzyme";

import Rates from "./component";
import RatesItem from "./components/RatesItem";

describe("/components/Rates/component", () => {
  let wrapper;
  let data = [["Currency A", 10], ["Currency B", 20], ["Currency C", 30]];

  beforeEach(() => {
    wrapper = shallow(<Rates data={data} />);
  });

  it("should render ul element", () => {
    expect(wrapper.find("ul").length).toBe(1);
  });

  it("should render correct number of <RatesItem /> component", () => {
    expect(wrapper.find(RatesItem).length).toBe(3);
  });

  it("should render <RatesItem /> component with correct props", () => {
    expect(wrapper.find(RatesItem).first().props()).toEqual({
      currency: "Currency A",
      rate: 10
    });

    expect(wrapper.find(RatesItem).at(1).props()).toEqual({
      currency: "Currency B",
      rate: 20
    });

    expect(wrapper.find(RatesItem).last().props()).toEqual({
      currency: "Currency C",
      rate: 30
    });
  });
});
