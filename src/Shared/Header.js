import React from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaEthereum } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";

const Header = () => {
  return (
    <nav>
      <Navbar bg="white" expand="lg" className="p-3">
        <Container fluid>
          <Navbar.Brand href="#" className="fw-bold fs-3 text-success">
            Crypto
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Dropdown className="me-2">
              <Dropdown.Toggle
                variant="outline-dark"
                id="dropdown-basic"
                className="text-muted"
              >
                {" "}
                <FaEthereum /> Ethereum Kovan
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="outline-success" className="fw-bold me-2">
              <FaWallet /> Connect Wallet
            </Button>
            <>
              {["bottom"].map((placement) => (
                <OverlayTrigger
                  trigger="click"
                  key={placement}
                  placement={placement}
                  overlay={
                    <Popover id={`popover-positioned-${placement}`}>
                      <Popover.Body className="d-flex flex-column">
                        <Link
                          to="/"
                          className="text-decoration-none text-dark fw-bold"
                        >
                          <Button variant="light" className="w-100">
                            Login
                          </Button>
                        </Link>
                        <Link
                          to="/"
                          className="text-decoration-none text-dark fw-bold"
                        >
                          <Button variant="light">Sign Up</Button>
                        </Link>
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Button variant="secondary" className="rounded-circle">
                    <img
                      style={{ width: "20px" }}
                      src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
                      alt=""
                    />
                  </Button>
                </OverlayTrigger>
              ))}
            </>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default Header;
