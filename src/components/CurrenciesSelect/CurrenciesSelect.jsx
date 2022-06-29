import React, { Component } from "react";
import { client } from "../../client";
import { gql } from "@apollo/client";

import { CurrContainerBlock, CurrBlock } from "./CurrenciesStyle";

export class CurrencySelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currenciesTypes: [],
    };
    this.ref = React.createRef();
  }

  getCurrinciesTypes = () => {
    client
      .query({
        query: gql`
          query {
            currencies {
              label
              symbol
            }
          }
        `,
      })
      .then(({ data: { currencies } }) => {
        let currency = currencies.map(({ symbol, label }) => ({
          symbol,
          label,
        }));
        this.setState({ currenciesTypes: currency });
      });
  };
  handleClickOutside = (event) => {
    if (this.ref.current && !this.ref.current.contains(event.target)) {
      this.props.onClickOutside && this.props.onClickOutside();
    }
  };
  componentDidMount() {
    this.getCurrinciesTypes();
    document.addEventListener("click", this.handleClickOutside, true);
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside, true);
  }
  render() {
    const { isCurrSelectOpened, setCurrentCurrency } = this.props;
    const { currenciesTypes } = this.state;
    if (!isCurrSelectOpened) return null;

    return (
      <>
        <CurrContainerBlock ref={this.ref}>
          {currenciesTypes.map((curr, index) => (
            <CurrBlock onClick={() => setCurrentCurrency(curr)} key={index}>
              <span>{curr.symbol} </span>

              <span>{curr.label} </span>
            </CurrBlock>
          ))}
        </CurrContainerBlock>
      </>
    );
  }
}

export default CurrencySelect;
