import React, { Component } from "react";
import { client } from "../../client";
import { gql } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";
import brandIcon from "../../images/BrandIcon.svg";
import cart from "../../images/Cart.svg";
import arrowImg from "../../images/ArrowCurrImg.svg";

import CartMini from "../CartMini/CartMini";
import CurrenciesSelect from "../CurrenciesSelect/CurrenciesSelect";
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
  CartCounterAndImg,
  Counter,
} from "./NavbarStyle";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryNames: [],
      isCartOpened: false,
      isCurrSelectOpened: false,
    };
  }

  getCategoryNames = () => {
    client
      .query({
        query: gql`
          query {
            categories {
              name
            }
          }
        `,
      })
      .then(({ data: { categories } }) => {
        this.setState({ categoryNames: categories.map((item) => item.name) });
      });
  };
  setIsCurrSelectOpened = () => {
    const { isCurrSelectOpened } = this.state;
    this.setState({ isCurrSelectOpened: !isCurrSelectOpened });
  };
  setIsCartOpened = () => {
    const { isCartOpened } = this.state;
    this.setState({ isCartOpened: !isCartOpened });
  };
  closeCartMini = () => {
    const {} = this.setState;
    this.setState({ isCartOpened: false });
  };
  componentDidMount() {
    this.getCategoryNames();
  }
  componentDidMount(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.getCategoryNames();
    }
  }
  render() {
    const { categoryNames, isCartOpened, isCurrSelectOpened } = this.state;
    const { setIsCurrSelectOpened, setIsCartOpened, closeCartMini } = this;
    const {
      currentCurrency,
      setCurrentCurrency,
      currentCategoryName,
      setCurrentCategoryName,
      orders,
      increaseCounter,
      decreaseCounter,
      setTotalPriceOfCart,
      totalPriceOfCart,
      setIsCardPageOpened,
      closeCartPage,
      closeProductPage,
      isProductPageOpened,
      isCartPageOpened,
    } = this.props;
    return (
      <>
        <NavbarDiv>
          <Left>
            {categoryNames.map((name) => (
              <Category
                key={name}
                chosen={name === currentCategoryName}
                onClick={() => {
                  closeCartPage();
                  closeProductPage();
                  setCurrentCategoryName(name);
                }}
              >
                {name}
              </Category>
            ))}
          </Left>
          <Center>
            <Image
              src={brandIcon}
              onClick={() => {
                closeCartMini();
                closeProductPage();
                closeCartPage();
              }}
            />
          </Center>
          <Right>
            <Currency onClick={() => setIsCurrSelectOpened()}>
              <CurrencySign>{currentCurrency.symbol}</CurrencySign>
              {isCurrSelectOpened ? (
                <ArrowImgDown src={arrowImg} />
              ) : (
                <ArrowImgUp src={arrowImg} />
              )}
              {isCurrSelectOpened && (
                <CurrenciesSelect
                  isCurrSelectOpened={isCurrSelectOpened}
                  currentCurrency={currentCurrency}
                  setCurrentCurrency={setCurrentCurrency}
                />
              )}
            </Currency>
            <CartCounterAndImg
              onClick={() => {
                setTotalPriceOfCart();
                setIsCartOpened();
                closeProductPage();
                closeCartPage();
              }}
            >
              <Image src={cart} />
              {orders.length > 0 ? (
                <Counter>
                  {orders.length > 0 &&
                    `${orders
                      .map((item) => item.amount)
                      .reduce((sum, current) => sum + current)}`}
                </Counter>
              ) : (
                ""
              )}
            </CartCounterAndImg>
            {isCartOpened && orders.length > 0 && (
              <div>
                <CartMini
                  orders={orders}
                  currentCurrency={currentCurrency}
                  increaseCounter={increaseCounter}
                  decreaseCounter={decreaseCounter}
                  // setChosenIndexOfAttr={setChosenIndexOfAttr}
                  setTotalPriceOfCart={setTotalPriceOfCart}
                  totalPriceOfCart={totalPriceOfCart}
                  setIsCardPageOpened={setIsCardPageOpened}
                  closeCartMini={closeCartMini}
                  closeCartPage={closeCartPage}
                  closeProductPage={closeProductPage}
                  isProductPageOpened={isProductPageOpened}
                  isCartPageOpened={isProductPageOpened}
                />
              </div>
            )}
          </Right>
        </NavbarDiv>
      </>
    );
  }
}

export default Navbar;
