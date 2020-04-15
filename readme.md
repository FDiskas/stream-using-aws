# Serverless Live streaming platform using AWS (MediaLive & Amplify)

## Global Requirements
1. Amplify CLI
    - `npm i -g @aws-amplify/cli`
1. Amplify Video CLI plugin
    - `npm i -g amplify-category-video`
1. OBS (Open Broadcaster Software)
    - Download from https://obsproject.com/


## Local Requirements
1. VideoJS
    - `yarn add video.js`
1. React
    - `yarn add react react-dom`
    - `yarn add -D @types/react @types/react-dom`
1. Parcel bundler
    - `yarn add parcel`
1. Prettier
    - `yarn add -D prettier`
    - `npx prettier-init`
1. Eslint
    - `npx eslint --init` (skip install)
    - `yarn add -D eslint-plugin-react @typescript-eslint/eslint-plugin eslint-config-airbnb eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react-hooks @typescript-eslint/parser`
1. Integrate prettier with eslint
    - `yarn add -D eslint-config-prettier eslint-plugin-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin typescript`

## Setup
1. `amplify init`
1. `amplify add video`
1. `amplify push`
1. `amplify video setup-obs`

### Example stream urls
#### MediaLive
- MediaLive Primary Ingest Url: rtmp://34.200.200.126:1935/mylivestream-demo-p
- MediaLive Primary Stream Key: mylivestream-demo-p

- MediaLive Backup Ingest Url: rtmp://52.4.64.97:1935/mylivestream-demo-b
- MediaLive Backup Stream Key: mylivestream-demo-b

#### MediaStore
- MediaStore Output Url: https://z225cs2ufcdeqk.data.mediastore.us-east-1.amazonaws.com/p/index.m3u8
- Demo video: https://vjs.zencdn.net/v/oceans.mp4

## Reference
- https://github.com/awslabs/amplify-video/blob/master/live-quickstart.md