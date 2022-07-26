import React, { Component } from "react";
import ProductItem from "./ProductItem/ProductItem";

export default class ProductsList extends Component {
  renderProductToHtml = () => {
    return this.props.productsData.map((item) => {
      return (
        <ProductItem
          key={item.id}
          productData={item}
          changeShowingDetail={this.props.changeShowingDetail}
          addToCart={this.props.addToCart}
        />
      );
    });
  };
  render() {
    return <div className="row g-3 py-4">{this.renderProductToHtml()}</div>;
  }
}
