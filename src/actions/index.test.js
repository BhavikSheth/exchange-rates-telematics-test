import {
  EXCHANGE_RATES,
  EXCHANGE_RATES_SUCCESS,
  EXCHANGE_RATES_ERROR
} from "../constants/actionTypes";

import {
  getExchangeRates,
  getExchangeRatesSuccess,
  getExchangeRatesError
} from "./index";

describe("/actions/index", () => {
  it("should return correct payload when dispatching getExchangeRates action", () => {
    const result = getExchangeRates("2000-01-01", "GBP");
    const expectedResult = {
      type: EXCHANGE_RATES,
      date: "2000-01-01",
      currency: "GBP"
    };
    expect(result).toEqual(expectedResult);
  });

  it("should return correct payload when dispatching getExchangeRatesSuccess action", () => {
    const responsePayload = {
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
    };
    const result = getExchangeRatesSuccess(responsePayload);
    const expectedResult = {
      type: EXCHANGE_RATES_SUCCESS,
      payload: responsePayload
    };
    expect(result).toEqual(expectedResult);
  });
});

it("should return correct payload when dispatching getExchangeRatesError action", () => {
  const errorPayload = "something went horribly wrong!"
  const result = getExchangeRatesError(errorPayload);
  const expectedResult = {
    type: EXCHANGE_RATES_ERROR,
    error: errorPayload
  };
  expect(result).toEqual(expectedResult);
});