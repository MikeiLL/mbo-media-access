// External Dependencies
import React, { Component, Fragment } from 'react';

// Internal Dependencies
import './mindbodyaudio.css';
// for getting data from backend to builder
// see: https://github.com/elegantthemes/create-divi-extension/issues/23

class MindbodyAudio extends Component {

  static slug = 'mbma_mindbody_audio';

  render() {
    const title = this.props.title;
    const artist_name = this.props.artist_name;
    const description = this.props.description;
    const audio = this.props.audio;
    // Maybe use dangerouslySetInnerHTML={{__html: this.props.__audio}} 
    return (
      <Fragment>
        
        <div className="et_pb_module mbma_mindbody_audio_0 et_pb_audio_module clearfix et_pb_bg_layout_dark et_pb_audio_no_image">
            <div className="et_pb_module_inner">
                <div className="et_pb_module mbma_mindbody_audio_0 et_pb_audio_module clearfix et_pb_bg_layout_dark et_pb_audio_no_image">
                    <div className="et_pb_audio_module_content et_audio_container">
                        <h2 className="et_pb_module_header">{title}</h2>
                        <p className="et_audio_module_meta">with <strong>{artist_name}</strong></p>
                        <span className="mejs-offscreen">Audio Player</span>
                        <div id="mep_1" className="mejs-container mejs-container-keyboard-inactive wp-audio-shortcode mejs-audio" 
                        tabIndex="0" role="application" 
                        aria-label="Audio Player" 
                        style={{ width: '795.15px', height: '40px', min_width: '236px'}} >
                            <div className="mejs-inner">
                                <div className="mejs-mediaelement">
                                    <audio className="wp-audio-shortcode" id="audio-6-1_html5" preload="none" style={{width: '100%', height: '100%'}} src="{audio}">
                                    <source type="audio/mpeg" src="{audio}"/>
                                    <a href="{audio}">{audio}</a></audio>
                                </div>
                                
                                <div className="mejs-layers">
                                    <div className="mejs-poster mejs-layer" style={{display:'none',width:'100%',height:'100%'}}></div>
                                </div>
                                <div className="mejs-controls">
                                    <div className="mejs-button mejs-playpause-button mejs-play">
                                        <button type="button" aria-controls="mep_1" title="Play" aria-label="Play" tabIndex="0"></button>
                                    </div>
                                    <div className="mejs-time mejs-currenttime-container" role="timer" aria-live="off">
                                        <span className="mejs-currenttime">00:00</span>
                                    </div>
                                    <div className="mejs-time-rail">
                                        <span className="mejs-time-total mejs-time-slider">
                                        <span className="mejs-time-buffering" style={{display:'none'}}></span>
                                        <span className="mejs-time-loaded"></span>
                                        <span className="mejs-time-current"></span>
                                        <span className="mejs-time-hovered no-hover"></span>
                                        <span className="mejs-time-handle">
                                            <span className="mejs-time-handle-content"></span>
                                        </span>
                                        <span className="mejs-time-float">
                                            <span className="mejs-time-float-current">00:00</span>
                                        <span className="mejs-time-float-corner"></span>
                                        </span>
                                        </span>
                                    </div>
                                    <div className="mejs-time mejs-duration-container">
                                        <span className="mejs-duration">00:00</span>
                                    </div>
                                    <div className="mejs-button mejs-volume-button mejs-mute">
                                        <button type="button" aria-controls="mep_1" title="Mute" aria-label="Mute" tabIndex="0"></button>
                                    </div>{// eslint-disable-next-line
}                                   <a className="mejs-horizontal-volume-slider" href="javascript:void(0);" aria-label="Volume Slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100" role="slider">
                                        <span className="mejs-offscreen">Use Up/Down Arrow keys to increase or decrease volume.</span>
                                        <div className="mejs-horizontal-volume-total">
                                            <div className="mejs-horizontal-volume-current" style={{ left: '0', width: '100%' }}></div>
                                            <div className="mejs-horizontal-volume-handle" style={{ left: '100%', left_margin: '-5px' }}></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
				<div className="wp-audio-description-wrapper">
				    <p className="wp-audio-description">{description}</p>
				</div>
				<div className="wp-audio-price-signup">{// eslint-disable-next-line
}                   <a href="#">Buy ($$) </a> | <a href="#">Subscribe</a>
				</div>
                    </div>
                </div>
            </div>
        </div>
        
      </Fragment>
    );
  }
}

export default MindbodyAudio;
