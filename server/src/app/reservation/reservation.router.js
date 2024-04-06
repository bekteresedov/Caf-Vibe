import express from "express";
import { reservationValidationSchemaMiddleware } from "./validation/reservation.middleware.js";
import { ReservationController } from "./reservation.controller.js";
const reservationRouter = express.Router();
const mainPath = "/reservation";

reservationRouter.post(
  `${mainPath}/add`,
  reservationValidationSchemaMiddleware,
  ReservationController.save
);

reservationRouter.get(
  `${mainPath}/get/:id`,
  ReservationController.findReservationById
);
reservationRouter.get(`${mainPath}/all`, ReservationController.all);
reservationRouter.delete(
  `${mainPath}/delete/:id`,
  ReservationController.delete
);

export default reservationRouter;
