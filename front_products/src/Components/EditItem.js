import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label } from "reactstrap";

const EditItem = (props) => {
  const { modal, toggle, itemToChange, cart, editCart } = props;

  const [newProduct, setNewProduct] = useState(itemToChange);
  const [checkedOrNot, setCheckedOrNot] = useState(false);

  useEffect(() => {
    setNewProduct(itemToChange);
  }, [modal, itemToChange]);

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

  const editProductInDB = async () => {
    const editedProductInDB = {
      item: newProduct.item.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase()),
      price: newProduct.price,
    };

    await axios.put(`/Update_Product/${newProduct._id}`, editedProductInDB).then((res) => {
      res.status === 200 && alert("Product edited in DB");
    });
  };

  const editProductInCart = () => {
    const editedProductInCart = {
      item: newProduct.item.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase()),
      price: newProduct.price,
      quantity: newProduct.quantity,
      _id: newProduct._id,
    };
    const cartCopy = cart.map((el) =>
      el._id === newProduct._id ? { ...cart, ...editedProductInCart } : el
    );
    editCart(cartCopy);
  };

  const deleteProductFromCart = () => {
    const cartCopy = cart.filter((el) => el._id !== newProduct._id);
    editCart(cartCopy);
  };

  return (
    <Modal isOpen={modal}>
      <ModalHeader toggle={toggle}>Edit Item</ModalHeader>
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
        <Label for="quantity">Quantity</Label>
        <Input
          type="number"
          name="quantity"
          id="quantity"
          value={newProduct.quantity}
          onChange={handleChange}
        />
      </ModalBody>

      <ModalFooter>
        <Input
          type="checkbox"
          defaultChecked={checkedOrNot}
          onChange={(e) => {
            setCheckedOrNot(!checkedOrNot);
          }}
        />
        Change Product In DB
        <Button
          color="primary"
          disabled={newProduct === itemToChange}
          onClick={(e) =>
            !checkedOrNot
              ? editProductInCart()
              : (editProductInCart(), editProductInDB(), setCheckedOrNot(false))
          }
        >
          Save
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Close
        </Button>
        <Button color="danger" onClick={(e) => deleteProductFromCart()}>
          Delete
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditItem;
