import React, { Component } from "react";

import Rates from "../../components/Rates";

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
    if (exchangeRates.error) return <div className={styles.error}>{exchangeRates.error}</div>;
    if (exchangeRates.data) {
      const date = exchangeRates.data.end_at;
      return (
        <Rates
          date={date}
          data={Object.entries(exchangeRates.data.rates[date])}
        />
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
    const { exchangeRates } = this.props;
    return (
      <div className={styles.container}>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={date}
            onChange={event => this.handleInputChange(event, "date")}
            placeholder="YYYY-MM-DD"
          />
          <input
            type="text"
            value={currency}
            onChange={event => this.handleInputChange(event, "currency")}
            placeholder="Currency code: e.g. GBP, EUR, USD"
          />
          <button type="submit" disabled={exchangeRates.loading}>
            {exchangeRates.loading ? "Loading..." : "Get rates"}
          </button>
        </form>
        {this.renderRates()}
      </div>
    );
  }
}

export default ExchangeRates;
