// External Dependencies
import React, { Component, Fragment } from 'react';

// Internal Dependencies
// import './style.css';


class MindbodyAudio extends Component {

  static slug = 'mboma_mindbody_audio';

  render() {
    const audio = this.props.audio;
    console.log(this.props)
    // I'd like to be using this.props.__audio here.
    return (
      <Fragment>
        
        <audio className="wp-audio-shortcode" id="audio-0-1_html5" preload="none" style={{width: '100%', height: '100%'}} src="{audio}">
          <source type="audio/mpeg" src="{audio}"/>
          <a href="{audio}">{audio}
          </a>
        </audio>
        
      </Fragment>
    );
  }
}

export default MindbodyAudio;
