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
      <div
        className="modal fade"
        id="detailStaticBackdrop"
        // data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Product Detail
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div id="productDetail" className="row g-5 px-3">
                <div className="col col-4 p-4">
                  <img
                    src={image || ""}
                    style={{ width: "80%" }}
                    alt="Product Image"
                  />
                  <div>
                    <h3>{name || "Product Name"}</h3>
                    <p>Price: {price ? `$${price}` : "Product Price"}</p>
                    <p>Quantity: {quantity || ""}</p>
                  </div>
                </div>
                <div className="col col-8 p-4">
                  <p>Brand: {alias || ""}</p>
                  <p>{description || "Description"}</p>
                  <p>{shortDescription || "Short Description"}</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              {/* <button type="button" className="btn btn-primary">
                Understood
              </button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
