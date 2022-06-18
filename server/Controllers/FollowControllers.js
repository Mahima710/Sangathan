const client = require("../Connection/Connection");
const express = require("express");
const app = express();
app.use(express.json());

const Follow = async (req, res) => {
  const token = req.cookies.jwt;
  const Organization = req.params.organization;
  const Follower = await client.query(
    `SELECT ID FROM INDIVIDUAL WHERE TOKEN = $1`,
    [token]
  );
  const Followee = await client.query(
    `SELECT ID FROM ORGANIZATION WHERE ID =$1`,
    [Organization]
  );
  client.query(
    `INSERT INTO FOLLOWER VALUES($1, $2)`,
    [Followee, Follower],
    (err, data) => {
      if (err) {
        return console.log(err);
      }
      return res.status(200).json({ success: true, data: data });
    }
  );
};

module.exports = { Follow };
