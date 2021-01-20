// External Dependencies
import React, { Component, Fragment } from 'react';

// Internal Dependencies
// import './style.css';
// for getting data from backend to builder
// see: https://github.com/elegantthemes/create-divi-extension/issues/23

class MindbodyVideo extends Component {

  static slug = 'mboma_mindbody_video';

  render() {
    return (
      <Fragment>
        
        <div class="et_pb_module et_pb_video et_pb_video_0">
				
				
				<div class="et_pb_video_box">
				    <video controls="">
					    <source type="video/mp4" src="http://local.divi-dev.site/wp-content/uploads/2021/01/Lightbulbs-Moving-in-the-Wind.webm"/>
					
				    </video>
				</div>
				
			</div>
        
      </Fragment>
    );
  }
}

export default MindbodyVideo;
