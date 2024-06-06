// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());


const db = mysql.createConnection({
  host: 'sql12.freemysqlhosting.net',
  user: 'sql12712256',
  password: 'ZjqHQNEChh',
  database: 'sql12712256',
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



app.post('/api/alumni', (req, res) => {
  const { user_id, name, dob, motherName, fatherName, phone, address, graduation_date, admission_date, course } = req.body;

  const sql = `INSERT INTO ALUMNI (user_id, name, dob, motherName, fatherName, phone, address, graduation_date, admission_date, course) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const values = [user_id, name, dob, motherName, fatherName, phone, address, graduation_date, admission_date, course];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    console.log('Alumni details submitted:', result);
    res.status(200).json({ message: 'Alumni details submitted successfully' });
  });
});


app.get('/api/alumni/:user_id', (req, res) => {
  const user_id = req.params.user_id;

  const sql = `SELECT * FROM alumni WHERE user_id = ?`;
  db.query(sql, [user_id], (err, result) => {
      if (err) {
          console.error(err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
      }
      if (result.length > 0) {
          res.json({ exists: true });
      } else {
          res.json({ exists: false });
      }
  });
});


app.get('/api/alumnidetails/:user_id', (req, res) => {
  const user_id = req.params.user_id;

  const sql = `SELECT * FROM ALUMNI WHERE user_id = ?`;
  db.query(sql, [user_id], (err, result) => {
      if (err) {
          console.error(err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
      }
      if (result.length > 0) {
          res.json({ exists: true, details: result[0] });
      } else {
          res.json({ exists: false });
      }
  });
});


app.delete('/api/alumnidetails/:user_id', (req, res) => {
  const user_id = req.params.user_id;

  const sql = `DELETE FROM ALUMNI WHERE user_id = ?`;
  db.query(sql, [user_id], (err, result) => {
      if (err) {
          console.error(err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
      }
      if (result.affectedRows > 0) {
          res.json({ success: true, message: 'Alumni details deleted successfully.' });
      } else {
          res.json({ success: false, message: 'No alumni details found for deletion.' });
      }
  });
});



app.get('/api/alumni', (req, res) => {
  const sql = 'SELECT * FROM alumni';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error fetching alumni data:', err);
      res.status(500).json({ error: 'Error fetching alumni data' });
    } else {
      res.json(result);
    }
  });
});


app.delete('/api/alumni/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM alumni WHERE id = ?';
  db.query(sql, id, (err, result) => {
    if (err) {
      console.error('Error deleting alumni:', err);
      res.status(500).json({ error: 'Error deleting alumni' });
    } else {
      res.json({ message: 'Alumni deleted successfully' });
    }
  });
});



app.post('/api/events', (req, res) => {
  const { title, location, date, description, image } = req.body;

  const sql = `INSERT INTO event (title, location, date, description, image) VALUES (?, ?, ?, ?, ?)`;
  const values = [title, location, date, description, image];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    console.log('event added successfully:', result);
    res.status(200).json({ message: 'Event added successfully' });
  });
});



// app.get('/api/events', (req, res) => {
//   const query = 'SELECT * FROM event';
//   connection.query(query, (err, result) => {
//     if (err) {
//       res.status(500).send(err);
//       return;
//     } else {
//       res.json(result);
//     }
//   });
// });


app.get('/api/events', (req, res) => {
  const sql = 'SELECT * FROM event';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error fetching alumni data:', err);
      res.status(500).json({ error: 'Error fetching alumni data' });
    } else {
      res.json(result);
    }
  });
});




app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});
