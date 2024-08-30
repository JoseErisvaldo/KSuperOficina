const express = require('express');
const cors = require('cors');
const errorHandler = require('./errorHandler');
const postRoutes = require('./routes/postRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/posts', postRoutes);

// Middleware de tratamento de erros
app.use(errorHandler);

module.exports = app;
