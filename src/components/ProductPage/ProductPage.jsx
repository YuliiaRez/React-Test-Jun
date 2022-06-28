import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { client } from "../../client";
import { gql } from "@apollo/client";
import _ from "underscore";

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
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      currentImage: 0,
      currentAttributes: [],
    };
  }
  getProduct = (id = this.props.router.params.productId) => {
    client
      .query({
        query: gql`
          query {
            product(id: "${id}") {
              id
              name
              inStock
              gallery
              description
              category
              attributes {
                id
                name
                type
                items {
                  displayValue
                  value
                  id
                }
              }
              prices {
                currency {
                  label
                  symbol
                }
                amount
              }
              brand
            }
          }
        `,
      })
      .then(({ data: { product } }) => {
        this.setState({
          product: {
            ...product,
            attributes: [
              ...Object.values({ ...product.attributes }).map((attr) => ({
                ...attr,
                chosenItemIndex: 0,
              })),
            ],
          },
        });
        this.setState({
          currentAttributes: [
            ...Object.values({ ...product.attributes }).map((attr) => ({
              ...attr,
              chosenItemIndex: 0,
            })),
          ],
        });
      });
  };
  componentDidMount() {
    this.getProduct(/*this.props.router.params.productId*/);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps != this.props && prevState != this.state) {
      this.getProduct(/*this.props.router.params.productId*/);
      console.log("this.state :>> ", this.state);
    }
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
    const { product } = this.state;
    const { gallery } = product;
    this.setState({
      currentImage: gallery.indexOf(img),
    });
  };
  transformDescription = () => {
    const { product } = this.state;
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
  setChosenAttr = (index, attrIndex) => {
    return index === attrIndex;
  };
  render() {
    const {
      setIsProductPageOpened,
      currentCurrency,
      orders,
      addToOrderFromPL,
      addToOrderFromPP,
      setTotalPriceOfCart,
    } = this.props;
    const { product, currentImage, currentAttributes } = this.state;
    const { gallery, brand, name, attributes, inStock, prices, id } = product;

    const description = this.transformDescription();
    // console.log("this,props :>> ", this.props);
    // console.log("this.state :>> ", this.state);

    return (
      <Container>
        <Gallery>
          <Imgs>
            {Object.values({ ...gallery }).map((img) => (
              <SubImg
                onClick={() => this.setCurrentImage(img)}
                key={uuidv4()}
                src={img}
              />
            ))}
          </Imgs>
          <MainImg src={Object.values({ ...gallery })[currentImage]} />
        </Gallery>

        <OrderContainer>
          <Brand>{product.brand}</Brand>
          <Name>{product.name}</Name>
          {Object.values({ ...attributes }).length > 0 &&
            Object.values({ ...attributes }).map((attr, j) => {
              return (
                <div key={uuidv4()}>
                  <SubName>{attr.name}:</SubName>
                  <Attrs>
                    {attr.items.map((v, index) => {
                      // let chosenAttr;
                      return (
                        <div key={uuidv4()}>
                          {attr.type === "swatch" && (
                            <ColoredAttr
                              onClick={() => {
                                this.setCurrentAttributes(attributes, index, j);
                              }}
                              chosen={attr.chosenItemIndex === index}
                              color={v.value}
                            ></ColoredAttr>
                          )}

                          {attr.type === "text" && (
                            <Attr
                              onClick={() => {
                                this.setCurrentAttributes(attributes, index, j);
                              }}
                              chosen={attr.chosenItemIndex === index}
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
            {Object.values({ ...prices }).map((it) => {
              if (it.currency.symbol === currentCurrency.symbol)
                return it.amount;
            })}
          </Price>
          {product.inStock ? (
            <AddToCart
              onClick={() => {
                addToOrderFromPP(product, currentAttributes);
                setTotalPriceOfCart();
              }}
            >
              ADD TO CART
            </AddToCart>
          ) : (
            <AddToCartNotAvailable>ITEM IS OUT OF STOCK</AddToCartNotAvailable>
          )}
          <ProductDescription
            defaultValue={Object.values({ ...description }).map(
              (el) => ` ${el.textContent}`
            )}
          ></ProductDescription>
        </OrderContainer>
      </Container>
    );
  }
}
export default withRouter(ProductPage);
