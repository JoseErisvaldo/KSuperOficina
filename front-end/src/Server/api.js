import axios from 'axios';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
const REACT_APP_SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY;

const api = axios.create({
  baseURL: `${REACT_APP_API_URL}/rest/v1`,
  headers: {
    apikey: REACT_APP_SUPABASE_ANON_KEY,
    Authorization: `Bearer ${REACT_APP_SUPABASE_ANON_KEY}`,
  },
});

export default api;
