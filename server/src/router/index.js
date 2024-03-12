const AuthController = require("../controller/authcontroller");
const AuthValidation = require("../middleware/validation/authValidation");

const router = require("express").Router();

router.use("/auth", AuthValidation.register, AuthController.register);

module.exports = router;
