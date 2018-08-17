import React, { Component } from 'react';
import VideoCover from 'react-video-cover';
import VideoUrl from '../../assets/video/background-video.mp4';

class BackgroundVideo extends Component {
  render() {
    return (
      <video autoPlay muted>
        <source src={VideoUrl} type="video/mp4" />
      </video>
    );
  }
}

export default BackgroundVideo;