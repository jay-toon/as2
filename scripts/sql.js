const mysql = require('mysql');

// This is the conceptual javascript files to be linked to a MySQL Database.

// Create a connection to the MySQL database
const connection = mysql.createConnection({
    host: 'localhost:3303',
    user: 'root',
    password: 'password',
    database: 'pacman'
});

// Connect to the database
connection.connect((err) => { // Error logging
    if (err) {
        console.error('Error connecting to the database: ', err); // Sends connection error to console
        return;
    }
    console.log('Connected to the database');
});

// Define the username and score values
const username = 'John'; // Concept for practice
const score = 100; // Concept for practice

// Insert the username and score into the database
const query = `INSERT INTO user_scores (username, score) VALUES ('${username}', ${score})`; // Query to insert data into the database

connection.query(query, (err, result) => { // 
    if (err) {
        console.error('Error inserting data into the database: ', err);
        return;
    }
    console.log('Data inserted successfully', result); // Sends result of query
});

// Close the database connection
connection.end((err) => {
    if (err) {
        console.error('Error closing the database connection: ', err); // Sends connectionc lose error to console
        return;
    }
    console.log('Database connection closed'); // Closed connection successfully
});