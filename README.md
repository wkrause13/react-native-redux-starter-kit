# React Native Redux Starter Kit
React Native boilerplate that aims to emulate [react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit) design patterns

This README will attempt to mirror the react-redux-starter-kit documentation.
It will attempt to call attention to areas where this project differs due to technology differences between React for the browser
and React Native.

## Table of Contents
1. [Features](#features)
1. [Requirements](#requirements)
1. [Reference Materials](#reference-materials)
1. [Getting Started](#getting-started)
1. [Application Structure](#application-structure)
1. [Development](#development)
   * [Developer Tools](#developer-tools)
   * [Routing](#routing)
1. [Testing](#testing)
1. [Build System](#build-system)
   * [Root Resolve](#root-resolve)
   * [Styles](#styles)

## Requirements
* node `^4.2.0`
* npm `^3.0.0`


## Features
* [react](https://github.com/facebook/react)
* [redux](https://github.com/rackt/redux)
* [react-native](https://github.com/facebook/react-native)
* [react-native-router-flux](https://github.com/aksonov/react-native-router-flux)
* [babel](https://github.com/babel/babel)


## Reference Materials

Since this project seeks to follow the conventions
used in [react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit), that project gets all
credit for much of this project's design. In general this project will try to track that project as faithfully as
possible.

A number of the npm run scripts were taken from [ignite](https://github.com/infinitered/ignite), which is a more extensive, but more opinionated project 
generator.

Finally the blog post on [multinus](http://www.multunus.com/blog/2016/07/test-driving-react-native-applications/) was used to address differences in
the testing requirements between React and React Native.

## Getting Started

After confirming that your development environment meets the specified [requirements](#requirements), you can create a new project based on `react-redux-starter-kit` as follows:

### Install from source

First, clone or download:

```bash
$ git clone https://github.com/wkrause13/react-native-redux-starter-kit
// or
$ wget -O react-redux-starter-kit.zip https://github.com/wkrause13/react-native-redux-starter-kit/archive/master.zip
$ unzip react-redux-starter-kit.zip
```

Then, rename to your project name and change into the directory:

```bash
$ mv react-redux-starter-kit <my-project-name>
$ cd <my-project-name>
```


### Install dependencies, and check to see it works

```bash
$ npm install                   # Install project dependencies
$ npm start                     # Compile and launch
```

The first time you run it, you may need to run:

```bash
$ npm start -- --reset-cache
```

Also, there are a number of references in the ./ios and ./android folders to the original
project name used when running react-native init. Eventually this project will include a replacement
script to handle this. In the mean time, use you preferred text placement tool to remove reactNativeReduxStarterKit
references from you local copy. Be aware that at least for ios, some file names have reactNativeReduxStarterKit, so just using your text
editor's standard replace function may not cover replacing the file names. 


While developing, you will probably rely mostly on `react-native run-ios` or `react-native run-android`; however, there are additional scripts at your disposal:

|`npm run <script>`|Description|
|------------------|-----------|
|`start`|Serves your app at `localhost:3000`. This does not build your code for any given platform|
|`lint`|Lint all `.js` files.|
|`clean`|Clears various caches|
|`newclear`|Delets all npm modules, and re-installs. Also clears ios/build/ModuleCache/*  |
|`tron`|Starts Reactotron|
|`test`|Runs unit tests with Mocha|
|`test:dev`|Runs Mocha and watches for changes to re-run tests|
|`android:build`|Builds for Android|
|`android:install`|Installs Android Build|
|`android:devices`|Lists available android devices|
|`android:logcat`|Dumps logs to console|
|`android:shake`|Simulate shake event to pull up react developer options|

## Application Structure

The application structure presented in this boilerplate is **fractal**, where functionality is grouped primarily by feature rather than file type. Please note, however, that this structure is only meant to serve as a guide, it is by no means prescriptive. That said, it aims to represent generally accepted guidelines and patterns for building scalable applications. If you wish to read more about this pattern, please check out this [awesome writeup](https://github.com/davezuko/react-redux-starter-kit/wiki/Fractal-Project-Structure) by [Justin Greenberg](https://github.com/justingreenberg).

```
.
├── blueprints               # Blueprint files for redux-cli
├── config                   # Project configuration settings
├── src                      # Application source code
│   ├── main.js              # Application bootstrap and rendering
│   ├── components           # Reusable Presentational Components
│   ├── containers           # Reusable Container Components
│   ├── routes               # Main route definitions and async split points
│   │   ├── scenes.js        # Scenes generated from corresponding routes and containers
│   │   └── Home             # Fractal route
│   │       ├── components   # Presentational React Components
│   │       ├── container    # Connect components to actions and store
│   │       ├── modules      # Collections of reducers/constants/actions
│   │       └── routes **    # Fractal sub-routes (** optional)
│   ├── static               # Static assets (not imported anywhere in source code)
│   ├── store                # Redux-specific pieces
│   │   ├── createStore.js   # Create and instrument redux store
│   │   └── reducers.js      # Reducer registry and injection
│   └── styles               # Application-wide styles (generally settings)
└── tests                    # Unit tests
```

## Development

#### Developer Tools

#### `Reactotron`

```bash
npm install reactotron --save-dev
```

#### `redux-cli`

```bash
npm install redux-cli --save-dev
```

### Routing
[react-native-router-flux](https://github.com/aksonov/react-native-router-flux)

Since there is no codesplitting in React Native, this project has elected to use JSX to define 
routes/scenes. If there is a compelling case for not using JSX here, I'll update the project.

## Testing
To add a unit test, simply create a `.spec.js` file anywhere in `~/tests`. The route and component blueprints
that come with this project automatically create test files for you. So if you use the defualt 
redux-cli blueprints provided, then your test directory structure will mirror that of your src directory.

## Build System

### Root Resolve
Babel is configured to make use of [babel-plugin-module-alias](https://github.com/tleunen/babel-plugin-module-alias), which lets you import local packages as if you were traversing from the root of your `~/src` directory. Here's an example:

```js
// current file: ~/src/views/some/nested/View.js
// What used to be this:
import SomeComponent from '../../../components/SomeComponent'

// Can now be this:
import SomeComponent from 'components/SomeComponent' // Hooray!
```

Update your .babelrc file to add more aliases

### Styles

Since css/scss is not supported in React Native, this project uses the React Native StyleSheet component. If you are
using the redux-cli generator, it will create a file called <component_name>Styles.js along side your component.

You may wish to place global styles in the ./src/styles directory. 
