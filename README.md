# React website for Gatsby build tracking

This is a simple website that displays the status of the Gatsby build process. It is built with React and uses the websockets API to get the status of the build.

## Table of contents

- [Features](#features)
- [Builds page](#builds-page)
- [Build page](#build-page)
- [Getting started](#getting-started)
  - [Setting up environment variables for the website](#setting-up-environment-variables-for-the-website)
  - [Installing dependencies](#installing-dependencies)
  - [Running the website](#running-the-website)
- [Contributing](#contributing)

## Features

- Displays the status of the currently running build
- Displays the status of the previous builds
- Displays the logs of the build process
- Ability to add builds into the queue to process builds in order
- Ability to cancel a build that is currently running or in the queue

## Builds page

The builds page displays shows the status of the currently running build, as well as the status of the previous builds with some basic information about the build such as the duration, status, author, and date of the build execution.

![Builds page](public/builds-page.png)

## Build page

The build page displays the status of the build as it is running. It also displays the logs of the build process.

![Build page](public/build-page.png)

You can also view the build page for a previous build with the build logs by clicking on the view build in the builds page.

## Getting started

To get started, you will need to have Node.js installed on your machine. You can download it from [here](https://nodejs.org/en/download/).

In order to run the website, you will need to have the [gatsby-websocket-api](https://github.com/martinholecekmax/gatsby-websocket-api) running on your machine. You can follow the instructions in the README to get it up and running.

### Setting up environment variables for the website

The website uses environment variables to connect to the websocket API. You will need to create a `.env` file in the root of the project and add the following variable:

```
REACT_APP_API_URL=http://localhost:3001
```

Note: You will need to change the URL to the URL of the websocket API.

### Installing dependencies

To install the dependencies, run the following command:

```
npm install
```

### Running the website

To run the website, run the following command:

```
npm start
```

This will start the website on port 3000. You can view the website by going to [http://localhost:3000](http://localhost:3000).

## Contributing

If you would like to contribute to this project, please feel free to submit a pull request. If you have any questions, please feel free to open an issue.
