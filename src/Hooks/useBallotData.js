import { useEffect, useCallback, useState } from 'react';
import api from '../Api/Api';

const useBallotData = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchBallotData = useCallback(() => {
    api.getBallotData()
      .then(res => {
        if (res.items) setData(res.items);
        else throw new Error('Gagal memuat data')
      })
      .catch(err => console.log(err))
      .finally(() => {
        setTimeout(() => {
          setLoading(false)
        }, 1000);
      })
  }, []);

  useEffect(() => {
    fetchBallotData();
  }, [fetchBallotData]);

  return { data, loading };
}

export default useBallotData;
