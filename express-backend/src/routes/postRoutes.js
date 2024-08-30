const express = require('express');
const router = express.Router();

// Defina suas rotas aqui
router.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

router.post('/', (req, res) => {
  res.send('POST request to the homepage');
});

module.exports = router;
