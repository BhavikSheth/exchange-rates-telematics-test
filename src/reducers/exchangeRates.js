import {
  EXCHANGE_RATES,
  EXCHANGE_RATES_SUCCESS,
  EXCHANGE_RATES_ERROR
} from "../constants/actionTypes";

const initialState = {
  data: null,
  loading: false,
  error: null
};

const exchangeRatesReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXCHANGE_RATES:
      return {
        ...state,
        loading: true,
        error: null,
        data: null
      };
    case EXCHANGE_RATES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null
      };
    case EXCHANGE_RATES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        data: null
      };
    default:
      return state;
  }
};

export default exchangeRatesReducer;
