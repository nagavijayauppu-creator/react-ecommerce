import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import { Button } from "react-bootstrap";
import Searchbar from "../Searchbarwithlogo/Searchbar";


function NavigationBar() {
  return (
    <>
    <Searchbar />
    <Navbar expand="lg"  >
      <Container >
         <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-auto text-center " />
        <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="mx-auto text-center " >
            <Nav.Link as={Link} >
              MEN
            </Nav.Link>
            <Nav.Link as={Link} >
              WOMEN
            </Nav.Link>
            <Nav.Link as={Link} >
              KIDS
            </Nav.Link>
            <Nav.Link as={Link} to="/home">
              HOME
            </Nav.Link>
           
            <Nav.Link as={Link} >
              ELECTRONICS
            </Nav.Link>
            <Nav.Link as={Link} >
              NEW ARRIVALS
            </Nav.Link>
            <Button type="submit"variant="danger" className="pe-4 pt-0 ps-4 pb-0" >SALE</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    
  );
}

export default NavigationBar;
