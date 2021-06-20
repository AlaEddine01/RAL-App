import { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavbarText, Button } from "reactstrap";
function NavBar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="sm">
        {/* <NavbarBrand href="/">Ral App</NavbarBrand> */}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavbarText>
              <Link to="/cart">Cart</Link>
            </NavbarText>
            <NavbarText>
              <Link to="/search">Search</Link>
            </NavbarText>
            <NavbarText>
              <Link to="/add">Add</Link>
            </NavbarText>
            <Button
              outline
              color="danger"
              onClick={() => {
                localStorage.removeItem("token");
                props.history.push("/");
              }}
            >
              LogOut
            </Button>
            {/* <NavbarText
              style={{ cursor: "pointer" }}
              onClick={() => {
                localStorage.removeItem("token");
                props.history.push("/login");
              }}
            >
              LogOut
            </NavbarText> */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default withRouter(NavBar);
