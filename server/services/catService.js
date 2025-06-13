const apiClient = require('../utils/apiClient');

async function fetchCatFact() {
  const res = await apiClient.get('https://catfact.ninja/fact');
  return res.data;
}

module.exports = { fetchCatFact };

