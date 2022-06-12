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
    this.props.setProductPage(product);
  };
  render() {
    const {
      product,
      currentCurrency,
      currentCategoryName,
      onAdd,
      setIsProductPageOpened,
      setProductPage,
      setTotalPriceOfCart,
    } = this.props;

    const { inStock, name, id, gallery, prices } = product;

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
        <OutOfStock
          onClick={() => {
            openProductPage(product);
          }}
        >
          OUT OF STOCK
        </OutOfStock>
      );
    }
    return (
      <>
        <ProductContainer chosen={inStock}>
          <Img
            onClick={() => {
              openProductPage(product);
            }}
            src={gallery[0]}
          />
          {stock}
          <Name
            onClick={() => {
              openProductPage(product);
            }}
          >
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
        </ProductContainer>
      </>
    );
  }
}

export default ProductCard;
