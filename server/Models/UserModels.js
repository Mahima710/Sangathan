const client = require("../Connection/Connection");
const express = require("express");
const app = express();
app.use(express.json());

const Individuals = () => {
  console.log("here");
  client.query(
    "CREATE TABLE INDIVIDUAL(ID SERIAL PRIMARY KEY, Name VARCHAR(20) NOT NULL, Email VARCHAR(20) NOT NULL, Password VARCHAR(20) NOT NULL, City VARCHAR(20)  DEFAULT NULL, State VARCHAR(20)  DEFAULT NULL, Country VARCHAR(20)  DEFAULT NULL, About VARCHAR(50) DEFAULT NULL, DOB Date);",
    (err, res) => {
      if (err) {
        return console.log(err);
      }
      console.log(res);
      return res.json({ res });
    }
  );
};

const Organizations = () => {
  console.log("here");
  client.query(
    "CREATE TABLE Organization(ID SERIAL PRIMARY KEY, Name VARCHAR(20) NOT NULL, Email VARCHAR(20) NOT NULL, Password VARCHAR(20) NOT NULL, City VARCHAR(20)  DEFAULT NULL, State VARCHAR(20)  DEFAULT NULL, Country VARCHAR(20)  DEFAULT NULL, UPI_ID VARCHAR(20) DEFAULT NULL, Purpose VARCHAR(50) NOT NULL, PAN_Number NUMERIC NOT NULL);",
    (err, res) => {
      if (err) {
        return console.log(err);
      }
      console.log(res);
      return res.json({ res });
    }
  );
};

const Contacts = () => {
  console.log("here");
  client.query(
    "CREATE TABLE Contacts(Organization_ID SERIAL REFERENCES Organization(ID) ON DELETE CASCADE, Contact NUMERIC NOT NULL);",
    (err, res) => {
      if (err) {
        return console.log(err);
      }
      console.log(res);
      return res.json({ res });
    }
  );
};

const Followers = () => {
  console.log("here");
  client.query(
    "CREATE TABLE Followers(Organization_ID SERIAL REFERENCES Organization(ID) ON DELETE CASCADE, Individual_ID SERIAL REFERENCES Individual(ID) ON DELETE CASCADE, DATE_FOLLOWED DATE DEFAULT CURRENT_TIMESTAMP);",
    (err, res) => {
      if (err) {
        return console.log(err);
      }
      console.log(res);
      return res.json({ res });
    }
  );
};

module.exports = {
  Individuals,
  Organizations,
  Contacts,
  Followers,
};
