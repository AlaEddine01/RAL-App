import React, { useState } from "react";
import { Button, Input, Table, Label } from "reactstrap";

function Search({
  addToCart,
  deleteProduct,
  filteredProducts,
  handleSearchName,
  filteredProduct,
  cart,
}) {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (e) => {
    e.preventDefault();
    setQuantity(e.target.value);
  };

  return (
    <div className="rowContainer">
      <Input
        className="form-control"
        onChange={(e) => handleSearchName(e.target.value)}
        placeholder="Search..."
        value={filteredProduct}
      />

      <Label for="Quantity">Quantity</Label>
      <Input
        placeholder="Quantity"
        type="number"
        id="Quantity"
        onFocus={(e) => {
          e.preventDefault();
          setQuantity("");
        }}
        min={1}
        step="1"
        value={quantity}
        onChange={(e) => handleQuantityChange(e)}
      />

      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((item, index) => (
            <tr key={item._id}>
              <th scope="row">{index + 1}</th>
              <td>{item.item}</td>
              {/* <td>{item.price}</td> */}
              <td>{new Intl.NumberFormat("ar-TN").format(item.price)}</td>
              <td>
                <Button
                  color="primary"
                  // Rq:  You can convert a truthy or falsy value to true boolean with the !! operator.
                  disabled={
                    quantity === "0" ||
                    quantity === 0 ||
                    quantity === "" ||
                    !!cart.find((el) => el.item === item.item)
                  }
                  onClick={(e) => {
                    addToCart(item._id, quantity);
                    setQuantity("");
                    // localStorage.setItem(
                    //   `${item.item}`,
                    //   JSON.stringify({ ...item, quantity })
                    // );
                  }}
                >
                  Add
                </Button>
              </td>
              <td>
                <Button color="danger" onClick={() => deleteProduct(item._id)}>
                  delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Search;
