const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DATABASE_URI,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

module.exports = client;
