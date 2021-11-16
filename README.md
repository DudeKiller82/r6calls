# r6calls
[![Build Status](https://travis-ci.com/purechaose/r6maps.svg?branch=master)](https://travis-ci.com/purechaose/r6maps)

**Newest version now auto-hosted at https://dudekiller82.github.io/r6calls/**

r6calls is designed to be a quick reference for Rainbow Six Siege maps.  Please see the about.html page for more details.

## Running locally

### Dependencies
- [npm/Nodejs](https://www.npmjs.com/get-npm)
- [Ruby](https://www.ruby-lang.org/en/)
    + [gem](https://rubygems.org/pages/download)
    + sass (`gem install sass`)
    + gh-pages (`npm install gh-pages`)
    + svgo (`npm -g install svgo`)

To check the dependencies, just type `scss`. If the program waits for input, your dependencies are installed correctly.

### Building and running
- Install npm and install packages: `npm install`
- General build: `npm run build`
    + Builds js and scss into the `site` folder.
    + Check `package.json` for more particular scripts.
- File watchers are also available (see `packages.json`)
- To run, locate `site/index.html` and open it.

