# Velocity
[![Build Status](https://travis-ci.com/kx-chen/velocity.svg?token=shUduPKcLXQRPp5hZihq&branch=master)](https://travis-ci.com/kx-chen/velocity)

A New Tab page for humans. http://velocity.kaixingchen.com

![Dashboard view](screenshots/main.png?raw=true "Dashboard view")

![Start view](screenshots/start.png?raw=true "Start view")

![Settings](screenshots/settings.png?raw=true "Settings")

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

### Running Tests
This project uses Jest as the test runner.

```$ npm run test```

### End to End Tests

Coming soon.

## Code Structure/Tech Stack

`src/js/`

Main JavaScript code for Velocity. Components are built with Preact.

`velocity/override/`

Contains the HTML, background images, and bundled JavaScript for the Chrome extension. 

Some libraries/technologies/build tools this project uses:
* Preact
* Redux
* Webpack
* Travis CI
* Babel
* Jest

All were setup from scratch. Any contributions to the configuration are welcome. 

Great care was taken to ensure the bundled JavaScript size does not get too big. 
As of now, the bundled JavaScript is around 50kB.

Great care was also taken to ensure that the extension loads quickly. 
The current load time for the extension is around 80ms (according to DevTools).


### Known Issues
* Name form input not sanitized
* High resolution background images are accepted and cause lag
* Background image uploading has no validation
* 12/24 hour time cannot determine difference between 12 pm and 12 am, both display 0 as hour. 
(needs big refactoring of the way time is handled)


## Contributions

All contributions, pull requests, and feedback welcome! Roasts of all kinds welcome

## Future Plans
* [x]  Deployment to the Chrome Web Store
* [ ] End to End tests.

And more!
