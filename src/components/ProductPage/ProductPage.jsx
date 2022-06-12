import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Container,
  AddToCart,
  Imgs,
  MainImg,
  Attrs,
  Attr,
  Brand,
  Name,
  SubName,
  Price,
  OrderContainer,
  SubImg,
  ProductDescription,
  AddToCartNotAvailable,
  ColoredAttr,
  Gallery,
} from "./ProductPageStyle";

export default class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
      currentAttributes: [
        ...this.props.product.attributes.map((el) => ({
          ...el,
          chosenItemIndex: 0,
        })),
      ],
    };
  }
  setCurrentAttributes = (attributes, indexOfItem, indOfAttr) => {
    attributes[indOfAttr] = {
      ...attributes[indOfAttr],
      chosenItemIndex: indexOfItem,
    };
    this.setState({
      currentAttributes: [...attributes],
    });
  };
  setCurrentImage = (img) => {
    const { product } = this.props;
    const { gallery } = product;
    this.setState({
      currentImage: gallery.indexOf(img),
    });
  };

  transformDescription = () => {
    const { product } = this.props;
    let result = [];
    const { description } = product;
    const parser = new DOMParser();
    const descriptionAsHTML = parser
      .parseFromString(description, "text/html")
      .getElementsByTagName("body");
    for (let child of descriptionAsHTML[0].children) {
      result.push(child);
    }
    return result;
  };

  render() {
    const {
      setIsProductPageOpened,
      product,
      currentCurrency,
      orders,
      addToOrderFromPL,
      addToOrderFromPP,
      setTotalPriceOfCart,
    } = this.props;
    const { currentImage, currentAttributes } = this.state;

    const { gallery, brand, name, attributes, inStock, prices, id } = product;

    const description = this.transformDescription();

    return (
      <>
        <Container>
          <Gallery>
            <Imgs>
              {gallery.map((img) => (
                <SubImg
                  onClick={() => this.setCurrentImage(img)}
                  key={uuidv4()}
                  src={img}
                />
              ))}
            </Imgs>
            <MainImg src={gallery[currentImage]} />
          </Gallery>

          <OrderContainer>
            <Brand>{brand}</Brand>
            <Name>{name}</Name>
            {attributes.length > 0 &&
              attributes.map((attr, j) => {
                return (
                  <div key={uuidv4()}>
                    <SubName>{attr.name}:</SubName>
                    <Attrs>
                      {attr.items.map((v, index) => {
                        return (
                          <div key={uuidv4()}>
                            {attr.type === "swatch" && (
                              <ColoredAttr
                                onClick={() => {
                                  this.setCurrentAttributes(
                                    attributes,
                                    index,
                                    j
                                  );
                                }}
                                chosen={
                                  index === currentAttributes[j].chosenItemIndex
                                }
                                color={v.value}
                              ></ColoredAttr>
                            )}

                            {attr.type === "text" && (
                              <Attr
                                onClick={() => {
                                  this.setCurrentAttributes(
                                    attributes,
                                    index,
                                    j
                                  );
                                }}
                                chosen={
                                  index === currentAttributes[j].chosenItemIndex
                                }
                              >
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
            <SubName>PRICE:</SubName>
            <Price>
              <span>{currentCurrency.symbol}</span>
              {prices.map((it) => {
                if (it.currency.symbol === currentCurrency.symbol)
                  return it.amount;
              })}
            </Price>
            {inStock ? (
              <AddToCart
                onClick={() => {
                  addToOrderFromPP(product, currentAttributes);
                  setTotalPriceOfCart();
                }}
              >
                ADD TO CART
              </AddToCart>
            ) : (
              <AddToCartNotAvailable>
                ITEM IS OUT OF STOCK
              </AddToCartNotAvailable>
            )}
            <ProductDescription
              defaultValue={description.map((el) => ` ${el.textContent}`)}
            ></ProductDescription>
          </OrderContainer>
        </Container>
      </>
    );
  }
}
