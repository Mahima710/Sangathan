const client = require("../Connection/Connection");
const express = require("express");
const app = express();
app.use(express.json());

const Posts = () => {
  console.log("here");
  client.query(
    "CREATE TABLE Posts(ID SERIAL PRIMARY KEY, Post_Date DATE DEFAULT CURRENT_TIMESTAMP, Title VARCHAR(20) NOT NULL, Likes NUMERIC DEFAULT 0, Content VARCHAR(100) NOT NULL, Author_ID SERIAL REFERENCES Organization(ID) ON DELETE CASCADE);",
    (err, res) => {
      if (err) {
        return console.log(err);
      }
      console.log(res);
      return res.json({ res });
    }
  );
};

const Events = () => {
  console.log("here");
  client.query(
    "CREATE TABLE Events(ID SERIAL PRIMARY KEY, Event_Date DATE DEFAULT CURRENT_TIMESTAMP, Title VARCHAR(20) NOT NULL, Likes NUMERIC DEFAULT 0, Description VARCHAR(100) NOT NULL, Is_Finished BOOLEAN DEFAULT FALSE, Author_ID SERIAL REFERENCES Organization(ID) ON DELETE CASCADE);",
    (err, res) => {
      if (err) {
        return console.log(err);
      }
      console.log(res);
      return res.json({ res });
    }
  );
};

module.exports = { Events, Posts };
