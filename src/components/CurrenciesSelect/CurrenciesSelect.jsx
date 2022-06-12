import React, { Component } from "react";
import { client } from "../../client";
import { gql } from "@apollo/client";

import arrowImg from "../../images/ArrowCurrImg.svg";
import {
  NavbarDiv,
  Left,
  Center,
  Right,
  Category,
  Image,
  CurrencySign,
  ArrowImgUp,
  ArrowImgDown,
  Currency,
  CurrenciesContainer,
  CartCounterAndImg,
  Counter,
} from "../Navbar/NavbarStyle";
import { CurrContainerBlock, CurrBlock } from "./CurrenciesStyle";

export class CurrencySelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currenciesTypes: [],
    };
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
  componentDidMount() {
    this.getCurrinciesTypes();
  }
  render() {
    const { isCurrSelectOpened, currentCurrency, setCurrentCurrency } =
      this.props;
    const { currenciesTypes } = this.state;
    return (
      <>
        <CurrContainerBlock>
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
