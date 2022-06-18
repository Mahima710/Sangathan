const express = require("express");
const Router = express.Router();
const { Follow } = require("../Controllers/FollowControllers");

Router.route("/follow/:organization").post(Follow);

module.exports = Router;
