const AuthController = require("../controller/authcontroller");

const authRouter = require("express").Router();

authRouter.post(`/register`, AuthController.userRegister);

module.exports = authRouter;
