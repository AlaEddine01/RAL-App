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
              <Link to="/cart">Panier</Link>
            </NavbarText>
            <NavbarText>
              <Link to="/search">Rechercher</Link>
            </NavbarText>
            <NavbarText>
              <Link to="/add">Ajouter</Link>
            </NavbarText>
            <Button
              outline
              color="danger"
              onClick={() => {
                props.setCart([]);
                localStorage.removeItem("token");
                props.history.push("/");
              }}
            >
              Quitter
            </Button>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default withRouter(NavBar);
