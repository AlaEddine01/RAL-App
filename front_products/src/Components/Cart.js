import React, { Component } from "react";
import { Table, Row, Col, Input } from "reactstrap";
import EditItem from "./EditItem";

export class Cart extends Component {
  state = {
    modal: false,
    itemToChange: "",
    clientName: "",
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  setItemToChange = (item) => {
    return this.setState({ itemToChange: item });
  };

  getTotal = () => {
    let sum = 0;
    for (let i = 0; i < this.props.cart.length; i++) {
      sum += this.props.cart[i].price * this.props.cart[i].quantity;
    }
    return sum;
  };

  // handleClientName = (e) => {
  //   e.preventDefault();
  //   this.setState({ clientName: e.target.value });
  // };

  render() {
    return (
      <div>
        <div className="rowContainer">
          {/* <h4>Your Cart</h4> */}
          <Row>
            <Col>
              <Input
                style={{ textDecoration: "none", border: "none" }}
                placeholder="Name"
                value={this.props.clientName.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                  letter.toUpperCase()
                )}
                onChange={this.props.handleClientName}
              />
            </Col>
            <Col style={{ display: "flex", justifyContent: "flex-end" }}>
              {this.props.dateForNow}
            </Col>
          </Row>
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Quantity</th>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {this.props.cart.map((item, index) => (
                <tr
                  style={{ cursor: "pointer" }}
                  key={item._id}
                  onClick={(e) => {
                    this.setItemToChange(item);
                    this.toggle();
                  }}
                >
                  <th scope="row">{index + 1}</th>
                  <td>{item.quantity}</td>
                  <td>{item.item}</td>
                  <td>{new Intl.NumberFormat("ar-TN").format(item.price)}</td>
                  <td>{new Intl.NumberFormat("ar-TN").format(item.price * item.quantity)}</td>
                  {/* {localStorage.setItem(`${item.item}`, JSON.stringify(item))} */}
                  <EditItem
                    modal={this.state.modal}
                    toggle={this.toggle}
                    itemToChange={this.state.itemToChange}
                    cart={this.props.cart}
                    editCart={this.props.editCart}
                  />
                </tr>
              ))}
            </tbody>
          </Table>

          <Row
            style={{
              backgroundColor: "burlywood",
              height: "2rem",
            }}
          >
            <Col xs="6">
              {this.props.cart.length}{" "}
              {this.props.cart.length <= 1 ? <span>Product</span> : <span>Products</span>}
            </Col>
            <Col xs="6" style={{ display: "flex", justifyContent: "flex-end" }}>
              Total= {new Intl.NumberFormat("ar-TN").format(this.getTotal())}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Cart;
