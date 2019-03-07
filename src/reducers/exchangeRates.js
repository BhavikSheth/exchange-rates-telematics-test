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
        loading: true
      };
    case EXCHANGE_RATES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case EXCHANGE_RATES_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export default exchangeRatesReducer;
