const fetch = require('node-fetch');
const { SUPABASE_URL, SUPABASE_KEY } = require('../config/config');

const getAllPosts = async () => {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/posts?select=*`, {
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`
    }
  });

  if (!response.ok) {
    throw new Error('Error fetching posts');
  }

  return response.json();
};

module.exports = {
  getAllPosts
};
