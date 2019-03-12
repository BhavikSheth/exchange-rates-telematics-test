import React from "react";
import { shallow } from "enzyme";

import ExchangeRates from "./component";
import Rates from "../../components/Rates/component";

describe("/containers/ExchangeRates/component", () => {
  let wrapper;

  let getExchangeRatesMockFunction = jest.fn();

  let props = {
    getExchangeRates: getExchangeRatesMockFunction,
    exchangeRates: {
      data: null,
      loading: false,
      error: null
    }
  };

  beforeEach(() => {
    wrapper = shallow(<ExchangeRates {...props} />);
  });

  describe("on first render", () => {
    it("should render a container", () => {
      expect(wrapper.find(".container").length).toBe(1);
    });

    it("should render a form", () => {
      expect(wrapper.find("form").length).toBe(1);
    });

    it("should render an text input with correct date", () => {
      wrapper.setState({ date: "1000-10-10" });
      expect(
        wrapper
          .find("input")
          .first()
          .props().value
      ).toBe("1000-10-10");
    });

    it("should render an text input with correct currency", () => {
      wrapper.setState({ currency: "XYZ" });
      expect(
        wrapper
          .find("input")
          .last()
          .props().value
      ).toBe("XYZ");
    });

    it("should render submit button with correct text", () => {
      expect(wrapper.find("button").text()).toBe("Get rates");
    });

    it("should render submit button with loading text", () => {
      wrapper.setProps({
        exchangeRates: {
          data: null,
          loading: true,
          error: null
        }
      });
      expect(wrapper.find("button").text()).toBe("Loading...");
    });
  });

  describe("handleInputChange()", () => {
    it("should update date in state correctly", () => {
      wrapper
        .find("input")
        .first()
        .simulate("change", { target: { value: "1234" } }, "date");
      expect(wrapper.state().date).toBe("1234");
    });

    it("should update currency in state correctly", () => {
      wrapper
        .find("input")
        .last()
        .simulate("change", { target: { value: "DEF" } }, "currency");
      expect(wrapper.state().currency).toBe("DEF");
    });
  });

  describe("renderRates()", () => {
    it("should render error with correct text when request throws an error", () => {
      wrapper.setProps({
        exchangeRates: {
          data: null,
          loading: false,
          error: "something went wrong"
        }
      });
      expect(wrapper.find(".error").text()).toBe("something went wrong");
    });

    it("should render <Rates /> component when request responds with data", () => {
      wrapper.setProps({
        exchangeRates: {
          data: {
            rates: {
              "2019-01-03": {
                MXN: 24.6239702365,
                AUD: 1.8034148286,
                HKD: 9.8418814775
              }
            },
            end_at: "2019-01-03",
            base: "GBP",
            start_at: "2019-01-03"
          },
          loading: false,
          error: null
        }
      });
      expect(wrapper.find(Rates).length).toBe(1);
    });
  });

  describe("handleSubmit()", () => {
    it("should call getExchangeRates action with correct values when form is submitted", () => {
      const preventDefaultMockFunction = jest.fn();
      wrapper.setState({ date: "5678", currency: "MNO" });
      wrapper
        .find("form")
        .simulate("submit", { preventDefault: preventDefaultMockFunction });
      expect(getExchangeRatesMockFunction).toBeCalledWith("5678", "MNO");
      expect(preventDefaultMockFunction).toBeCalled();
    });
  });
});
