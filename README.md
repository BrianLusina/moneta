![moneta_logo](./assets/web_hi_res_512.png)

# Moneta

[![Build status](https://build.appcenter.ms/v0.1/apps/74cd0001-10c9-4f9a-932b-1ecbd4adc2e3/branches/develop/badge)](https://appcenter.ms)
[![Build Status](https://travis-ci.org/BrianLusina/moneta.svg?branch=master)](https://travis-ci.org/BrianLusina/moneta)
[![codecov](https://codecov.io/gh/BrianLusina/moneta/branch/master/graph/badge.svg)](https://codecov.io/gh/BrianLusina/moneta)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/037db7c2c1ae43bd9d4086b78b6e964e)](https://www.codacy.com/app/BrianLusina/moneta?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=BrianLusina/moneta&amp;utm_campaign=Badge_Grade)

[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/built-for-android.svg)](http://forthebadge.com)

Moneta is a simple currency converter application built in [React Native](https://facebook.github.io/react-native/) and scaffolded with the [create-react-native-app](https://github.com/react-community/create-react-native-app) CLI. The objective of this application was a simple demonstration of using simple components and tools that can be easily applied in [React](https://facebook.github.io/react) for building web applications. This means this app's components and structure can be easily used to build a web app with the very same functionality with little re-write. 
(PS: Moneta is roughly translated to money in Latin)

App can be found on [Expo](https://exp.host/@lusinabrian/moneta)

## Getting Started

You will obviously need to know how *React Native* and *React* work in the background in order to use this project. Also, you will need to have [Expo](https://expo.io/) app installed on your testing device, if using a testing device or have an emulator setup, either Android or IOS, the [react native getting started guide has this explained already](https://facebook.github.io/react-native/docs/getting-started.html).

To get this project source:

```bash
$ git clone https://github.com/BrianLusina/moneta.git
```

## Pre-requisites

A couple of things you will need setup on your development environment

+ [Node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/en/)
  
  Since this is a pure JavaScript application, Node will be needed as a runtime environment for testing the application as well as setting up the react native packager. npm and/or yarn will be used to download and set the dependencies in the project, as well as running the scripts in the [package.json](./package.json) in the root directory of the project
  
+ [Expo](https://expo.io/) account (Optional)
  
  Expo will be used to run the application on an emulator or a real device. The expo account is optional, especially on publication of the application on Expo, you will need to login and register the application there. More details are in the link provided

+ [Emulator](https://en.wikipedia.org/wiki/Emulator), either [Android](https://developer.android.com/studio/run/emulator.html) or [IOS](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/iOS_Simulator_Guide/Introduction/Introduction.html)

  This is optional if you will use a real device for testing the application. Setup for an emulator will be available in the provided links. If your development machine is a Linux/Windows, then you have access to only the Android Emulators, otherwise, if on mac, you have access to both.
  
  
Once you have these dependencies set up, installing dependencies is as simple as follows:

```bash
$ npm install
# if using yarn
$ yarn install
```
> This will install the dependencies and set them in the [node_modules](./node_modules)

## Running tests

This has followed [Test Driven Development](https://en.wikipedia.org/wiki/Test-driven_development)(TDD) approach and thus running tests can be done as follows:

```bash
$ yarn test
# or if using npm
$ npm run test
```

Tests are run using [jest](https://facebook.github.io/jest/) and other testing tools include:
+ [Enzyme](http://airbnb.io/enzyme/)
+ [Expect](http://facebook.github.io/jest/docs/en/expect.html#expectvalue)
+ [React Test Renderer](https://www.npmjs.com/package/react-test-renderer)

## Coding Style

Linting is done using [ESlint](https://eslint.org/) styling rules. Any coding standard can be used. To set the coding style you want simply run this command to initialize a new ESlint configuration:

````bash
$ npm run lint:init
# or
$ yarn lint:init
````

Run lint tests with

```bash
$ npm run lint
# or
$ yarn lint
```

Fix linting issues:

```bash
$ npm run lint:fix
# or
$ yarn lint:fix
```

## Deployment

Deployment can be done to either Expo, PlayStore or AppStore or all three of them, considering this is a React Native application.

Details on how to deploy this application can be found [here](https://docs.expo.io/versions/latest/guides/building-standalone-apps.html) and [here](https://github.com/react-community/create-react-native-app/blob/master/EJECTING.md)


## Built With

+ [React Native](https://facebook.github.io/react-native/)
+ [Expo](https://expo.io/)


## Authors

+ [Brian Lusina](https://github.com/BrianLusina) - Initial work

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details


## Acknowledgments

Hat tip to [Spencer Carli](https://github.com/spencercarli) for the inspiration on creating this application.
Icons made by [Freepik](http://www.freepik.com")


[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/built-by-developers.svg)](http://forthebadge.com)