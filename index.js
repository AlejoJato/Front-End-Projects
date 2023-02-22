const winston = require("winston");

const logger = winston.createLogger({
    level: "error",
    format: winston.format.json(),
    defaultMeta: { service: "user-service" },
    transports: [
        new winston.transports.File({ filename: "errores.log", level: "error" }),
    ],
});


function devuelveError() {
    throw new Error("error de funcion");
}

try {
    devuelveError();
} catch (e) {
    logger.error(e.toString());
}