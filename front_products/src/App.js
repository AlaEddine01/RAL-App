import { useEffect, useState } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Container } from "reactstrap";
import ProtectedRoute from "./Components/ProtectedRoute";
import Login from "./Components/Login";
import NavBar from "./Components/NavBar";
import Search from "./Components/Search";
import AddItem from "./Components/AddItem";
import CartPrinter from "./Components/CartPrinter";

function App(props) {
  const [cart, setCart] = useState([]);

  const [userName, setUserName] = useState("");

  const [isAuth, setIsAuth] = useState(true);
  const [token, setToken] = useState("");

  const checkToken = async () => {
    if (localStorage.getItem("token") !== null){
      await axios
        .get("/validateToken", {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          if (response.data === "User is Authenticated") {
            setIsAuth(true);
            props.history.push('/cart')
          }
        })
        .catch((err) => {
          setIsAuth(false);
        });

    }else{
      setIsAuth(false)
    }
  };
  useEffect(() => {
    const handleUserName = () => {
      if (localStorage.getItem("token") !== null) {
        var Token = localStorage.getItem("token");
        var decoded = jwt_decode(Token);
        setUserName(decoded.email);
      } else {
        // redirection to login page
        props.history.push("/");
      }
    };
    handleUserName();

    return () => {
      console.log("clenup userName");
    };
    // eslint-disable-next-line 
  },[token]);

  const editCart = (newCart) => {
    setCart(newCart);
  };

// eslint-disable-next-line 
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  });

  useEffect(() => {
    checkToken();
  },[token]);


  return (
    <Switch>
      <Container>
        {/* "proxy": "https://ral-app.herokuapp.com", */}
        {isAuth && (
          <Route path="/">
            <NavBar {...props} />
          </Route>
        )}

        <ProtectedRoute
          exact
          path="/cart"
          isAuth={isAuth}
          component={CartPrinter}
          cart={cart}
          userName={userName}
          editCart={editCart}
        />
        <ProtectedRoute
          exact
          path="/search"
          isAuth={isAuth}
          component={Search}
          cart={cart}
          setCart={setCart}
        />
        <ProtectedRoute exact path="/add" isAuth={isAuth} component={AddItem} />
        <Route exact path="/">
          <Login setIsAuth={setIsAuth} />
        </Route>
      </Container>
    </Switch>
  );
}

export default withRouter(App);
