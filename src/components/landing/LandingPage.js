import React, { Component } from 'react';
import { LandingForm } from './LandingForm';
import { Footer } from '../shared/Footer';

class LandingPage extends Component {
  render() {

    const style = {
      width: '100%',
      height: '0px',
      position: 'relative',
      paddingBottom: '56.250%'
    }
    const style2 = {
      width: '100%',
      height: '100%',
      position: 'absolute',
      left: '0px',
      top: '0px',
      overflow: 'hidden'
    }

    return (
      <section id="landing-page" >
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="landing-background" />
              <div className="col-md-12 text-center landing-title">
                <h1>Friend's Apartment</h1>
                <h3>"Your new friend's place"</h3>
              </div>
              <div className="col-md col-sm-12 align-center no-padding">
                <LandingForm />
              </div>
              <div className="col-md-8 col-sm-12 main-col">
                <h2>Who are we?</h2>
                <div
                  style={style}
                ><iframe src="https://streamable.com/s/t6our/kdcobr?autoplay=1&muted=1"
                  frameBorder="0"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  style={style2}>
                  </iframe>
                </div>
              </div>
              <div className="col-md col-sm-12" />
            </div>
          </div>
          <Footer />
        </div>
      </section >
    )
  }
}

export default LandingPage;