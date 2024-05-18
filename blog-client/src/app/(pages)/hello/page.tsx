'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Hello = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('/api/hello')
            console.log(response);
            
            setData(response.data);
          } catch (error) {
            
          } 
        };
    
        fetchData();
      }, []);

      return (
        <div>
            <h1>Data from Flask API:</h1>
            <pre>{data}</pre>
        </div>
      );
};

export default Hello;