import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Input, Table, Label, Navbar, Spinner } from "reactstrap";

function Search({ setCart, cart }) {
  const [products, setProducts] = useState([]);

  const [quantity, setQuantity] = useState(0);

  const [filteredProduct, setFilteredProduct] = useState("");

  const [loading, setLoading] = useState(false);

  const getAllItems = async () => {
    setLoading(true);
    await axios
      .get("/get", {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
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

  const addToCart = async (_id, quantity) => {
    setLoading(true);
    await axios
      .get(`/display_Product/${_id}`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        const newObj = res.data;
        const qtyObj = { quantity: quantity };
        const returnedTarget = Object.assign(newObj, qtyObj);
        setCart(cart.concat(returnedTarget));
        setFilteredProduct("");
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getAllItems();
    return () => {
      console.log("cleanup Search");
    };
  }, []);

  let filteredProducts = [];
  filteredProducts = products.filter((product) =>
    product.item.toUpperCase().includes(filteredProduct.toUpperCase())
  );

  return (
    <div className="rowContainer">
      <Navbar color="light" light sticky="top">
        <Label for="search">Produit</Label>
        <Input
          type="text"
          id="search"
          className="form-control"
          placeholder="Nom du produit"
          onChange={(e) => setFilteredProduct(e.target.value)}
          value={filteredProduct}
        />

        <Label for="quantity">Quantité</Label>
        <Input
          type="number"
          id="quantity"
          className="form-control"
          placeholder="Quantité"
          onFocus={(e) => {
            e.preventDefault();
            setQuantity("");
          }}
          min={0.01}
          step="0.01"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        {filteredProducts.length > 1 ? (
          <p>{filteredProducts.length} produits trouvés</p>
        ) : (
          <p>{filteredProducts.length} produit trouvé</p>
        )}
      </Navbar>
      {loading ? (
        <center>
          <Spinner color="success" children="" />
        </center>
      ) : (
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Produit</th>
              <th>P.U</th>
              <th>#</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((item, index) => (
              <tr key={item._id}>
                <th scope="row">{index + 1}</th>
                <td>{item.item}</td>
                <td>{new Intl.NumberFormat("ar-TN").format(item.price)}</td>
                <td>
                  <Button
                    color="primary"
                    // Rq:  You can convert a truthy or falsy value to true boolean with the !! operator.(used in cart.find)
                    disabled={
                      quantity === "0" ||
                      quantity === 0 ||
                      quantity === "" ||
                      !!cart.find((el) => el.item === item.item)
                    }
                    onClick={(e) => {
                      addToCart(item._id, quantity);
                      setQuantity("");
                    }}
                  >
                    Ajouter
                  </Button>
                </td>
                <td>
                  <Button color="danger" onClick={() => deleteProduct(item._id)}>
                    Supprimer
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default Search;
