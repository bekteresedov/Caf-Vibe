import "express-async-errors";
import express from "express";
import { config } from "dotenv";
import cors from "cors";
import multer from "multer";
import cookieParser from "cookie-parser";
import { createServer } from "http";
import path from "path";
import { createDbConnection } from "./core/config/db.config.js";
import errorHandlerMiddleware from "./core/middleware/validation-handler-middleware.js";
import authRouter from "./app/auth/auth.router.js";
import moment from "moment-timezone";

moment.tz.setDefault("Asia/Baku");

config();
const PORT = process.env.APP_PORT | 5000;
await createDbConnection();

const directory = path.join(process.cwd(), "uploads");
const upload = multer({
  dest: directory,
  limits: { fileSize: 10 * 1024 * 1024 },
});

const server = express();
export const serverApp = createServer(server);

server.use(cookieParser());
server.disable("x-powered-by");
server.use(cors());
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(upload.single("file"));
const mainPath = "/api/v1";
server.use(mainPath, authRouter);
server.use(errorHandlerMiddleware);

export function serverStart() {
  serverApp.listen(PORT, async () => {
    console.log(`Server is running: http://localhost:${PORT}`);
  });
}
