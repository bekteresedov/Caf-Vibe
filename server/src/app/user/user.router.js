import express from "express";
import { UserController } from "./user.conroller.js";
const userRouter = express.Router();
const mainPath = "/user";

// userRouter.post(
//   `${mainPath}/add`,
//   reservationValidationSchemaMiddleware,
//   ReservationController.save
// );

userRouter.get(`${mainPath}/get/:id`, UserController.getSelfProfile);

export default userRouter;
