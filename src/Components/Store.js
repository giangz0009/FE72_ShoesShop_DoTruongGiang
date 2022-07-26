import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductsList from "./ProductsList/ProductsList";
import ProductDetail from "./ProductDetail/ProductDetail";
import CartList from "./CartList/CartList";

import productsData from "./../Assets/data.json";

export default class Store extends Component {
  state = {
    showingDetail: null,
    cartList: [],
  };

  clearCart = () => {
    this.setState({
      cartList: [],
    });
  };

  decreaseCartQuantity = (id) => {
    const cloneCartList = [...this.state.cartList];

    let foundProductPos = null;
    const foundProduct = cloneCartList.find((item, index) => {
      foundProductPos = index;
      return item.product.id === id;
    });

    if (!foundProduct) return;

    if (foundProduct.quantity === 1) cloneCartList.splice(foundProductPos, 1);
    else {
      foundProduct.quantity--;
    }

    this.setState({
      cartList: cloneCartList,
    });
  };

  increaseCartQuantity = (id) => {
    const cloneCartList = [...this.state.cartList];

    const foundProduct = cloneCartList.find((item) => item.product.id === id);

    if (!foundProduct) return;

    foundProduct.quantity++;

    this.setState({
      cartList: cloneCartList,
    });
  };

  deleteCart = (id) => {
    const cloneCartList = [...this.state.cartList];

    const foundProduct = cloneCartList.findIndex(
      (item) => item.product.id === id
    );

    if (foundProduct < 0) return;

    cloneCartList.splice(foundProduct, 1);

    this.setState({
      cartList: cloneCartList,
    });
  };

  addToCart = (product) => {
    const cloneCartList = this.state.cartList;

    const foundProduct = cloneCartList.find(
      (item) => item.product.id === product.id
    );

    if (foundProduct) {
      foundProduct.quantity++;
    } else {
      cloneCartList.push({
        product: product,
        quantity: 1,
      });
    }

    this.setState({
      cartList: cloneCartList,
    });
  };

  getCartListAmount = () => {
    return this.state.cartList.length;
  };

  changeShowingDetail = (id) => {
    const foundProduct = productsData.find((item) => item.id === id);

    if (!foundProduct) return;

    this.setState({
      showingDetail: foundProduct,
    });
  };
  render() {
    return (
      <Fragment>
        <header className="bg-dark bg-gradient text-center text-white py-3">
          <div className="container">
            <h1>Shoes Shop</h1>
            <button
              className="display-6"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Cart ({this.getCartListAmount()})
            </button>
          </div>
        </header>
        <main>
          <div className="container">
            <ProductsList
              productsData={productsData}
              changeShowingDetail={this.changeShowingDetail}
              addToCart={this.addToCart}
            />
            <ProductDetail showingDetail={this.state.showingDetail} />
            <CartList
              cartData={this.state.cartList}
              deleteCart={this.deleteCart}
              increaseCartQuantity={this.increaseCartQuantity}
              decreaseCartQuantity={this.decreaseCartQuantity}
              clearCart={this.clearCart}
            />
          </div>
        </main>
      </Fragment>
    );
  }
}
