const http = require('http');
const mongoose = require('mongoose');
const app = require('../app');
const cfg = require('../config/common');

class Server {
    constructor() {
        this.server = http.createServer(app);
        this.server.on('error', Server.onEerror);
        this.server.on('listening', Server.onListening);
        process.env.NODE_ENV = cfg.environment.dev;
    }

    async listen() {
        await mongoose.connect(`mongodb://${cfg.db.host}:${cfg.db.port}/${cfg.db.name}`);
        this.server.listen(cfg.server.port, cfg.server.hostname);
    }

    static onEerror(error) {
        console.log(error.message);
    }

    static onListening() {
        console.log(`Server is listening on port: ${cfg.server.port}; ENV: ${process.env.NODE_ENV}`);
    }
}

new Server().listen();