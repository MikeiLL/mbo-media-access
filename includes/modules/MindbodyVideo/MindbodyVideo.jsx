// External Dependencies
import React, { Component, Fragment } from 'react';

// Internal Dependencies
// import './style.css';
// for getting data from backend to builder
// see: https://github.com/elegantthemes/create-divi-extension/issues/23

class MindbodyVideo extends Component {

  static slug = 'mbma_mindbody_video';

  render() {
    const title = this.props.title;
    const artist_name = this.props.artist_name;
    const description = this.props.description;
    return (
        <Fragment>
             <div className="et_pb_module mbma_mindbody_video mbma_mindbody_video_0">
                <h1>
                    {title} with {artist_name}
                </h1>
                <div className="et_pb_module_inner">
                    <div class="et_pb_module mbma_mindbody_video mbma_mindbody_video_0">
                        <div className="et_pb_video_box">
                            <div dangerouslySetInnerHTML={{ __html: this.props.__video }}></div>
                        </div>
                    </div>
                </div>
                <div>
                    {description}
                </div>
             </div>
        </Fragment>
    );
  }
}

export default MindbodyVideo;
