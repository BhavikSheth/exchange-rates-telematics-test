import React, { Component } from "react";
import { connect } from "react-redux";
import { getExchangeRates } from "../../actions";

class ExchangeRates extends Component {
  state = {
    date: "",
    currency: ""
  };

  handleInputChange = (event, key) => {
    const value = event.target.value
    this.setState(() => {
      return {
        [key]: value
      };
    });
  };

  renderRates = () => {
    const { rates } = this.props;
    if (rates.loading) return <div>Loading...</div>;
    if (rates.error) return <div>{rates.error}</div>;
    return (
      <div ckass="rates">
        <ul>
          {rates.data.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    );
  };

  handleSubmit = event => {
    event.preventDefault();
    const { date, currency } = this.state;
    this.props.getExchangeRates(date, currency);
  };

  render() {
    const { date, currency } = this.state;
    return (
      <div>
        <h1>Exchange Rates</h1>
        <input
          type="text"
          value={date}
          onChange={event => this.handleInputChange(event, "date")}
        />
        <input
          type="text"
          value={currency}
          onChange={event => this.handleInputChange(event, "currency")}
        />
        <input type="submit" value="Submit" onClick={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    rates: state.rates
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getExchangeRates: () => dispatch(getExchangeRates())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExchangeRates);
