// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Harami12',
  database: 'alumni_db',
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database');
});

// Middleware
app.use(bodyParser.json());

// Register endpoint
app.post('/register', (req, res) => {
  const { user_id, name, email, password } = req.body;

  const sql = `INSERT INTO USER (user_id, name, email, password) VALUES (?, ?, ?, ?)`;
  const values = [user_id, name, email, password];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    console.log('User registered:', result);
    res.status(200).json({ message: 'User registered successfully' });
  });
});




app.post('/login/user', (req, res) => {
  const { user_id, password } = req.body;
  const query = `SELECT * FROM USER WHERE user_id = '${user_id}' AND password = '${password}'`;

  db.query(query, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.json({ success: true });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  });
});

// Admin login endpoint
app.post('/login/admin', (req, res) => {
  const { admin_id, password } = req.body;
  const query = `SELECT * FROM admin WHERE Admin_id = '${admin_id}' AND password = '${password}'`;

  db.query(query, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.json({ success: true });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  });
});



app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});
