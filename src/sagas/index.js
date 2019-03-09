import { call, put, takeEvery, all } from "redux-saga/effects";
import { EXCHANGE_RATES } from "../constants/actionTypes";

import { getExchangeRatesSuccess, getExchangeRatesError } from "../actions";

export function* fetchExchangeRates(payload) {
  const baseUrl = "https://api.exchangeratesapi.io/history";

  try {
    const { date, currency } = payload
    const response = yield call(
      fetch,
      `${baseUrl}?start_at=${date}&end_at=${date}&base=${currency}`,
      {
        "Content-Type": "application/json"
      }
    );
    const json = yield call([response, response.json]);
    if (response.ok) {
      yield put(getExchangeRatesSuccess(json));
    } else {
      throw json;
    }
  } catch (error) {
    yield put(getExchangeRatesError(error.exception));
  }
}

export function* watchFetchExchangeRates() {
  yield takeEvery(EXCHANGE_RATES, (test) => fetchExchangeRates(test));
}

export default function* rootSaga() {
  yield all([watchFetchExchangeRates()]);
}
