import axios from 'axios';

const SUPABASE_API_URL = process.env.REACT_APP_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_KEY;

const api = axios.create({
  baseURL: `${SUPABASE_API_URL}/rest/v1`,
  headers: {
    apikey: SUPABASE_ANON_KEY,
    Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
  },
});

export default api;
