const express = require('express');
const app = express();
const { pool } = require("./dbConfig.js");
const bcrypt = require("bcrypt");

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
    console.log(nickname,email, password, password2);
})

/* app.post("/users/register", async (req, res) => {
    let { name, email, password, password2 } = req.body;

    console.log({
        name, email, password, password2
    });
}); */



    /*
    let errors = [];

    hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of rounds for the hash
    console.log(`this is the hashed pw ${hashedPassword}`);
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
            console.log(` !!!!!!!! if this is greater than 1 then the account already exists:  ${results.rows.length}`);

            if (results.rows.length > 0) {
                // find a way to show a validation at the page ----------------------> done
                errors.push({ message: "Email already registered" });
                res.render("register", { errors }); // this will render the register page again showing the errors (props)

            } else {

                // if the e-mail does not already exist in the db, we can add a new user to the db

                pool.query(
                    `INSERT INTO users (name, email, password)
                    VALUES ($1, $2, $3)
                    RETURNING id, name, email,  password`,
                    [name, email, hashedPassword], // these are the values $1 $2 $3, we give them names
                    (err, results) => {
                        if (err) {
                            throw err;
                        }
                        console.log(results.rows);
                        //req.flash("success_msg", "You are now registered. Please log in");
                        res.redirect("/login"); // redirects to the login page
                    }
                );
            }
        }
    );


}); */

// listen port

app.listen(PORT, () => {
    console.log(`backend runs on port ${PORT}`);
});
