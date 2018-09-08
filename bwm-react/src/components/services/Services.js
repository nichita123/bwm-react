import React, { Component } from 'react';
// import { InfoBox } from './InfoBox';

class Services extends Component {
  render() {
    return (
      <section id="services">
        <div className="main">
          <div className="landing-background_2" />
          <div className="container">
            <div className="row">

              <div className="col-md-8">
                <div className="row">

                  <div className="col-12">
                    <div className="steps">
                      <span>1. APARTMENT</span>
                      <span>2. ADD SERVICES</span>
                      <span>3. CONFIRM AND PAY</span>
                    </div>
                  </div>

                </div>
              </div>

              <div className="col-md-4">
                {/* <InfoBox /> */}
              </div>

            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Services;