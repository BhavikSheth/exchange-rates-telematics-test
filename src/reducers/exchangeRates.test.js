import exchangeRatesReducer from "./exchangeRates";
import {
  EXCHANGE_RATES,
  EXCHANGE_RATES_SUCCESS,
  EXCHANGE_RATES_ERROR
} from "../constants/actionTypes";

describe("reducers/exchangeRates", () => {
  // beforeEach(()=>{

  // })
  it("should return initial state", () => {
    const expectedResult = {
      data: null,
      loading: false,
      error: null
    };
    const result = exchangeRatesReducer(undefined, {});
    expect(result).toEqual(expectedResult);
  });

  it("should handle EXCHANGE_RATES", () => {
    const expectedResult = {
      data: null,
      loading: true,
      error: null
    };
    const result = exchangeRatesReducer({}, { type: EXCHANGE_RATES });
    expect(result).toEqual(expectedResult);
  });

  it("should handle EXCHANGE_RATES_SUCCESS", () => {
    const expectedResult = {
      data: { test: "some fake data" },
      loading: false,
      error: null
    };
    const result = exchangeRatesReducer(
      {},
      { type: EXCHANGE_RATES_SUCCESS, payload: { test: "some fake data" } }
    );
    expect(result).toEqual(expectedResult);
  });

  it("should handle EXCHANGE_RATES_ERROR", () => {
    const expectedResult = {
      data: null,
      loading: false,
      error: "something has gone badly and horribly wrong"
    };
    const result = exchangeRatesReducer(
      {},
      {
        type: EXCHANGE_RATES_ERROR,
        error: "something has gone badly and horribly wrong"
      }
    );
    expect(result).toEqual(expectedResult);
  });
});
