import React from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Navbar bg="white" expand="lg" className="py-2">
        <Container fluid>
          <Navbar.Brand href="#" className="fw-bold fs-3 text-success">
            Crypto
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Button variant="outline-dark" className="me-2">
              Ethereum Kovan
            </Button>
            <button className="btn btn-outline-success fw-bold me-2">
              Connect Wallet
            </button>
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
                          Login
                        </Link>
                        <Link
                          to="/"
                          className="text-decoration-none text-dark fw-bold"
                        >
                          Sign Up
                        </Link>
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Button variant="secondary" className="rounded-circle">
                    <img
                      style={{ width: "25px" }}
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
