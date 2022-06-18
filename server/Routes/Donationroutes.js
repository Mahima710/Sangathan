const express = require("express");
const Router = express.Router();
const { Donation } = require("../Controllers/DonationController");

Router.route("/donate/:organization").post(Donation);

module.exports = Router;
