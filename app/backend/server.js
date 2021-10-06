const express = require('express');
const app = express();
const { pool } = require("./dbConfig.js");
const bcrypt = require("bcrypt");

// Middleware
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

// test backend
app.get('/', (req, res) => {
    res.send("Hello from backend!");
});

// test communication backend-frontend
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});



app.post('/users/register', async (req, res) => {

    let { nickname, email, password, password2 } = req.body;

    console.log(" ########### I reveived that from server: ", nickname, email, password, password2);

    hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of rounds for the hash
    console.log(`########### this is the hashed pw: ${hashedPassword} ########### `);
    // Validation passed
    // check if the email already exists in our db
    pool.query(
        `SELECT * FROM users
            WHERE email = $1`,
        [email],
        (err, results) => {
            if (err) {
                console.log(err);
            }
            console.log(` ########### if this is greater than 1 then the account already exists:  ${results.rows.length}`);

            if (results.rows.length > 0) {
                // find a way to show a validation at the page ----------------------

                res.send({ emailExists: true })

                console.log("########## account already exists ##########  ")

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
                        console.log(results.rows);
                        //req.flash("success_msg", "You are now registered. Please log in");
                        //res.redirect("/login"); // redirects to the login page
                    }
                );
            }
        }
    );


});


// handle POST from LOGIN page
app.post("/users/login", async (req, res) => {

    let { email, password } = req.body;

    console.log(email);
    console.log(password);

    pool.query(
        `SELECT * FROM users WHERE email = $1`,
        [email],
        (err, results) => {
            if (results.rows.length > 0) {
                console.log("EMAIL EXISTS in DB");
                const user = results.rows[0];
                console.log(user); // JSON Object -> id, name, email, password

                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (isMatch) {
                        console.log("WE HAVE A MATCH (PASSWORD)!!!!!");
                        res.send({ passwordIsCorrect: true })
                    }
                    else {
                        console.log("WE DONT HAVE A MATCH (PASSWORD)");
                        res.send({ passwordIsCorrect: false })
                    }
                });
            }
            else {
                console.log("EMAIL DOES NOT EXIST in DB");
            }
        }
    );
});

//chat #######################################################

//const http = require('http').createServer(app);
//const io = require('socket.io')(http);
/**
 * http.listen(PORT_CHAT, () => {
    console.log(`Chat runs on port ${PORT_CHAT}`);
});
 */

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const PORT_CHAT = 3002;

// CHAT LISTEN PORT
server.listen(PORT_CHAT, () => {
    console.log(`Chat runs on port ${PORT_CHAT}`);
});

// socket object -> to send messages to client
io.on('connection', (socket) => { 
    console.log('new user connected');
    //socket.emit('connection', null);
    socket.on('disconnect', () => {
    console.log('user disconnected')})

    // weiter
    socket.broadcast.emit('hi');
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
        console.log("takes the message from the frontend input field --> ", msg);
      });
    

});


const STATIC_MESSAGES = ['first-message', 'second-message'];

// create a way tofetch channels

app.get("/getMessages", (req, res) => {
    res.json({
        message: msg
    })
});


// chat end #######################################################

// listen port
app.listen(PORT, () => {
    console.log(`backend runs on port ${PORT}`);
});
