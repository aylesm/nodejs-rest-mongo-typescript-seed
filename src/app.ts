import * as restify from "restify";
import * as bunyan from "bunyan";
import {registerActionsInExpressApp} from "controllers.ts/Factory";

let config = require("../package.json");
let port = process.env.PORT || 3000;
let host = process.env.HOST || 'localhost';
let logLevel = process.env.LOG_LEVEL || bunyan.INFO;

let logger = bunyan.createLogger({
    name: config.name,
    level: logLevel
});

logger.info("Bootstrapping...");

const server = restify.createServer({
    name: config.name,
    version: config.version
});

server.pre(restify.pre.sanitizePath());
registerActionsInExpressApp(server, [__dirname + "/api"]);
server.listen(port, host, () => logger.info(`${server.name}@${config.version} listening at ${host}:${port}`));