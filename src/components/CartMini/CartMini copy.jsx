import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import {
  Container,
  Orders,
  CartContainer,
  BtnContainer,
  CartMiniBtn,
  CartHeader,
  CartAttr,
  Price,
  CheckoutBtn,
  PriceContainer,
} from "./CartMiniStyle";
import OrderMini from "./OrderMini";

export class CartMini extends Component {
  constructor(props) {
    super(props);
  }
  showCountOfItems = () => {
    return this.props.orders
      .map((item) => item.amount)
      .reduce((sum, current) => sum + current);
  };
  render() {
    const {
      orders,
      currentCurrency,
      decreaseCounter,
      increaseCounter,
      setTotalPriceOfCart,
      totalPriceOfCart,
      setIsCardPageOpened,
      closeCartMini,
      closeProductPage,
      closeCartPage,
    } = this.props;
    return (
      <>
        <Container>
          <CartContainer>
            <CartHeader>{` My Bag, ${this.showCountOfItems()} items`}</CartHeader>
            <Orders>
              {orders.length > 0 &&
                orders.map((item, i) => {
                  return (
                    <OrderMini
                      key={uuidv4()}
                      order={item}
                      i={i}
                      currentCurrency={currentCurrency}
                      increaseCounter={increaseCounter}
                      decreaseCounter={decreaseCounter}
                      setTotalPriceOfCart={setTotalPriceOfCart}
                    />
                  );
                })}
            </Orders>
            <PriceContainer>
              <Price>{"Total: "}</Price>
              <Price>
                {orders.length > 0
                  ? `${currentCurrency.symbol}  : ${totalPriceOfCart.toFixed(
                      2
                    )}`
                  : 0}
              </Price>
            </PriceContainer>
            <BtnContainer>
              <CartMiniBtn
                onClick={() => {
                  setIsCardPageOpened();
                  closeCartMini();
                  closeProductPage();
                }}
              >
                VIEW BAG
              </CartMiniBtn>

              <CheckoutBtn
                onClick={() => {
                  closeCartMini();
                  closeProductPage();
                  closeCartPage();
                }}
              >
                CHECKOUT
              </CheckoutBtn>
            </BtnContainer>
          </CartContainer>
        </Container>
      </>
    );
  }
}

export default CartMini;
