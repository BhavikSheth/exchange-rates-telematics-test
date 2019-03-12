import React from "react";
import { shallow } from "enzyme";

import NavigationItems from "./component";
import NavigationItem from "./components/NavigationItem";

describe("/components/Navigation/NavigationItems/component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });

  it("should render a ul element", () => {
    expect(wrapper.find("ul").length).toBe(1);
  });

  it("should render a 'home' navigation item", () => {
    const homeNavigation = wrapper
      .find(NavigationItem)
      .first()
      .props();
    const expectedProps = {
      link: "/",
      exact: true,
      children: "Home"
    };
    expect(homeNavigation).toEqual(expectedProps);
  });

  it("should render an 'about' navigation item", () => {
    const aboutNavigation = wrapper
      .find(NavigationItem)
      .at(1)
      .props();
    const expectedProps = {
      link: "/about",
      exact: true,
      children: "About"
    };
    expect(aboutNavigation).toEqual(expectedProps);
  });

  it("should render an 'exchange rate' navigation item", () => {
    const aboutNavigation = wrapper
      .find(NavigationItem)
      .last()
      .props();
    const expectedProps = {
      link: "/exchange-rates",
      exact: true,
      children: "Exchange Rates"
    };
    expect(aboutNavigation).toEqual(expectedProps);
  });
});
