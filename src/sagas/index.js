import {
  call,
  put,
  takeEvery,
  all
} from "redux-saga/effects";
import {
  EXCHANGE_RATES,
} from "../constants/actionTypes";

import { getExchangeRatesSuccess, getExchangeRatesError } from "../actions";

export function* fetchExchangeRates(dispatch) {
  try {
    const response = yield call(fetch, "http://data.fixer.io/api/latest?access_key=98a93e9722871810f3a8c1ca3cf6d550&format=1", {
      "Content-Type": "application/json"
    });
    const json = yield call([response, response.json]);
    yield put(getExchangeRatesSuccess(json));
  } catch (error) {
    yield put(getExchangeRatesError(error));
  }
}

export function* watchFetchExchangeRates() {
  yield takeEvery(EXCHANGE_RATES, fetchExchangeRates);
}

export default function* rootSaga() {
  yield all([watchFetchExchangeRates()]);
}
