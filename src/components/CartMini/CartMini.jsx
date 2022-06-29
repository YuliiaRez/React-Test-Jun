import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    this.ref = React.createRef();
  }
  handleClickOutside = (event) => {
    if (this.ref.current && !this.ref.current.contains(event.target)) {
      this.props.onClickOutside && this.props.onClickOutside();
    }
  };
  showCountOfItems = () => {
    return this.props.orders
      .map((item) => item.amount)
      .reduce((sum, current) => sum + current);
  };
  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside, true);
  }
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
      isCartOpened,
      setIsCartOpened,
    } = this.props;

    console.log("ref :>> ", this.ref);
    if (!isCartOpened) return null;
    return (
      <>
        <Container>
          <CartContainer ref={this.ref}>
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
              <Link to="cart-page">
                <CartMiniBtn
                  onClick={() => {
                    setIsCardPageOpened();
                    closeCartMini();
                    closeProductPage();
                  }}
                >
                  VIEW BAG
                </CartMiniBtn>
              </Link>

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
