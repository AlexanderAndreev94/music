const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const usersRoute = require('./routes/users');

class Application {
    constructor() {
        this.app = express();
        this.mountMiddleware();
        this.mountRoutes();
    }

    mountMiddleware() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cookieParser());
    }

    mountRoutes() {
        this.app.use('/api', usersRoute);
    }

    get instance() {
        return this.app;
    }
}

module.exports = new Application().instance;