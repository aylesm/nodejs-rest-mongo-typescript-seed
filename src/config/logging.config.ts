import * as bunyan from "bunyan";
let config = require("../../package.json");
let logLevel = process.env.LOG_LEVEL || bunyan.INFO;

// LOGGING SETUP
let logger = bunyan.createLogger({
    name: config.name,
    level: logLevel
});

export default logger;