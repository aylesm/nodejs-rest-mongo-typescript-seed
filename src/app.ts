import logger from "./config/logging.config";
logger.info("Bootstrapping...");

import "./config/inversify.config";
import "./config/restify.config";


