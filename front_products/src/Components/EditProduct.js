import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from "reactstrap";

function EditProduct(props) {
  const { productToChange, getAllItems, modal, toggle } = props;

  const [newProduct, setNewProduct] = useState(productToChange);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setNewProduct((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const updateProduct = async () => {
    const editedProduct = {
      item: newProduct.item.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase()),
      price: newProduct.price,
    };

    await axios
      .put(`/Update_Product/${newProduct._id}`, editedProduct, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        res.status === 200 && getAllItems();
      });
  };

  const deleteProduct = async (_id) => {
    await axios
      .delete(`/Delete_Product/${_id}`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        res.status === 200 && getAllItems();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setNewProduct(productToChange);
  }, [modal, productToChange]);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Label for="item">Item</Label>
          <Input
            type="text"
            name="item"
            id="item"
            value={newProduct.item}
            onChange={handleChange}
          />
          <Label for="price">Price</Label>
          <Input
            type="number"
            name="price"
            id="price"
            value={newProduct.price}
            onChange={handleChange}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={(e) => updateProduct()}>
            Enregistrer
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Fermer
          </Button>
          <Button
            color="danger"
            onClick={(e) => {
              deleteProduct(newProduct._id);
              toggle();
            }}
          >
            Supprimer
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditProduct;
