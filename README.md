# BBM CMS

CMS for BBM using Metronic theme template.

- Angular.js for frontend
- Node.js + MongoDB for backend

# Installation

- First install gulp and bower

> `npm install -g bower gulp`

Run:

- `npm install`

- `cd web && bower install`

- `gulp concat` & `gulp build` 

Set port number for server by:

- `export PORT portno`

Copy sample configs

- `cp web/js/sample.config.js web/js/config.js`
- `cp server/config/sample.config.js server/config/config.js`

Now edit configs accordingly, you will need to run mongodb instance for login to work until it is shifted to api

Run server by

`node server/server.js`

App will be accessible at http://localhost:portno
