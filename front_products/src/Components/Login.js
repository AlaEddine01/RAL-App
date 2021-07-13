import { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import { withRouter } from "react-router-dom";
import axios from "axios";

function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const loginUser = async () => {
    await axios
      .post("/login", { email: userName, password })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          props.setIsAuth(true);
          props.history.push("/cart");
        }
      })
      .catch((err) => setError(err.response.data));
  };

  return (
    <Form style={{ margin: "100px 15px" }}>
      <FormGroup>
        <Label for="username">Nom d'utilisateur</Label>
        <Input
          type="text"
          id="username"
          placeholder="Nom d'utilisateur"
          value={userName}
          // onBlur={setError(null)}
          onChange={(e) => {
            setError(null)
            setUserName(e.target.value);
          }}
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Mot de passe</Label>
        <Input
          type="password"
          id="password"
          placeholder="Mot de passe"
          value={password}
          // onBlur={setError(null)}
          onChange={(e) => {
            setError(null)
            setPassword(e.target.value);
            
          }}
          />
      </FormGroup>
      <hr />
      {error && <Alert color="warning"> {error} </Alert>}
      <Button
        className="form-control"
        disabled={error || userName === "" || password === ""}
        onClick={() => {
          loginUser();
        }}
        >
        Connecter
      </Button>
    </Form>
  );
}

export default withRouter(Login);
