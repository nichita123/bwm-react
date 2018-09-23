import React, { Component } from "react";
import { ContactInfoBox } from "./ContactInfoBox";
import  EmailForm  from "./EmailForm";

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="landing-background_2" />

        <div className="container">
          <div className="container-fluid">
            <div className="contact-box">
              <div className="row">
                <div className="col-12">
                  <div className="contact-header">
                    <h1>We provide friendly service!</h1>
                    <h4>Your satisfaction is very important for us!</h4>
                    <p>
                      If you have any questions or request regarding our
                      services or reservation we are glad to help. Please inform
                      us about any querie through the steps below:
                    </p>
                  </div>
                </div>

                <div className="col-md-6 col-sm-12">
                  <EmailForm />
                </div>
                <div className="col-md-6 col-sm-12">
                  <ContactInfoBox />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
