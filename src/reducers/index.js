import { combineReducers } from "redux";

import exchangeRatesReducer from "./exchangeRates";

const rootReducer = combineReducers({
  exchangeRates: exchangeRatesReducer,
});

export default rootReducer;
