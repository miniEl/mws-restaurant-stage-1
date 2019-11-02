# Restaurant Reviews: Stage 1

Udacity - Grow with Google Front End Developer Nanodegree Scholarship Project.

## Table of Contents

- [Project Overview](#Project-Overview)
- [How to run the app](#how-to-run-the-app)
- [Dependencies](#dependencies)

## Project Overview

For the **Restaurant Reviews** projects, it was my task to incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, it was a static design that lacks accessibility that needed to be converted to be responsive on different sized displays and accessible for screen reader use. I also added a service worker to begin the process of creating a seamless offline experience for the users.

### How to run the app

If you opt to start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

In a terminal, check the version of Python you have: python -V. If you have Python 2.x, spin up the server with python -m SimpleHTTPServer 8000 (or some other port, if port 8000 is already in use.) For Python 3.x, you can use python3 -m http.server 8000. If you don't have Python installed, navigate to Python's website to download and install the software.

Once you have this setup and you have changed the address in the dbhelper.js file, then with your server running, visit the site: http://localhost:8000.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

### Dependencies

- Starter files are provided by [UDACITY](https://www.udacity.com/)
