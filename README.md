# Docker Node.js Example - A Sample API Application

## Introduction
Currently we are investigating having a slimmer middleware for our
applications since having a Java application server plus Spring plus
our environment causes issues.  One sample that we've decided to
investigate is using Node.js as the middleware since several companies
are moving in that direction.  This sample application is an attempt
to demonstrate how we could use Node.js to create middleware apps.  In
addition to this, we'd also like to investigate using Docker to ease
our deployment process.

## Features
- Implements a RESTful API
- Able to communicate with an Oracle DB
- Uses the [LoopBack](http://loopback.io) library for easy development
- Deployable using Docker

## Installation
### Configuration
When building this project, either locally or using Docker, you will
need a valid tnsnames.ora file located at the root of the project and
an environment file for connecting to an Oracle database.  The format
of the environment file should be:
```
TNS_NAME=<tnsname>
DB_USERNAME=<username>
DB_PASSWORD=<password>
```
### Running Locally
To obtain this application and run it locally, you must have the
following dependencies installed:
- Node.js
- Oracle Instant Client

This application has been built and tested with Node v4.4.7,
but version 6 should work (just hasn't been tested.)  Once Node is
installed, run:
```bash
$ git clone git@github.com:jcrosswhite-arrow/docker-node-example.git
$ cd docker-node-example
$ npm install
$ source <environment file>
$ node .
```
This will start an Express server running locally on port 3000.  Browse
to [http://localhost:3000/explorer](http://localhost:3000/explorer) to
view the API endpoints.  All API endpoints are available under the /api/
endpoint.

### Building Using Docker
To build this application to run with Docker, first, have Docker
installed.  Next, build the application:
```bash
$ docker build -t my-dockerhub-username/docker-node-example .
```

Then, to run the application:
```bash
$ docker run -p <external port>:3000 --env-file=<environment file> my-dockerhub-username/docker-node-example
```

## License
Copyright (c) 2016, Joel Crosswhite
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * Neither the name of the organization nor the
      names of its contributors may be used to endorse or promote products
      derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL JOEL CROSSWHITE BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
