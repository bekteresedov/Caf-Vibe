const authRouter = require("./authrouter");
const router = require("express").Router();

router.use("/auth", authRouter);

module.exports = router;
