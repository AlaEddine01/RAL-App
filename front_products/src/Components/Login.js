import { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { withRouter } from "react-router-dom";
import axios from "axios";

function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    await axios
      .post("/login", { email: userName, password })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          props.setIsAuth(true);
          props.history.push("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Form style={{ margin: "100px 15px" }}>
      <FormGroup>
        <Label for="username">User Name</Label>
        <Input
          type="text"
          id="username"
          placeholder="User name"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </FormGroup>
      <hr />
      <Button
        className="form-control"
        onClick={() => {
          loginUser();
        }}
      >
        Log In
      </Button>
    </Form>
  );
}

export default withRouter(Login);
