const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database('./users.db', (err) => {
  if (err) {
    console.error('Помилка при підключені до бази даних', err.message);
  } else {
    console.log('Успішно підключено до бази даних');
  }
});

db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  gender TEXT,
  dateOfBirth TEXT
)`);

app.post('/register', (req, res) => {
  const { name, email, password, gender, dateOfBirth } = req.body;
  const sql = 'INSERT INTO users (name, email, password, gender, dateOfBirth) VALUES (?, ?, ?, ?, ?)';

  db.run(sql, [name, email, password, gender, dateOfBirth], function(err) {
    if (err) {
      console.error(err.message);
      res.status(400).json({ message: 'Email уже використовується.' });
    } else {
      res.status(201).json({ message: 'Користувач успішно зареєстрований.' });
    }
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';

  db.get(sql, [email, password], (err, user) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Помилка на сервері.' });
    } else if (user) {
      res.json({ message: 'Вхід успішний.', user });
    } else {
      res.status(401).json({ message: 'Невірний email або пароль.' });
    }
  });
});

app.get('/profile/:email', (req, res) => {
  const email = req.params.email;
  const sql = 'SELECT name, email, gender, dateOfBirth FROM users WHERE email = ?';

  db.get(sql, [email], (err, user) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Помилка на сервері.' });
    } else if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Користувача не знайдено.' });
    }
  });
});

app.listen(port, () => {
  console.log(`Сервер запущено на http://localhost:${port}`);
});
