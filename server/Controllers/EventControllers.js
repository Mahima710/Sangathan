const client = require("../Connection/Connection");
const express = require("express");
const app = express();
app.use(express.json());

//Like, Follow, Create event, Create post

const CreateEvent = async (req, res) => {
  const token = req.cookies.jwt;
  if (!token) {
    return console.log("Something went wrong");
  }
  const Author = await client.query(
    "SELECT ID FROM ORGANIZATION WHERE TOKEN = $1",
    [token]
  );
  if (!Author) {
    return console.log("Something went wrong");
  }
  const { Event_Date, Title, Description } = req.body;
  if (Event_Date < Date.now()) {
    return res.status(409).json({ success: false, message: "Invalid date" });
  }
  client.query(
    "INSERT INTO EVENTS VALUES($1, $2, $3, $4)",
    [Event_Date, Title, Description, Author.rows[0].id],
    (err, data) => {
      if (err) {
        return console.log(err);
      }
      return res.status(200).json({ success: true, data: data });
    }
  );
};

const Create_Post = async (req, res) => {
  const token = req.cookies.jwt;
  if (!token) {
    return console.log("Something went wrong");
  }
  const Author = await client.query(
    "SELECT ID FROM ORGANIZATION WHERE TOKEN = $1",
    [token]
  );
  console.log(Author.rows[0].id);
  if (!Author) {
    return console.log("Something went wrong");
  }
  const { Title, Content } = req.body;
  client.query(
    `INSERT INTO POSTS (TITLE, CONTENT, AUTHOR) VALUES($1,$2, $3)`,
    [Title, Content, Author.rows[0].id],
    (err, data) => {
      if (err) {
        return console.log(err);
      }
      return res.status(200).json({ success: true, data: data });
    }
  );
};

const Delete_Post = async (req, res) => {
  const Post = req.params.post;
  client.query(`DELETE FROM POSTS WHERE ID = $1`, [Post], (err, data) => {
    if (err) {
      return console.log(err);
    }
    return res.status(200).json({ success: true, data: data });
  });
};

const Delete_Event = async (req, res) => {
  const Event = req.params.event;
  client.query(`DELETE FROM EVENTS WHERE ID = $1`, [Event], (err, data) => {
    if (err) {
      return console.log(err);
    }
    return res.status(200).json({ success: true, data: data });
  });
};

const Update_Post = async (req, res) => {
  const Post = req.params.post;
  if (!Post) {
    return console.log("Post not found");
  }
  const { Title, Content } = req.body;
  client.query(
    `UPDATE TABLE POST SET TITLE = $1 AND CONTENT = $2 WHERE ID = $3`,
    [Title, Content, Post],
    (err, data) => {
      if (err) {
        return console.log(err);
      }
      return res.status(200).json({ success: true, data: data });
    }
  );
};

const Update_Event = async (req, res) => {
  const Event = req.params.event;
  if (!Event) {
    return console.log("Event not found");
  }
  const { Title, Description, Event_Date } = req.body;
  client.query(
    `UPDATE TABLE POST SET TITLE = $1 AND DESCRIPTION = $2 AND EVENT_DATE = $3 WHERE ID = $4`,
    [Title, Description, Event_Date, Post],
    (err, data) => {
      if (err) {
        return console.log(err);
      }
      return res.status(200).json({ success: true, data: data });
    }
  );
};

const getallevents = (req, res) => {
  client.query(`SELECT * FROM EVENTS`, (err, data) => {
    if (err) {
      return console.log(err);
    }
    return res.status(200).json({ success: true, data: data });
  });
};

const getallposts = async (req, res) => {
  client.query(`SELECT * FROM POSTS ORDER BY POST_DATE`, (err, data) => {
    if (err) {
      return console.log(err);
    }
    return res.status(200).json({ success: true, data: data.rows });
  });
};

const getpostsofprofile = async (req, res) => {
  const organization = req.params.organization;
  client.query(
    `SELECT * FROM EVENTS WHERE AUTHOR = $1`,
    [organization],
    (err, data) => {
      if (err) {
        return console.log(err);
      }
      return res.status(200).json({ success: true, data: data });
    }
  );
};

const geteventsofprofile = async (req, res) => {
  const organization = req.params.organization;
  client.query(
    `SELECT * FROM POSTS WHERE AUTHOR = $1`,
    [organization],
    (err, data) => {
      if (err) {
        return console.log(err);
      }
      return res.status(200).json({ success: true, data: data });
    }
  );
};

module.exports = {
  CreateEvent,
  Create_Post,
  Delete_Event,
  Delete_Post,
  Update_Event,
  Update_Post,
  getallevents,
  getallposts,
  getpostsofprofile,
  geteventsofprofile,
};
