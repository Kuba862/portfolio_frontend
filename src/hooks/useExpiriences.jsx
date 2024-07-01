import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useExpiriences = (url, params) => {
  const [expiriencesState, setExpiriencesState] = useState([]);

  useEffect(() => {
    const fetchExpiriences = async () => {
      try {
        const res = await axios.get(url, params);
        setExpiriencesState(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchExpiriences();
  }, []);

  return { expiriencesState };
};

export default useExpiriences;
