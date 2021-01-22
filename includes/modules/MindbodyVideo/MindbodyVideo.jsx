// External Dependencies
import React, { Component, Fragment } from 'react';

// Internal Dependencies
// import './style.css';
// for getting data from backend to builder
// see: https://github.com/elegantthemes/create-divi-extension/issues/23

class MindbodyVideo extends Component {

  static slug = 'mbma_mindbody_video';

  render() {
    const src_webm = this.props.src_webm;
    const __video = this.props.__video;
    console.log(this.props.__video);
    return (
        <Fragment>
             <div className="et_pb_module mbma_mindbody_video mbma_mindbody_video_0">
                <div className="et_pb_module_inner">
                    <div class="et_pb_module mbma_mindbody_video mbma_mindbody_video_0">
                        <div className="et_pb_video_box">
                            <video controls="">
                                <source type="video/webm" src="{src_webm}"/>
                            </video>
                        </div>
                    </div>
                </div>
             </div>
        </Fragment>
    );
  }
}

export default MindbodyVideo;
