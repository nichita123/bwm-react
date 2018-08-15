import React, { Component } from 'react';
import { LandingForm } from './LandingForm';
import { Footer } from '../shared/Footer';


class LandingPage extends Component {
  render() {
    return (
      <section id="landing-page">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="landing-background" />
              <div className="col-md-12 text-center landing-title">
                <h1>Friend's Apartment</h1>
                <h3>"Your new friend's place"</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md col-sm-12">
                <LandingForm />
              </div>
              <div className="col-md-8 col-sm-12 main-col">
                <h2>Who are we?</h2>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe 
                  title="Landin video about corp"
                  src="https://streamable.com/s/i7rws/vvtilb" frameBorder="0" allowFullScreen className="landing-video embed-responsive-item" />
                </div>
              </div>
              <div className="col-md col-sm-12">
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