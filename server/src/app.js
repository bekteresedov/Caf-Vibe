require("express-async-errors");
const express = require("express");
const connect = require("./config/dbConnect");
const bodyParser = require("body-parser");
const errorHandlerMiddleware = require("./middleware/errorHandler");
const router = require("./router");
require("dotenv").config();
const server = express();
const port = process.env.APP_PORT;
connect();
server.use(bodyParser.json());

const mainPath = "/api/v1";

server.use(mainPath, router);
server.use(errorHandlerMiddleware);

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
