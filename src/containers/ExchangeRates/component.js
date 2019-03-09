import React, { Component } from "react";
import { connect } from "react-redux";
import { getExchangeRates } from "../../actions";

import styles from "./styles.module.scss";

class ExchangeRates extends Component {
  state = {
    // date: "2010-01-10",
    date: "2019-01-03",
    currency: "GBP"
  };

  handleInputChange = (event, key) => {
    const value = event.target.value;
    this.setState(() => {
      return {
        [key]: value
      };
    });
  };

  renderRates = () => {
    const { exchangeRates } = this.props;
    // const exchangeRates = {
    //   data: {
    //     rates: {
    //       "2019-01-03": {
    //         MXN: 24.6239702365,
    //         AUD: 1.8034148286,
    //         HKD: 9.8418814775,
    //         RON: 5.166533794,
    //         HRK: 8.2298033484,
    //         CHF: 1.242249092,
    //         IDR: 18106.6414208522,
    //         CAD: 1.7043139339,
    //         USD: 1.2565329081,
    //         JPY: 135.3197803171,
    //         BRL: 4.740676765,
    //         PHP: 66.0809194791,
    //         CZK: 28.4380813181,
    //         NOK: 10.9745105855,
    //         INR: 88.1477544512,
    //         PLN: 4.7585038533,
    //         ISK: 147.9316148463,
    //         MYR: 5.2063956063,
    //         ZAR: 18.1757684472,
    //         ILS: 4.6976038622,
    //         GBP: 1,
    //         SGD: 1.7163832049,
    //         HUF: 356.9957480733,
    //         EUR: 1.1072725662,
    //         CNY: 8.6388298344,
    //         TRY: 6.8925502702,
    //         SEK: 11.3836477987,
    //         RUB: 86.6568119408,
    //         NZD: 1.8917751794,
    //         KRW: 1416.3898485251,
    //         THB: 40.435379573,
    //         BGN: 2.165603685,
    //         DKK: 8.2685578882
    //       }
    //     },
    //     end_at: "2019-01-03",
    //     base: "GBP",
    //     start_at: "2019-01-03"
    //   },
    //   loading: false,
    //   error: null
    // };
    if (exchangeRates.loading) return <div>Loading...</div>;
    if (exchangeRates.error) return <div>{exchangeRates.error}</div>;
    if (exchangeRates.data) {
      const date = exchangeRates.data.end_at;
      return (
        <div ckass="rates">
          <ul>
            {Object.entries(exchangeRates.data.rates[date]).map(item => (
              <li key={item[0]}>{`${item[0]}: ${item[1]}`}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    const { date, currency } = this.state;
    this.props.getExchangeRates(date, currency);
  };

  render() {
    const { date, currency } = this.state;
    // const { rates } = this.props;
    return (
      <div>
        <h1>Exchange Rates</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Date
            <input
              type="text"
              value={date}
              onChange={event => this.handleInputChange(event, "date")}
            />
          </label>
          <label>
            Currency
            <input
              type="text"
              value={currency}
              onChange={event => this.handleInputChange(event, "currency")}
            />
          </label>
          <input type="submit" value="Get rates" />
        </form>
        {this.renderRates()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    exchangeRates: state.exchangeRates
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getExchangeRates: (date, currency) =>
      dispatch(getExchangeRates(date, currency))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExchangeRates);
