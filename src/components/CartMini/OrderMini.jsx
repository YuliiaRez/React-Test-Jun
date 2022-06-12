import React, { Component } from "react";
import {
  CartContent,
  Img,
  ProductInfoInCart,
  CartAttr,
  Price,
  Attrs,
  ColoredAttr,
  Attr,
  CounterContainer,
  CounterBtn,
  Counter,
} from "./CartMiniStyle";
import { v4 as uuidv4 } from "uuid";

export class OrderMini extends Component {
  render() {
    const {
      order,
      i,
      currentCurrency,
      increaseCounter,
      decreaseCounter,
      setTotalPriceOfCart,
    } = this.props;

    const { amount, attributes, brand, gallery, name, prices } = order;

    return (
      <CartContent>
        <ProductInfoInCart>
          <CartAttr>{brand}</CartAttr>
          <CartAttr>{name}</CartAttr>
          <Price>
            {currentCurrency.symbol}
            {prices.map((it) => {
              if (it.currency.symbol === currentCurrency.symbol)
                return it.amount;
            })}
          </Price>
          {attributes.map((attr) => {
            const { chosenItemIndex, items, name: nameItem, type } = attr;
            return (
              <div key={uuidv4()}>
                <CartAttr>{nameItem}:</CartAttr>
                <Attrs>
                  {items.map((v, index) => {
                    return (
                      <div key={uuidv4()}>
                        {type === "swatch" && (
                          <ColoredAttr
                            chosen={index === chosenItemIndex}
                            color={v.value}
                          ></ColoredAttr>
                        )}

                        {type === "text" && (
                          <Attr chosen={index === chosenItemIndex}>
                            {v.displayValue}
                          </Attr>
                        )}
                      </div>
                    );
                  })}
                </Attrs>
              </div>
            );
          })}
        </ProductInfoInCart>
        <CounterContainer>
          <CounterBtn
            onClick={() => {
              increaseCounter(i);
              setTotalPriceOfCart();
            }}
          >
            +
          </CounterBtn>

          <Counter>{amount}</Counter>
          <CounterBtn
            onClick={() => {
              if (amount > 0) {
                decreaseCounter(i);
                setTotalPriceOfCart();
              }
            }}
          >
            -
          </CounterBtn>
        </CounterContainer>

        <Img src={gallery[0]} />
      </CartContent>
    );
  }
}

export default OrderMini;
