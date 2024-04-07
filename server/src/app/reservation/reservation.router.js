import express from "express";
import { reservationValidationSchemaMiddleware } from "./validation/reservation.middleware.js";
import { ReservationController } from "./reservation.controller.js";
import { isAdmin } from "../../core/middleware/auth-middleware.js";
const reservationRouter = express.Router();
const mainPath = "/reservation";

reservationRouter.post(
  `${mainPath}/add`,
  reservationValidationSchemaMiddleware,
  ReservationController.save
);

reservationRouter.get(
  `${mainPath}/get/:id`,
  isAdmin,
  ReservationController.findReservationById
);
reservationRouter.get(`${mainPath}/all`, isAdmin, ReservationController.all);
reservationRouter.delete(
  `${mainPath}/delete/:id`,
  isAdmin,
  ReservationController.delete
);

export default reservationRouter;
