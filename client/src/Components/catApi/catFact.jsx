import { useEffect, useState } from 'react';
import { fetchCatFact } from '../../api/catsApi';

export default function CatFact() {
  const [fact, setFact] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCatFact()
      .then(data => setFact(data.fact))
      .catch(err => setError(err.message));
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!fact) return <p>Loading...</p>;
  return <p>{fact}</p>;
}
