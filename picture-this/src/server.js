import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import pkg from 'pg';

const { Pool } = pkg;
dotenv.config({path: '../.env'});

const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.originalUrl}`);
  next();
});

app.get('/ping', (req, res) => {
  console.log("Ping received!");
  res.send("pong");
});

console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASS:', process.env.DB_PASS);
console.log('DB_PASS type:', typeof process.env.DB_PASS);

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
  });

const SECRET_KEY = process.env.JWT_SECRET;
console.log("Secret key:", SECRET_KEY)

// Register
app.post('/register', async (req, res) => {
  const { fullname, email, password, usertype } = req.body;
  const hashed = await bcrypt.hash(password, 10);

  try {
    const newUser = await pool.query(
      'INSERT INTO users (fullname, email, password_hash, usertype) VALUES ($1, $2, $3, $4) RETURNING id, fullname, email',
      [fullname, email, hashed, usertype]
    );
    res.json(newUser.rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];
    if (!user) return res.status(400).json({ error: 'User not found' });

    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) return res.status(400).json({ error: 'Invalid password' });
    console.log("user.fullname")
    console.log(user.fullname)
    const token = jwt.sign({ id: user.id, fullname: user.fullname, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token, user: { id: user.id, fullname: user.fullname, email: user.email } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//const authenticateToken = require('./middleware/auth');
import { authenticateToken } from './middleware/auth.js';

app.get('/profile', authenticateToken, async (req, res) => {
  console.log("User from token:", req.user);
  try {
    console.log("post profile")
    const userId = req.user.id;
    const result = await pool.query('SELECT id, fullname, email FROM users WHERE id = $1', [userId]);
    const user = result.rows[0];
    if (!user) return res.status(404).json({ error: 'User not found' });

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
