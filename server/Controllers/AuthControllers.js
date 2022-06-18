const client = require("../Connection/Connection");
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
/*Register, Login, Like, Follow, Create event, Create post, Donate */
const Register = async (req, res) => {
  const { Category } = req.body;
  if (Category === "Individual") {
    const { Name, Email, Password, City, State, Country, About } = req.body;
    const redundant = await client.query(
      "SELECT EMAIL FROM INDIVIDUAL WHERE EMAIL = $1 ",
      [Email]
    );
    if (redundant.rows.length !== 0) {
      return res
        .status(409)
        .json({ success: false, message: "User already exists" });
    }
    const token = jwt.sign({ Individual_Email: Email }, process.env.TOKEN_KEY, {
      expiresIn: "120h",
    });
    const query =
      "INSERT INTO INDIVIDUAL (name, email, password,city,state,country,about,token) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
    const values = [Name, Email, Password, City, State, Country, About, token];
    console.log(query);
    client.query(query, values, (err, data) => {
      if (err) {
        return console.log(err);
      }
      res
        .cookie("jwt", token, {
          expires: new Date(Date.now() + 43200000),
          secure: true,
          httpOnly: true,
          sameSite: "None",
        })
        .status(200)
        .json({ success: true, data: data });
    });
  } else if (Category === "Organization") {
    const {
      Name,
      Email,
      Password,
      City,
      State,
      Country,
      UPI_ID,
      Purpose,
      PAN,
    } = req.body;
    console.log(PAN);
    const redundant = await client.query(
      "SELECT EMAIL FROM ORGANIZATION WHERE EMAIL = $1 OR PAN_NUMBER = $2",
      [Email, PAN]
    );
    if (redundant.rows.length !== 0) {
      return res
        .status(409)
        .json({ success: false, message: "User already exists" });
    }
    console.log(PAN);
    if (PAN[3] !== "T") {
      return res.status(400).json({
        success: false,
        message: "PAN Verification failed, PAN Does not belong to a trust",
      });
    }
    const token = jwt.sign(
      { Organization_Email: Email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "120h",
      }
    );
    const query =
      "INSERT INTO ORGANIZATION (Name, Email, Password, City , State, Country, UPI_ID, Purpose, PAN_Number, token) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)";
    const data = [
      Name,
      Email,
      Password,
      City,
      State,
      Country,
      UPI_ID,
      Purpose,
      PAN,
      token,
    ];
    client.query(query, data, (err, data) => {
      if (err) {
        return console.log(err);
      }
      console.log("successfully registered");
      res
        .status(200)
        .cookie("jwt", token, {
          expires: new Date(Date.now() + 43200000),
          secure: true,
          httpOnly: true,
          sameSite: "None",
        })
        .json({ success: true, data: data });
    });
  }
};

const Login = async (req, res) => {
  const { Category, Email, Password } = req.body;
  if (Category === "Individual") {
    const User = await client.query(
      "SELECT * FROM INDIVIDUAL WHERE EMAIL = $1 AND PASSWORD = $2",
      [Email, Password]
    );
    if (User.rows.length === 0) {
      return res.status(409).json({
        success: false,
        message: "User and password doesn't exist",
      });
    }
    return res
      .status(200)
      .cookie("jwt", User.rows[0].token, {
        expires: new Date(Date.now() + 432000000), //5 days
        httpOnly: true,
      })
      .json({ suucess: true, data: User.rows });
  } else if (Category === "Organization") {
    const Organization = await client.query(
      "SELECT * FROM ORGANIZATION WHERE EMAIL = $1 AND PASSWORD = $2",
      [Email, Password]
    );
    console.log(Organization.rows);
    if (Organization.rows.length === 0) {
      return res.status(409).json({
        success: false,
        message: "Organization and password doesn't exist",
      });
    }
    return res
      .status(200)
      .cookie("jwt", Organization.rows[0].token, {
        expires: new Date(Date.now() + 43200000),
        secure: true,
        httpOnly: true,
        sameSite: "None",
      })
      .json({ suucess: true, data: Organization.rows });
  }
};

module.exports = { Login, Register };
