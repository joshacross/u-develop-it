const mysql = require('mysql2');
const express = require('express');

// adding PORT destination and app expression
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/*
<------------TEST-------->
//Test Express.js connection
app.get('/', (req, res) => {
    res.json({
        message: "Hello World"
    });
});
<------------------------->
*/

// Connect to Database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your mySQL username,
        user: 'root',
        // Your mySQL pwd
        password: 'mySQLBallz00oo!23!23',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

// Return all the data in the candidates table
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
})

//Route to handle user requests that are not supported by the app
app.use((req, res) => {
    res.status(404).end();
});


// function to start Express.js server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});