require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const Authroutes = require("./Routes/AuthRoutes");
const Donationroutes = require("./Routes/Donationroutes");
const Eventroutes = require("./Routes/Eventroutes");
const FollowRoutes = require("./Routes/FollowRoutes");
const cookie = require("cookie-parser");
app.use(
  cookie({
    name: "Sangathan",
    secret: process.env.SECRET,
    httpOnly: true,
    credentials: true,
    resave: true,
  })
);

app.use(cors());
const client = require("./Connection/Connection");
const {
  Individuals,
  Organizations,
  Contacts,
  Followers,
} = require("./Models/UserModels");
const { Posts, Events } = require("./Models/PostModels");
const { Donation_History } = require("./Models/DonationModels");
app.use(express.json());

app.use("/", Authroutes);
app.use("/", Donationroutes);
app.use("/", Eventroutes);
app.use("/", FollowRoutes);

app.listen(process.env.PORT, (err, connection) => {
  if (err) {
    return console.log(err);
  }
  return console.log(`Server listening on port ${process.env.PORT}`);
});

//Individuals();
//Organizations();
//Posts();
//Events();
//Donation_History();
//Contacts();
//Followers();
/*client.query(
  "CREATE TABLE MAHIMA(Name VARCHAR(20) PRIMARY KEY, AGE INTEGER);",
  (err, res) => {
    if (err) {
      return console.log(err);
    }
    return console.log(`Table created : ${res}`);
  }
);*/

/*client.query("DROP TABLE Mahima;", (err, res) => {
  if (err) {
    return console.log(err);
  }
  return console.log(`Table : ${JSON.stringify(res.rows)}`);
});*/
/*client.query(
  "SELECT table_schema,table_name FROM information_schema.tables;",
  (err, res) => {
    if (err) {
      return console.log(err);
    }
    for (let row of res.rows) {
      console.log(row.table_name);
    }
  }
);*/
