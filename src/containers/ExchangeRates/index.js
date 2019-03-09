import ExchangeRates from "./component";

import { connect } from "react-redux";
import { getExchangeRates } from "../../actions";

const mapStateToProps = state => ({
  exchangeRates: state.exchangeRates
});

const mapDispatchToProps = dispatch => ({
  getExchangeRates: (date, currency) =>
    dispatch(getExchangeRates(date, currency))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExchangeRates);
