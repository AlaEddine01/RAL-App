import React, { useState } from "react";
import axios from "axios";
import { Alert, Button, Form, FormGroup, Input, Label } from "reactstrap";

function AddItem({ getAllItems }) {
  const [product, setProduct] = useState({ item: "", price: "" });
  const [error, setError] = useState({ status: "", message: "" });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setProduct((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const addProduct = async (e) => {
    e.preventDefault();
    // console.log("Product Added");
    const newProduct = {
      item: product.item.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase()),
      price: product.price,
    };
    await axios
      .post("/addItem", newProduct)
      .then((res) => {
        // res.status === 200 && getAllItems();
        if (res.status === 200) {
          getAllItems();
          setProduct({ item: "", price: "" });
        }
      })
      // .then(setProduct({ item: "", price: "" }))
      .catch((error) => {
        // console.log(error.response.data);
        setError({ status: error.response.status, message: error.response.data });
      });
  };

  return (
    <div className="rowContainer">
      <h4>Add A New Product</h4>
      {error.message !== "" ? (
        // Show Error
        <>
          <Alert color="danger">
            {`${error.message}:`}
            <br />
            {`Item: ${product.item}`}
            <br />
            {`Price: ${product.price}`}
          </Alert>
          <Button
            onClick={(e) => {
              setError({ message: "", status: "" });
              setProduct({ item: "", price: "" });
            }}
          >
            OK
          </Button>
        </>
      ) : (
        <Form>
          <FormGroup>
            <Label for="item">Item</Label>
            <Input
              type="text"
              id="item"
              placeholder="Item"
              name="item"
              onChange={handleChange}
              value={product.item.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                letter.toUpperCase()
              )}
            />
          </FormGroup>
          <FormGroup>
            <Label for="price">Price</Label>
            <Input
              type="number"
              id="price"
              placeholder="Price"
              name="price"
              onChange={handleChange}
              value={product.price}
            />
          </FormGroup>
          <Button
            color="success"
            disabled={product.item === "" || product.price === ""}
            onClick={addProduct}
          >
            Add New Product
          </Button>
        </Form>
      )}
    </div>
  );
}

export default AddItem;
