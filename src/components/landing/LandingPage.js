import React, { Component } from 'react';
import { LandingForm } from './LandingForm';
import { Footer } from '../shared/Footer';
import BackgroundVideo from './BackgroundVideo';

class LandingPage extends Component {
  render() {
    return (
      <section id="landing-page">
        <div id="video_cover">
          <BackgroundVideo />
        </div>
        <div className="main">
          <div className="container overlay">

            <div className="row">
              <div className="col-md-12 text-center landing-title">
                <h1>Friend's Apartment</h1>
                <h3>"Your new friend's place"</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md col-sm-12">
                <LandingForm />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </section>
    )
  }
}

export default LandingPage;