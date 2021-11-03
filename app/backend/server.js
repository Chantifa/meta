const express = require('express');
const app = express();
const { pool } = require("./dbConfig.js");
const bcrypt = require("bcrypt");

// Middleware
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//const PORT = process.env.PORT || 3001;

// test backend :3001 working
app.get('/', (req, res) => {
    res.send("Hello from backend!");
});

app.post('/users/register', async (req, res) => {

    let { nickname, email, password, password2 } = req.body;

    //TODO: validation password - password2

    //encrypt pass
    hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of rounds for the hash

    // check if the email already exists in our db
    pool.query(
        `SELECT * FROM users
            WHERE email = $1`,
        [email],
        (err, results) => {
            if (err) {
                console.log(err);
            }
            // if results.rows.length > 0  -----> account already exists
            if (results.rows.length > 0) {
                res.send({ emailExists: true })
            } else {
                // if the e-mail does not already exist in the db, we can add a new user to the db
                pool.query(
                    `INSERT INTO users (name, email, password)
                    VALUES ($1, $2, $3)
                    RETURNING id, name, email,  password`,
                    [nickname, email, hashedPassword], // these are the values $1 $2 $3, we give them names
                    (err, results) => {
                        if (err) {
                            throw err;
                        }
                    }
                );
            }
        }
    );


});

// handle POST from LOGIN page
app.post("/users/login", async (req, res) => {

    let { name, email, password } = req.body;

    pool.query(
        `SELECT * FROM users WHERE email = $1`,
        [email],
        (err, results) => {
            // if the e-mail exists in the DB, the user exist -> go further
            if (results.rows.length > 0) {
                const user = results.rows[0];

                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (isMatch) {
                        // password matches with the decrypted password in db
                        res.send({ passwordIsCorrect: true, username: user.name })
                    }
                    else {
                        // password does not match with the one in db
                        // TODO: handle validation
                        res.send({ passwordIsCorrect: false })
                    }
                });
            }
            else {
                //if the email does not exist
                console.log("EMAIL DOES NOT EXIST in DB");
                // TODO: validation
            }
        }
    );
});

//chat #######################################################

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// socket object -> to send messages to client
io.on('connection', (socket) => {

    socket.on('chat message send from frontend', (msg) => {
        io.emit('chat message send from backend', msg);
        //console.log("takes the message from the frontend input field and saves it to 'msg' var via 'chat message' --> ", msg);
    });
});

const WEBSOCKET_PORT = 3001;

// CHAT LISTEN PORT
server.listen(WEBSOCKET_PORT, () => {
    console.log(`Backend Server runs on port ${WEBSOCKET_PORT}`);
});