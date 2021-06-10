import React from "react";
import { Table, Row, Col } from "reactstrap";


// Functional Component don't work with react to print so Tansformed to Class based component Named
function CartFunctional({ cart }) {
  const getTotal = () => {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].price * cart[i].quantity;
    }
    return sum;
  };

  return (
    <div className="rowContainer">
      <h4>Your Cart</h4>
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
          {cart.map((item, index) => (
            <tr key={item._id}>
              <th scope="row">{index + 1}</th>
              <td>{item.quantity}</td>
              <td>{item.item}</td>
              <td>{item.price}</td>
              <td>{item.price * item.quantity}</td>
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
          {cart.length} {cart.length <= 1 ? <span>Product</span> : <span>Products</span>}
        </Col>
        <Col xs="6" style={{ display: "flex", justifyContent: "flex-end" }}>
          Total= {getTotal()}
        </Col>
      </Row>
    </div>
  );
}
export default CartFunctional;
