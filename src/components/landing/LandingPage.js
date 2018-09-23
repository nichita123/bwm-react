import React, { Component } from "react";
import { LandingForm } from "./LandingForm";
import { Footer } from "../shared/Footer";
import { Container, Row, Col } from "reactstrap";

class LandingPage extends Component {
  render() {
    const style = {
      width: "100%",
      height: "0px",
      position: "relative",
      paddingBottom: "56.250%"
    };
    const style2 = {
      width: "100%",
      height: "100%",
      position: "absolute",
      left: "0px",
      top: "0px",
      overflow: "hidden"
    };

    return (
      <section id="landing-page">
        <Container>

          <div className="landing-background" />

          <Row>
            <Col>
              <div className="text-center landing-title">
                <h1>Friend's Apartment</h1>
                <h3>"Your new friend's place"</h3>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md="3" xs="12">
              <div className="align-center no-padding">
                <LandingForm />
              </div>
            </Col>
            <Col md={{size: 6}}>
              <div className="main-col">
                <h2>Who are we?</h2>
                <div style={style}>
                  <iframe
                    src="https://streamable.com/s/t6our/kdcobr?autoplay=1&muted=1"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    style={style2}
                  />
                </div>
              </div>
            </Col>
            <Col md={{offset: 2}} />
          </Row>
        </Container>
        <Footer />
      </section>
    );
  }
}

export default LandingPage;
