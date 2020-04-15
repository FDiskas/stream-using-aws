import React from 'react';

import awsVideoConfig from './aws-video-exports';
import 'video.js/dist/video-js.css';
import { VideoPlayer } from './Video';

const videoJsOptions = {
  autoplay: true,
  controls: true,
  sources: [
    {
      src: awsVideoConfig.awsOutputLiveLL,
    },
  ],
};

export function App() {
  return (
    <div>
      <nav style={nav}>
        <p style={navHeading}>Live Streaming with React & AWS</p>
      </nav>
      <div style={container}>
        <VideoPlayer {...videoJsOptions} />
      </div>
    </div>
  );
}

const nav = { padding: '0px 40px', height: 60, borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center' };
const container = { paddingTop: 40, width: 960, margin: '0 auto' };
const navHeading = { margin: 0, fontSize: 18 };
