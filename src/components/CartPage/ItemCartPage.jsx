import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
// import _ from "underscore";

import ImgArrow from "../../images/ImgArrow.svg";
import {
  Counter,
  Info,
  CounterBtn,
  CounterContainer,
  Price,
  Name,
  Brand,
  Arrows,
  ImgContainer,
  SliderPrev,
  SliderNext,
  Img,
  ContentPlacement,
  ColoredAttr,
  Attr,
  Attrs,
  AttrName,
} from "./CartPageStyle";

export class ItemCartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexOfPage: 0,
    };
  }
  sliderOnclick = (direction, order) => {
    let indexImg = this.state.indexOfPage;
    if (direction === "next") {
      indexImg = indexImg > 0 ? indexImg - 1 : order.gallery.length - 1;
    }
    if (direction === "prev") {
      indexImg = indexImg < order.gallery.length - 1 ? indexImg + 1 : 0;
    }
    this.setState({
      indexOfPage: indexImg,
    });
  };

  render() {
    const {
      currentCurrency,
      order,
      index,
      increaseCounter,
      decreaseCounter,
      setTotalPriceOfCart,
    } = this.props;
    const { sliderOnclick } = this;
    const { indexOfPage } = this.state;
    const { attributes, attrs } = order;
    return (
      <ContentPlacement>
        <Info>
          <Brand>{order.brand}</Brand>
          <Name>{order.name}</Name>

          <Price>
            {currentCurrency.symbol}
            {order.prices.map((it) => {
              if (it.currency.symbol === currentCurrency.symbol)
                return it.amount;
            })}
          </Price>

          {attributes.map((attr) => {
            return (
              <div key={uuidv4()}>
                <AttrName>{attr.name}:</AttrName>
                <Attrs>
                  {attr.items.map((v, index) => {
                    return (
                      <div key={uuidv4()}>
                        {attr.type === "swatch" && (
                          <ColoredAttr
                            chosen={index === attr.chosenItemIndex}
                            color={v.value}
                          ></ColoredAttr>
                        )}
                        {attr.type === "text" && (
                          <Attr chosen={index === attr.chosenItemIndex}>
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
        </Info>

        <CounterContainer>
          <CounterBtn
            onClick={() => {
              increaseCounter(index);
              setTotalPriceOfCart();
            }}
          >
            +
          </CounterBtn>

          <Counter>{order.amount}</Counter>
          <CounterBtn
            onClick={() => {
              if (order.amount > 0) {
                decreaseCounter(index);
                setTotalPriceOfCart();
              }
            }}
          >
            -
          </CounterBtn>
        </CounterContainer>
        {order.gallery.length > 1 ? (
          <ImgContainer>
            <Img src={order.gallery[indexOfPage]} />
            <Arrows>
              <SliderNext
                onClick={() => sliderOnclick("next", order)}
                src={ImgArrow}
              />
              <SliderPrev
                onClick={() => sliderOnclick("prev", order)}
                src={ImgArrow}
              />
            </Arrows>
          </ImgContainer>
        ) : (
          <ImgContainer>
            <Img src={order.gallery[0]} />
          </ImgContainer>
        )}
      </ContentPlacement>
    );
  }
}

export default ItemCartPage;
