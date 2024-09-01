import axios from 'axios';
import { useState, useEffect } from 'react';

export function useFetchGet(endpoint, page = 1, pageSize = 10) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const rangeStart = (page - 1) * pageSize;
      const rangeEnd = page * pageSize - 1;

      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/rest/v1${endpoint}`, {
          headers: {
            apikey: process.env.REACT_APP_SUPABASE_ANON_KEY,
            Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_ANON_KEY}`,
            'Range': `${rangeStart}-${rangeEnd}`,
            'Range-Unit': 'items',
          },
        });

        setData(response.data);

        const contentRange = response.headers['content-range'];
        if (contentRange) {
          const totalItems = parseInt(contentRange.split('/')[1], 10);
          console.log(totalItems);
          setTotalCount(totalItems);
        }
        
        

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [endpoint, page, pageSize]);

  return { data, loading, error, totalCount };
}
