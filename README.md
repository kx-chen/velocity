# Velocity
[![Build Status](https://travis-ci.com/kx-chen/velocity.svg?token=shUduPKcLXQRPp5hZihq&branch=master)](https://travis-ci.com/kx-chen/velocity)

A New Tab page for humans. https://velocity.kaixingchen.com

## Development

### Installing in Chrome
1. Go to chrome://extensions
2. Enable developer mode
3. Click on Load Unpacked Extension and load in the `velocity` folder

Make sure you temporarily disable any other Chrome extensions that override the new tab page!

### Starting Development
First time running: 
```$ npm install```

```$ npm run watch```

This starts Webpack, which will watch for changes and package them appropriately.

This project uses Prettier, and all commits are checked using Prettier. Lint your code locally by running ```$ npm run lint```

## Code Structure

`src/js/`

Main JavaScript code for Velocity. Components are built with Preact.

`velocity/override/`

Contains the HTML, background images, and bundled JavaScript for the Chrome extension. 
