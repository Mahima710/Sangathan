const client = require("../Connection/Connection");
const express = require("express");
const { Organizations } = require("../Models/UserModels");
const app = express();
app.use(express.json());

const Donation = async (req, res) => {
  const token = req.cookie.jwt;
  const id = req.params.organization;
  const Individual = await client.query(
    `SELECT ID FROM INDIVIDUAL WHERE TOKEN = $1`,
    [token]
  );
  if (!Individual) {
    return console.log("Something went wrong");
  }
  const organization = await client.query(
    `SELECT ID FROM ORGANIZATION WHERE ID = $1`,
    [id]
  );
  if (!organization) {
    return console.log("Something went wrong");
  }
  const { amount } = req.body;
  client.query(
    `INSERT INTO DONATIONS VALUES($1, $2, $3)`,
    [Individual, organization, amount],
    (err, data) => {
      if (err) {
        return console.log(err);
      }
      return res.status(200).json({ success: true, data: data });
    }
  );
};

module.exports = { Donation };
