import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  ProductContainer,
  Name,
  Price,
  Img,
  OutOfStock,
  CartIcon,
} from "./ProductCardStyle";
import GreenCartIcon from "../../images/GreenCartIcon.svg";

export class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  openProductPage = (product) => {
    this.props.setIsProductPageOpened();
    // this.props.setProductPage(product);
  };
  render() {
    const { product, currentCurrency, onAdd, setTotalPriceOfCart } = this.props;

    const { inStock, brand, name, id, gallery, prices } = product;

    const { openProductPage } = this;

    let stock;
    if (inStock) {
      stock = (
        <CartIcon
          onClick={() => {
            onAdd(product);
            setTotalPriceOfCart();
          }}
          src={GreenCartIcon}
        />
      );
    } else {
      stock = (
        <Link to={`${id}`}>
          <OutOfStock
            onClick={() => {
              openProductPage(product);
            }}
          >
            OUT OF STOCK
          </OutOfStock>
        </Link>
      );
    }
    return (
      <>
        <ProductContainer chosen={inStock}>
          <Link to={`${id}`}>
            <Img
              onClick={() => {
                openProductPage(product);
              }}
              src={gallery[0]}
            />
          </Link>

          {stock}
          <Link to={`${id}`}>
            <Name
              onClick={() => {
                openProductPage(product);
              }}
            >
              {brand}
              <br />
              {name}
            </Name>
            <Price
              onClick={() => {
                openProductPage(product);
              }}
            >
              {currentCurrency.symbol}
              {prices.map((it) => {
                if (it.currency.symbol === currentCurrency.symbol)
                  return it.amount;
              })}
            </Price>
          </Link>
        </ProductContainer>
      </>
    );
  }
}

export default ProductCard;
