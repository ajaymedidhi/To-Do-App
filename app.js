const express = require('express');
const app = express();
const cors = require('cors');  
const authRoutes = require('./routes/authRoutes');
const todoRoutes = require('./routes/todoRoutes');
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);
app.use('/api/user', userRoutes);

module.exports = app;