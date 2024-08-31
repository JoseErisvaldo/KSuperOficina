const express = require('express');
const router = express.Router();

const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
// Rota para obter posts do Supabase
router.get('/', async (req, res) => {
  try {
    const response = await fetch(`${process.env.SUPABASE_URL}/rest/v1/posts?select=*`, {
      headers: {
        apikey: process.env.SUPABASE_KEY || '',
        Authorization: `Bearer ${process.env.SUPABASE_KEY || ''}`,
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({ message: 'Error fetching data from Supabase' });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

module.exports = router;
