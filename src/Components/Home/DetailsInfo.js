import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import ReCAPTCHA from "react-google-recaptcha";

const DetailsInfo = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <section className="p-4" style={{ backgroundColor: "#EEF2FE" }}>
      <div className="w-50 mt-4">
        <h1 className="text-success">Request Testnet LINK</h1>
        <p className="fw-bold text-muted">
          Get testnet LINK for an account on one of the supported blockchain
          testnets so you can create and test your own oracle and Chainlinked
          smart contract
        </p>
      </div>
      <div className="pt-4">
        <Card>
          <Card.Body>
            <p
              style={{ backgroundColor: "#EEF2FE" }}
              className="py-2 text-center"
            >
              Your wallet is connected to{" "}
              <span className="fw-bold">Ethereum Kovan</span>, so you are
              requesting <span className="fw-bold">Ethereum Kovan</span>{" "}
              Link/ETH.
            </p>
            <Row>
              <Col>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasictext">
                    <Form.Label className="text-success">
                      Wallet Address
                    </Form.Label>
                    <Form.Control type="text" placeholder="Wallet Address" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="text-success">
                      Request Type
                    </Form.Label>
                    <div className="d-flex gap-2">
                      <Form.Control
                        className="border-0"
                        disabled
                        type="text"
                        placeholder="20 Test Link"
                      />
                      <Form.Control
                        className="border-0"
                        type="text"
                        placeholder="0.5 ETH"
                        disabled
                      />
                    </div>
                  </Form.Group>
                  <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={onChange}
                  />
                  ,
                  <Button variant="success" className="mt-2">
                    Send Request
                  </Button>
                </Form>
              </Col>
              <Col>
                <h6>Request History</h6>
                <Button variant="success" className="m-3">
                  ETH Transaction History
                </Button>
                <Button variant="success">TestLink Transaction History</Button>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Sr</th>
                      <th>Time</th>
                      <th>Amount</th>
                      <th>Hash</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>12:30 AM</td>
                      <td>487</td>
                      <td>4s8er5s5fe57rjmxnfuewrurks</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>10:30</td>
                      <td>875</td>
                      <td>sf7s7ers4e7r7wser</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>11:30</td>
                      <td>797</td>
                      <td>se4s7er7</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
};

export default DetailsInfo;
