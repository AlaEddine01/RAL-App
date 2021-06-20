import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Alert, Button, Form, FormGroup, Label } from "reactstrap";

function AddItem({ getAllItems }) {
  const [product, setProduct] = useState({ item: "", price: "" });

  const [error, setError] = useState({ status: "", message: "" });

  const nameRef = useRef();
  const priceRef = useRef();
  const addRef = useRef();

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
    const newProduct = {
      item: product.item.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase()),
      price: product.price,
    };
    await axios
      .post("/addItem", newProduct, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setProduct({ item: "", price: "" });
        }
      })
      .catch((error) => {
        setError({ status: error.response.status, message: error.response.data });
      });
  };
  useEffect(() => {
    nameRef.current.focus();
  }, []);

  function onFirstInputKey(e) {
    if (e.key === "Enter") {
      priceRef.current.focus();
    }
  }
  function onLastInputKey(e) {
    if (e.key === "Enter") {
      addRef.current.focus();
    }
  }
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
            outline
            size="lg"
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
            <input
              ref={nameRef}
              className="form-control"
              type="text"
              id="item"
              placeholder="Item"
              name="item"
              onKeyDown={onFirstInputKey}
              onChange={handleChange}
              value={product.item.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                letter.toUpperCase()
              )}
            />
          </FormGroup>
          <FormGroup>
            <Label for="price">Price</Label>
            <input
              ref={priceRef}
              className="form-control"
              type="number"
              id="price"
              placeholder="Price"
              name="price"
              onKeyDown={onLastInputKey}
              onChange={handleChange}
              value={product.price}
            />
          </FormGroup>
          <hr />
          <button
            ref={addRef}
            className="btn btn-success"
            // color="success"
            disabled={product.item === "" || product.price === ""}
            onClick={addProduct}
          >
            Add New Product
          </button>
        </Form>
      )}
    </div>
  );
}

export default AddItem;
