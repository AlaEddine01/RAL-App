import { Button } from "reactstrap";

function Menu() {
  return (
    <Button
      className="form-control"
      onClick={() => {
        localStorage.removeItem("token");
      }}
    >
      Log Out
    </Button>
  );
}

export default Menu;
