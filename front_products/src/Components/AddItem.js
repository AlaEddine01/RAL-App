import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Alert, Button, Form, FormGroup, Label } from "reactstrap";

function AddItem({ getAllItems }) {
  const [product, setProduct] = useState({ item: "", price: "" });

  const [error, setError] = useState({ status: "", message: "" });
  const [success, setSuccess] = useState(null);

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
          setSuccess(res.data);
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
      <h4>Ajouter un nouveau produit</h4>
      {error.message !== "" ? (
        // Show Error
        <>
          <Alert color="danger">
            {`${error.message}:`}
            <br />
            {`Produit: ${product.item}`}
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
      ) : success != null ? (
        <>
          <Alert color="primary">
            {`Produit ajouté avec succès`}
            <br />
            {`Produit: ${success.item}`}
            <br />
            {`Prix: ${success.price}`}
          </Alert>
          <Button
            outline
            size="lg"
            onClick={(e) => {
              setSuccess(null);
              setProduct({ item: "", price: "" });
            }}
          >
            OK
          </Button>
        </>
      ) : (
        <Form>
          <FormGroup>
            <Label for="item">Produit</Label>
            <input
              ref={nameRef}
              className="form-control"
              type="text"
              id="item"
              placeholder="Nom du produit"
              name="item"
              onKeyDown={onFirstInputKey}
              onChange={handleChange}
              value={product.item.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                letter.toUpperCase()
              )}
            />
          </FormGroup>
          <FormGroup>
            <Label for="price">Prix</Label>
            <input
              ref={priceRef}
              className="form-control"
              type="number"
              id="price"
              placeholder="Prix"
              name="price"
              onKeyDown={onLastInputKey}
              onChange={handleChange}
              value={product.price}
            />
          </FormGroup>
          <hr />
          <center>
            <button
              ref={addRef}
              className="btn btn-success"
              // color="success"
              disabled={product.item === "" || product.price === ""}
              onClick={addProduct}
            >
              Ajouter à la base de données
            </button>
          </center>
        </Form>
      )}
    </div>
  );
}

export default AddItem;
