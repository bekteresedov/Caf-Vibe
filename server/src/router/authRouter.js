const AuthValidation = require("../middleware/validation/authValidation");
const AuthSchema = require("../schema/authSchema");

// const AuthController = require("../controller/authcontroller");

const authRouter = require("express").Router();

authRouter.post(`/register`, AuthValidation.register);

module.exports = authRouter;
