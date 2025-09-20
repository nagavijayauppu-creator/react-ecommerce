import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import "./searchbar.css";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/fashion-logo-design.jpg";

function Searchbar() {
  //   const handleLogout = () => {
  //     localStorage.clear();
  //     navigate("/");
  //   };

  return (
    <Navbar className="bg-body-tertiary justify-content-center">
      <Navbar.Brand>
        <img
          src={Logo}
          alt="Logo"
          width="120"
          height="60"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Form inline>
        <InputGroup>
          <InputGroup.Text className="searchicon">
            <FontAwesomeIcon icon={faSearch} />
          </InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Search for Products .."
            className="searchbar"
          />
        </InputGroup>
      </Form>
    </Navbar>
  );
}

export default Searchbar;
