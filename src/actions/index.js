import {
  EXCHANGE_RATES,
  EXCHANGE_RATES_SUCCESS,
  EXCHANGE_RATES_ERROR
} from "../constants/actionTypes";

export const getExchangeRates = (date, currency) => {
  return {
    type: EXCHANGE_RATES,
    date,
    currency
  };
};

export const getExchangeRatesSuccess = (payload) => {
  return {
    type: EXCHANGE_RATES_SUCCESS,
    payload
  }
}

export const getExchangeRatesError = (error) => {
  return {
    type: EXCHANGE_RATES_ERROR,
    error
  }
}
