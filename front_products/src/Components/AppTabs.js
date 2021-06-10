import React, { useEffect, useState, useRef } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from "reactstrap";
import classnames from "classnames";
import axios from "axios";
import AddItem from "./AddItem";
import Search from "./Search";
import Cart from "./Cart";
import { useReactToPrint } from "react-to-print";

const AppTabs = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: `size: 302.36px 188.98px`,
  });
  const [activeTab, setActiveTab] = useState("1");
  const [clientName, setClientName] = useState("");

  const handleClientName = (e) => {
    e.preventDefault();
    // this.setState({ clientName: e.target.value });
    setClientName(e.target.value);
  };

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const [products, setProducts] = useState([]);

  const getAllItems = async () => {
    await axios.get("/get").then((res) => {
      setProducts(res.data);
    });
  };

  const [cart, setCart] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState("");

  useEffect(() => {
    getAllItems();
    searchDate();
  }, []);

  // const editProduct=async (_id)=>{
  //   await axios.put(`http://localhost:5000/Update_Product/${_id}`,)
  // }

  const addToCart = async (_id, quantity) => {
    await axios
      .get(`/display_Product/${_id}`)
      .then((res) => {
        const newObj = res.data;
        const qtyObj = { quantity: quantity };
        const returnedTarget = Object.assign(newObj, qtyObj);
        setCart(cart.concat(returnedTarget));
        setFilteredProduct("");
        // console.log(returnedTarget)
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const deleteProduct = async (_id) => {
    await axios.delete(`/Delete_Product/${_id}`).then((res) => {
      res.status === 200 && getAllItems();
    });
  };

  const handleSearchName = (input) => {
    setFilteredProduct(input);
  };

  const editCart = (newCart) => {
    setCart(newCart);
  };

  const [dateForNow, setDateForNow] = useState("");
  const searchDate = () => {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var secondes = today.getSeconds();
    if (day < 10) {
      day = "0" + day;
    }

    if (month < 10) {
      month = "0" + month;
    }

    if (hours < 10) {
      hours = "0" + hours;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (secondes < 10) {
      secondes = "0" + secondes;
    }

    today = day + "/" + month + "/" + year + "-" + hours + ":" + minutes + ":" + secondes;
    // console.log(today);
    setDateForNow(today);
  };
  setInterval(searchDate, 1000);

  let filteredProducts = [];
  filteredProducts = products.filter((product) =>
    product.item.toUpperCase().includes(filteredProduct.toUpperCase())
  );

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Cart
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Add To Cart
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            New Product
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <Cart
                cart={cart}
                ref={componentRef}
                editCart={editCart}
                clientName={clientName}
                handleClientName={handleClientName}
                dateForNow={dateForNow}
              />
              <button disabled={clientName === ""} onClick={handlePrint}>
                Print this out!
              </button>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <Search
                filteredProducts={filteredProducts}
                cart={cart}
                addToCart={addToCart}
                deleteProduct={deleteProduct}
                handleSearchName={handleSearchName}
                filteredProduct={filteredProduct}
              />
              {/* {JSON.stringify(localStorage.getItem("Cart"))} */}
              {/* {cart.length !== 0 && localStorage.setItem("Cart", JSON.stringify(cart))} */}
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <AddItem getAllItems={getAllItems} />
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default AppTabs;
