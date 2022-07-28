import React, { Component } from "react";

export default class CartList extends Component {
  refBtnToCloseModal = React.createRef();
  renderCartItem() {
    return this.props.cartData.map((item, index) => {
      const { id, name, image, price } = { ...item.product };
      return (
        <tr key={id}>
          <td>{index + 1}</td>
          <td>{name}</td>
          <td>
            <img src={image} style={{ width: "50px" }} />
          </td>
          <td>${price}</td>
          <td>
            <button
              className="btn btn-primary"
              onClick={() => this.props.decreaseCartQuantity(id)}
            >
              &lt;
            </button>
            <span className="mx-1">{item.quantity}</span>
            <button
              className="btn btn-primary"
              onClick={() => this.props.increaseCartQuantity(id)}
            >
              &gt;
            </button>
          </td>
          <td>${item.quantity * price}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.props.deleteCart(id)}
            >
              X
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div
        className="modal fade"
        id="staticBackdrop"
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
                Cart
              </h5>
              <button
                ref={this.refBtnToCloseModal}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Image</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>{this.renderCartItem()}</tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  this.props.clearCart();
                  this.refBtnToCloseModal.current.click();
                }}
              >
                Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
