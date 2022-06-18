const express = require("express");
const Router = express.Router();
const {
  CreateEvent,
  Create_Post,
  Delete_Event,
  Delete_Post,
  Update_Event,
  Update_Post,
  getallevents,
  geteventsofprofile,
  getallposts,
  getpostsofprofile,
} = require("../Controllers/EventControllers");

Router.route("/createevent").post(CreateEvent);
Router.route("/createpost").post(Create_Post);
Router.route("/deletepost/:Post").post(Delete_Post);
Router.route("/deleteevent/:Event").post(Delete_Event);
Router.route("/updateevent/:Event").post(Update_Event);
Router.route("/updatepost/:Post").post(Update_Post);
Router.route("/getallevents").get(getallevents);
Router.route("/getallposts").get(getallposts);
Router.route("/getprofileevent/:organizaion").get(geteventsofprofile);
Router.route("/getprofilepost/:organization").get(getpostsofprofile);

module.exports = Router;
