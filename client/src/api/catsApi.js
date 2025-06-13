// src/api/catsApi.js
export async function fetchCatFact() {
  const res = await fetch('http://localhost:5001/api/cats/fact');
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}
