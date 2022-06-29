import React, { Component } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { client } from "../../client";
import { gql } from "@apollo/client";
import { Container, CategoryContainer, CategoryName } from "./ProductListStyle";

import { useLocation, useNavigate, useParams } from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

export class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsByCategory: [],
    };
  }
  getProducts = (categoryName = this.props.router.params.category) => {
    client
      .query({
        query: gql`
          query {
            category(input: { title: "${categoryName}"}) {
              name
              products {
                id
                category
                name
                inStock
                gallery
                description
                brand
                attributes {
                  id
                  name
                  type
                  items {
                    id
                    displayValue
                    value
                  }
                }
                prices {
                  currency {
                    label
                    symbol
                  }
                  amount
                }
              }
            }
          }
        `,
      })
      .then(({ data: { category } }) => {
        const products = category.products;
        this.setState({
          productsByCategory: products,
        });
      });
  };
  componentDidMount() {
    this.getProducts();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.currentCategoryName !== this.props.currentCategoryName)
      this.getProducts();
  }
  render() {
    const { productsByCategory } = this.state;
    const {
      currentCurrency,
      currentCategoryName,
      onAdd,
      setIsProductPageOpened,
      // setProductPage,
      setTotalPriceOfCart,
    } = this.props;
    return (
      <>
        <CategoryContainer>
          <CategoryName>{this.props.router.params.category}</CategoryName>
        </CategoryContainer>
        <Container>
          {productsByCategory.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              currentCurrency={currentCurrency}
              // currentCategoryName={currentCategoryName}
              onAdd={onAdd}
              setIsProductPageOpened={setIsProductPageOpened}
              // setProductPage={setProductPage}
              setTotalPriceOfCart={setTotalPriceOfCart}
            />
          ))}
        </Container>
      </>
    );
  }
}

export default withRouter(CategoryPage);
