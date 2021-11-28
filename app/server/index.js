const keys = require("./keys");

// Express Application setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgres client setup
const { Pool } = require("pg");
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort
});

pgClient.on("connect", client => {
    client  
        .query("CREATE TABLE IF NOT EXISTS users (id BIGSERIAL NOT NULL, name VARCHAR(200) NOT NULL, email VARCHAR(200) NOT NULL, password VARCHAR(200) NOT NULL, PRIMARY KEY (id), UNIQUE (email))")
        .catch(err => console.log("PG Error", err));
});

//Express route definitions
app.get("/", (req, res) => {
    res.send("Hi from the backend");
  });
  
// Express route definitions
app.get("/users/register", async(req, res) =>{
    const users = await pgClient.query("SELECT  * FROM users");
    res.send(users);

});

//now the post insert the user values

app.post("/users/register", async(req, res) => {
    if(!req.body.value) res.send({working: false});

    pgClient.query("INSERT INTO users(name, email) VALUES($1,$2)", [req.body.value]);

    res.send({ working: true });
});

app.listen(5000, err => {
  console.log("Listening");
});
