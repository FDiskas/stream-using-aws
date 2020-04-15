import React from 'react';
import videoJs, { VideoJsPlayer, VideoJsPlayerOptions } from 'video.js';

export class VideoPlayer extends React.Component<VideoJsPlayerOptions> {
  player: VideoJsPlayer | null = null;

  videoNode = React.createRef<HTMLVideoElement>();

  componentDidMount() {
    this.player = videoJs(this.videoNode.current, this.props);
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    return (
      <React.Fragment>
        <div
          data-vjs-player
          style={{
            width: 960,
            height: 540,
          }}
        >
          <video ref={this.videoNode} className="video-js" />
        </div>
      </React.Fragment>
    );
  }
}
