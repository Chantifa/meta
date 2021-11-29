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
        .query( `SELECT * FROM users
        WHERE email = $1`,
    [email],
    (err, results) => {
        if (err) {
            console.log(err);
        }
        // if results.rows.length > 0  -----> account already exists
        if (results.rows.length > 0) {
            res.send({ emailExists: true })
            .catch(err => console.log("PG ERROR", err));
        } 
        else{
          // if the e-mail does not already exist in the db, we can add a new user to the db
          query(
              `INSERT INTO users (name, email, password)
              VALUES ($1, $2, $3)
              RETURNING id, name, email,  password`,
              [nickname, email, hashedPassword]
              )// these are the values $1 $2 $3, we give them names)
        .catch(err => console.log("PG Error", err));
      }
    })
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

const { createServer } = require("http");
const httpServer = createServer(app);
const { Server } = require("socket.io");
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
   // on to receive from the room with string, emit to send to this room
   socket.on('chat from frontend', (msg) => {
    io.emit('chat from backend', msg);
    //console.log("takes the message from the frontend input field and saves it to 'msg' var via 'chat message' --> ", msg);
})
});

httpServer.listen(3000);