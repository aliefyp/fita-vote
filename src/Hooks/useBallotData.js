import { useEffect, useCallback, useState } from 'react';
import api from '../Api/Api';

/**
 * Get api ballot data
 * 
 * @returns {Array} result.data Response data from api
 * @returns {boolean} result.loading Loading state
 */

const useBallotData = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchBallotData = useCallback(() => {
    api.getBallotData()
      .then(res => {
        if (res.items) setData(res.items);
        else throw new Error('Gagal memuat data')
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false)
        }, 1000);
      })
  }, []);

  useEffect(() => {
    fetchBallotData();
  }, [fetchBallotData]);

  return { data, loading, error };
}

export default useBallotData;
