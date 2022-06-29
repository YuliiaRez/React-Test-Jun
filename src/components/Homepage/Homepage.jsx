import React, { Component } from "react";
import _ from "underscore";

import { Container, MainPageContainer } from "./HomePageStyled";
import Navbar from "../Navbar/Navbar";
import CategoryPage from "../CategoryPage/CategoryPage";
import ProductPage from "../ProductPage/ProductPage";
import CartPage from "../CartPage/CartPage";
import { Route, Routes, Outlet } from "react-router-dom";

export class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentCategoryName: "",
      currentCurrency: { symbol: "$", label: "USD" },
      orders: [],
      // isProductPageOpened: false,
      // isCartPageOpened: false,
      productPage: null,
      totalPriceOfCart: 0,
    };
  }
  setCurrentCategoryName = (categoryName) => {
    this.setState({ currentCategoryName: categoryName });
  };
  setCurrentCurrency = (currency) => {
    this.setState({ currentCurrency: { ...currency } });
  };
  setProductPage = (product) => {
    const { productPage } = this.state;
    this.setState({
      productPage: {
        ...product,
        attributes: [
          ...product.attributes.map(
            (el) => (el = { ...el, chosenItemIndex: 0 })
          ),
        ],
      },
    });
  };
  addToOrderFromPP = (product, attributesSet) => {
    const { orders } = this.state;
    const newProductInCart = { ...product, attributes: [...attributesSet] };
    if (orders.length === 0) {
      this.setState({
        orders: [{ ...newProductInCart, amount: 1, orderId: Date.now() }],
      });
    } else {
      let orderIdInCart = null;
      let productsSameInCart = orders.filter(
        (order) => (product.id = order.id)
      );
      if (productsSameInCart.length > 0) {
        productsSameInCart.forEach((order) => {
          let inCart = _.isEqual(newProductInCart.attributes, order.attributes);
          if (inCart) {
            orderIdInCart = order.orderId;
          }
        });
        !orderIdInCart &&
          this.setState({
            orders: [
              ...orders,
              { ...newProductInCart, amount: 1, orderId: Date.now() },
            ],
          });
        if (orderIdInCart) {
          let orderIds = orders.map((el) => el.orderId);
          let j = orderIds.indexOf(orderIdInCart);
          orders[j] = { ...orders[j], amount: orders[j].amount + 1 };
          this.setState({ orders: [...orders] });
        }
      }
    }
  };
  addToOrderFromPL = (product) => {
    const { orders } = this.state;
    const { attributes } = product;
    const attributesDef = attributes.map((el) => ({
      ...el,
      chosenItemIndex: 0,
    }));
    const newProductInCart = { ...product, attributes: [...attributesDef] };

    if (orders.length === 0) {
      this.setState({
        orders: [{ ...newProductInCart, amount: 1, orderId: Date.now() }],
      });
    } else {
      let inCart = orders.map((el) => el.id).includes(product.id);

      !inCart &&
        this.setState({
          orders: [
            ...orders,
            {
              ...product,
              attributes: [...attributesDef],
              amount: 1,
              orderId: Date.now(),
            },
          ],
        });
      if (inCart) {
        let productsId = orders.map((el) => el.id);
        let j = productsId.indexOf(product.id);
        orders[j] = { ...orders[j], amount: orders[j].amount + 1 };
        this.setState({ orders: [...orders] });
      }
    }
  };

  increaseCounter = (i) => {
    const { orders } = this.state;
    orders[i].amount += 1;
    this.setState({ orders: [...orders] });
  };
  decreaseCounter = (i) => {
    const { orders } = this.state;
    if (orders[i].amount > 0) {
      orders[i].amount -= 1;
    }
    if (orders[i].amount === 0) {
      orders.splice(i, 1);
    }
    this.setState({ orders: [...orders] });
  };
  setIsProductPageOpened = (data) => {
    const { isProductPageOpened } = this.state;
    this.setState({
      isProductPageOpened: data ? Boolean(data) : !isProductPageOpened,
    });
  };
  setIsCardPageOpened = () => {
    const { isCartPageOpened } = this.state;
    this.setState({ isCartPageOpened: !isCartPageOpened });
  };
  closeCartPage = () => {
    const { isCartPageOpened } = this.state;
    this.setState({ isCartPageOpened: false });
  };
  closeProductPage = () => {
    const { isProductPageOpened } = this.state;
    this.setState({ isProductPageOpened: false });
  };
  setTotalPriceOfCart = () => {
    const { orders, currentCurrency } = this.state;

    this.setState({
      totalPriceOfCart: orders
        .map((order) => {
          return (
            order.prices.filter(
              (price) => price.currency.symbol === currentCurrency.symbol
            )[0].amount * order.amount
          );
        })
        .reduce((sum, currentSum) => sum + currentSum, 0),
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (!_.isEqual(prevState.orders, this.state.orders)) {
      this.setTotalPriceOfCart();
    }
  }

  render() {
    const {
      currentCategoryName,
      currentCurrency,
      orders,
      productPage,
      isProductPageOpened,
      isCartPageOpened,
      totalPriceOfCart,
    } = this.state;

    const {
      setCurrentCategoryName,
      setCurrentCurrency,
      addToOrderFromPL,
      addToOrderFromPP,
      increaseCounter,
      decreaseCounter,
      setIsProductPageOpened,
      setProductPage,
      setIsCardPageOpened,
      setTotalPriceOfCart,
      closeCartPage,
      closeProductPage,
    } = this;

    return (
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <Navbar
                currentCategoryName={currentCategoryName}
                currentCurrency={currentCurrency}
                setCurrentCurrency={setCurrentCurrency}
                setCurrentCategoryName={setCurrentCategoryName}
                orders={orders}
                setIsCardPageOpened={setIsCardPageOpened}
                increaseCounter={increaseCounter}
                decreaseCounter={decreaseCounter}
                setTotalPriceOfCart={setTotalPriceOfCart}
                totalPriceOfCart={totalPriceOfCart}
                closeCartPage={closeCartPage}
                closeProductPage={closeProductPage}
                isProductPageOpened={isProductPageOpened}
                isCartPageOpened={isCartPageOpened}
              />
            }
          >
            <Route
              path=":category/"
              element={
                <>
                  {!isProductPageOpened && !isCartPageOpened && (
                    <MainPageContainer>
                      <CategoryPage
                        onAdd={addToOrderFromPL}
                        currentCategoryName={currentCategoryName}
                        currentCurrency={currentCurrency}
                        setIsProductPageOpened={setIsProductPageOpened}
                        setProductPage={setProductPage}
                        setTotalPriceOfCart={setTotalPriceOfCart}
                      />
                    </MainPageContainer>
                  )}
                </>
              }
            ></Route>
            <Route
              path=":category/:productId"
              element={
                <>
                  <ProductPage
                    currentCurrency={currentCurrency}
                    orders={orders}
                    addToOrderFromPL={addToOrderFromPL}
                    addToOrderFromPP={addToOrderFromPP}
                    setTotalPriceOfCart={setTotalPriceOfCart}
                    isProductPageOpened={isProductPageOpened}
                    isCartPageOpened={isCartPageOpened}
                    closeCartPage={closeCartPage}
                    closeProductPage={closeProductPage}
                    setIsProductPageOpened={setIsProductPageOpened}
                  />
                </>
              }
            ></Route>
            <Route
              path="cart-page"
              element={
                isCartPageOpened && (
                  <CartPage
                    orders={orders}
                    currentCurrency={currentCurrency}
                    increaseCounter={increaseCounter}
                    decreaseCounter={decreaseCounter}
                    totalPriceOfCart={totalPriceOfCart}
                    setTotalPriceOfCart={setTotalPriceOfCart}
                    closeCartPage={closeCartPage}
                    closeProductPage={closeProductPage}
                    isProductPageOpened={isProductPageOpened}
                    isCartPageOpened={isCartPageOpened}
                  />
                )
              }
            ></Route>
          </Route>
        </Routes>
      </Container>
    );
  }
}
export default Homepage;
