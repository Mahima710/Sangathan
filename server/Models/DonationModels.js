const client = require("../Connection/Connection");
const express = require("express");
const app = express();
app.use(express.json());

const Donation_History = () => {
  console.log("here");
  client.query(
    "CREATE TABLE Donation_History(Transaction_ID SERIAL PRIMARY KEY, Transaction_Date DATE DEFAULT CURRENT_TIMESTAMP, Amount NUMERIC NOT NULL,  Individual_ID SERIAL REFERENCES Individual(ID) ON DELETE CASCADE, Organization_ID SERIAL REFERENCES Organization(ID) ON DELETE CASCADE);",
    (err, res) => {
      if (err) {
        return console.log(err);
      }
      console.log(res);
      return res.json({ res });
    }
  );
};

module.exports = { Donation_History };
