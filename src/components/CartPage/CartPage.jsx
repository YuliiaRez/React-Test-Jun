import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ImgArrow from "../../images/ImgArrow.svg";
import ItemCartPage from "./ItemCartPage";

import {
  CartHeader,
  CartContainer,
  Tax,
  Amount,
  OrderBtn,
} from "./CartPageStyle";

export class CartPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      currentCurrency,
      orders,
      increaseCounter,
      decreaseCounter,
      totalPriceOfCart,
      setTotalPriceOfCart,
      closeCartPage,
      closeProductPage,
    } = this.props;

    return (
      <CartContainer>
        <CartHeader>CART</CartHeader>
        {orders.map((order, index) => {
          return (
            <ItemCartPage
              key={uuidv4()}
              order={order}
              index={index}
              currentCurrency={currentCurrency}
              increaseCounter={increaseCounter}
              decreaseCounter={decreaseCounter}
              setTotalPriceOfCart={setTotalPriceOfCart}
            ></ItemCartPage>
          );
        })}
        <Tax>
          {"Tax 21%: "}
          <Amount>
            {orders.length > 0
              ? `${currentCurrency.symbol}${(0.21 * totalPriceOfCart).toFixed(
                  2
                )}`
              : 0}
          </Amount>
        </Tax>
        <Tax>
          {"Quantaty: "}{" "}
          <Amount>
            {orders.length > 0
              ? `${orders
                  .map((order) => order.amount)
                  .reduce((sum, current) => sum + current)}`
              : 0}
          </Amount>
        </Tax>
        <Tax>
          {"Total: "}
          <Amount>
            {orders.length > 0
              ? `${currentCurrency.symbol}${totalPriceOfCart.toFixed(2)}`
              : 0}
          </Amount>
        </Tax>
        <OrderBtn
          onClick={() => {
            closeProductPage();
            closeCartPage();
          }}
        >
          ORDER
        </OrderBtn>
      </CartContainer>
    );
  }
}

export default CartPage;
