import React, { Component } from "react";

export default class ProductDetail extends Component {
  render() {
    const {
      image,
      name,
      alias,
      price,
      description,
      shortDescription,
      quantity,
    } = this.props.showingDetail || { ...null };
    return (
      <div id="productDetail" className="row border g-5 mt-4">
        <div className="col col-4 p-4">
          <img src={image || ""} style={{ width: "80%" }} alt="Product Image" />
          <div>
            <h3>{name || "Product Name"}</h3>
            <p>{price ? `$ ${price}` : "Product Price"}</p>
            <p>Quantity: {quantity || ""}</p>
          </div>
        </div>
        <div className="col col-8 p-4">
          <p>Brand: {alias || ""}</p>
          <p>{description || "Description"}</p>
          <p>{shortDescription || "Short Description"}</p>
        </div>
      </div>
    );
  }
}
