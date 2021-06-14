import { Container, Button } from "reactstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AppTabs from "./Components/AppTabs";
import Login from "./Components/Login";
import { useEffect, useState } from "react";
import axios from "axios";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  const [isAuth, setIsAuth] = useState(true);
  const [token, setToken] = useState("");

  const checkToken = async () => {
    await axios
      .get("/validateToken", {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        // console.log(token);
        if (response.data === "User is Authenticated") {
          setIsAuth(true);
        }
      })
      .catch((err) => {
        setIsAuth(false);
      });
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  });

  useEffect(() => {
    checkToken();
  }, [token]);
  return (
    <Router>
      <Switch>
        <Container>
          {/* "proxy": "https://ral-app.herokuapp.com", */}
          <ProtectedRoute
            exact
            path="/"
            isAuth={isAuth}
            component={AppTabs}
            token={token}
            checkToken={checkToken}
          />
          {/* <Route exact path="/"> */}
          {/* <AppTabs token={token} checkToken={checkToken} /> */}
          {/* </Route> */}
          <Route exact path="/login">
            <Login setIsAuth={setIsAuth} />
          </Route>
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
