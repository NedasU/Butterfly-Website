// require is basically import
const express = require('express');

// used to make connections to the mysql database
const mysql = require('mysql2');

// middleware that enables CORS (Cross-Origin-Resource-Sharing)
// allowing frontend to communicate with backend
const cors = require('cors');


// start the app using the express call
const app = express();
const port = 5000;

//connect the middleware to the app
app.use(cors()); // allows request from front end
app.use(express.json()) // uses only the JSON request Bodies part


// MySQL connection
const db = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: ''
});

// Establishing the connection to the database
db.connect(err => {
    // catches errors
    if (err){
        console.log("Error connecting to MySQL: ", err);
        return;
    }
    console.log("Connected to MySQL");
})

// Handling the Post and Get Requests

//Handling Post requests

app.post('/addrequest', (req, res) => {
    const { name, email, info} = req.body;
    const query = 'INSERT INTO requests (name, email, info) VALUES (?, ?, ?)';
    db.query(query, [name, email, info], (err, result) => {
        if (err) {
            // If an error occurs, returns an error status 500 and an error message
            return res.status(500).json({ error: 'Error inserting data' });
        }
        res.status(201).json({ message: 'Request Added', id: result.insertId });
    });
});


app.get("/getbutterflies", (req, res) => {
    const query = 'SELECT * FROM butterfly_data';

    db.query(query, (err, result) => {
        if (err){
            return res.status(500).json({ error:'An Error in retrieving data' });

        }
        res.json(result);
    });
});

// Starting the server here on chosen port
app.listen(port, ()=> {
    console.log(`Server running on http://localhost:${port}`);
});