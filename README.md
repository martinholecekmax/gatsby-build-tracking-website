# Tracking website for Gatsby Builds in React

Note: This website has been built by using the `create-react-app` package which is now deprecated. The new way to create a React app is to use [Vite](https://vitejs.dev/). I've created a new repository with the same website but built with Vite. You can find it [here](https://github.com/martinholecekmax/gatsby-build-monitor-website).

This is a simple website that displays the status of the Gatsby build process. It is built with React and uses the WebSocket API to get the status of the build.

This website is similar to the [Gatsby Cloud](https://www.gatsbyjs.com/cloud/) website or the [Netlify](https://www.netlify.com/) website.

## Table of contents

- [Features](#features)
- [Builds page](#builds-page)
- [Build page](#build-page)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setting up environment variables for the website](#setting-up-environment-variables-for-the-website)
  - [Installing dependencies](#installing-dependencies)
  - [Running the website](#running-the-website)
- [Contributing](#contributing)

## Features

- Showing the status of the ongoing build
- Providing the status of past builds
- Presenting logs of the build process
- Queuing builds for processing in order
- Canceling builds that are in progress or waiting in the queue.

## Builds page

The builds page shows the status of the currently running build, as well as the status of the previous builds with some basic information about the build such as the duration, status, author, and date of the build execution.

![Builds page](./public/builds-page.PNG)

## Build page

The build page displays the status of the build as it is running. It also displays the logs of the build process.

![Build page](./public/build-page.PNG)

You can also view the build page for a previous build with the build logs by clicking on the `view build` on the builds page.

## Getting started

To get started, you will need to have Node.js installed on your machine. You can download it from [here](https://nodejs.org/en/download/).

### Prerequisites

In order to run the website, you will need to have the [gatsby-websocket-api](https://github.com/martinholecekmax/gatsby-websocket-api) running on your machine. You can follow the instructions in the README to get it up and running.

### Setting up environment variables for the website

The website uses environment variables to connect to the WebSocket API. You will need to either create a `.env` file in the root of the project or rename the `.env.example` file to `.env`. You will need to fill in the `REACT_APP_API_URL` variable with the URL of the WebSocket API. For example:

```
REACT_APP_API_URL=http://localhost:3001
```

Note: You will need to change the URL to the URL of the WebSocket API.

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
