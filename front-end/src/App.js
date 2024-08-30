// react-frontend/src/App.js
import React, { useEffect } from 'react';

function App() {
  async function getData() {
    try {
      // Faz a chamada para o middleware no servidor Express
      const res = await fetch('http://localhost:3000/api/posts');
      if (!res.ok) {
        console.error('Error fetching data:', res.statusText);
        return;
      }
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return <div className="App">Hello, Middleware!</div>;
}

export default App;
