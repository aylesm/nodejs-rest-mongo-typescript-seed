import kernel from "./inversify.config";
import logger from "./logging.config";

import * as restify from "restify";
import {Server} from "restify";

import {registerActionsInExpressApp} from "controllers.ts/Factory";
import {ControllerRunner} from "controllers.ts/ControllerRunner";

let config = require("../../package.json");
let port = process.env.PORT || 3000;
let host = process.env.HOST || "localhost";

logger.info("Setting up restify...");

const server: Server = restify.createServer({
    name: config.name,
    version: config.version
});

server.pre(restify.pre.sanitizePath());

const controllerRunner: ControllerRunner = registerActionsInExpressApp(server, [__dirname + "/../api"]);
controllerRunner.container = {
    get: function (someClass: any): any {
        logger.info("Setting up restify...");
        return kernel.get(someClass.name);
    }
};


server.listen(port, host, () => logger.info(`${server.name}@${config.version} listening at ${host}:${port}`));