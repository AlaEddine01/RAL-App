import { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from "reactstrap";
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
            <Link to="/">
              <NavItem>
                <NavLink>Cart</NavLink>
              </NavItem>
            </Link>
            <Link to="/search">
              <NavItem>
                <NavLink>Search</NavLink>
              </NavItem>
            </Link>
            <Link to="/add">
              <NavItem>
                <NavLink>Add</NavLink>
              </NavItem>
            </Link>
            <NavItem>
              <NavLink
                onClick={() => {
                  localStorage.removeItem("token");
                  props.history.push('/login')
                }}
              >
                LogOut
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default withRouter(NavBar);
