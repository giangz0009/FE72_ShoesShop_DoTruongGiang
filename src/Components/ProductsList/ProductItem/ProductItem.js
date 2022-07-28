import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { id, image, name, price } = this.props.productData;
    return (
      <div className="col col-lg-4">
        <div className="card item text-center align-items-center p-4">
          <img src={image} style={{ width: "50%" }} />
          <div>
            <h3>{name}</h3>
            <p>${price}</p>
            <button
              data-bs-toggle="modal"
              data-bs-target="#detailStaticBackdrop"
              className="btn btn-primary me-3"
              onClick={() => {
                this.props.changeShowingDetail(id);
                // document.getElementById("productDetail").scrollIntoView();
              }}
            >
              View Detail
            </button>
            <button
              className="btn btn-dark"
              onClick={() => {
                this.props.addToCart(this.props.productData);
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}
