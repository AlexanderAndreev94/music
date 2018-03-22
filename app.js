const express = require('express');

class Application {
    constructor() {
        this.app = express();
        this.mountMiddleware();
        this.mountRoutes();
    }

    mountMiddleware() {

    }

    mountRoutes() {

    }

    get instance() {
        return this.app;
    }
}

module.exports = new Application().instance;