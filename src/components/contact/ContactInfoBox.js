import React from "react";
import Mail from "../../assets/images/mail.png";
import Phone from "../../assets/images/phone.png";
import Location from "../../assets/images/location.png";

import BigBus from "../../assets/images/BIGBUS.png";
import BudaPest from "../../assets/images/BUDAPEST.png";
import HopOnHopOff from "../../assets/images/hop on hop off.png";
import TransferPlus from "../../assets/images/transfer plus.png";

import { Container, Row, Col } from "reactstrap";

export function ContactInfoBox() {
  const style = {
    marginBottom: "15px"
  };
  const style_2 = {
    alignSelf: "center"
  };
  return (
    <div className="contact-info">
      <div className="contact-info-header">
        <Row>
          <Col md="12" style={style}>
            <Row>
              <Col xs="2" style={style_2}>
                <img src={Mail} alt="mail" />
              </Col>
              <Col xs="10">
                <span>friendsaptcorp@gmail.com</span>
              </Col>
            </Row>
          </Col>
          <Col md="12" style={style}>
            <Row>
              <Col xs="2" style={style_2}>
                <img src={Phone} alt="phone" />
              </Col>
              <Col xs="10">
                <span>+36 20 345 0578</span>
                <br />
                <span>+36 20 368 5052</span>
              </Col>
            </Row>
          </Col>
          <Col md="12" style={style}>
            <Row>
              <Col xs="2" style={style_2}>
                <img src={Location} alt="phone" />
              </Col>
              <Col xs="10">
                <span>Szervita tér 5, Budapest, 1052</span>
              </Col>
            </Row>
          </Col>
          <Col md="12" className="contact-info-footer" style={{
            marginTop: '75px'
          }}>
            <h5 className="partners">Link to our Partners:</h5>
            <span>
              <img src={BigBus} alt="BigBus" />
            </span>
            <span>
              <img src={TransferPlus} alt="TransferPlus" />
            </span>
            <span>
              <img src={HopOnHopOff} alt="HopOnHopOff" />
            </span>
            <span>
              <img src={BudaPest} alt="BudaPest" />
            </span>
          </Col>
        </Row>
      </div>
    </div>
  );
}
