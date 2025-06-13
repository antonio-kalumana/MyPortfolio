const { fetchCatFact } = require('../services/catService');

async function getCatFact(req, res) {
  try {
    const data = await fetchCatFact();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cat fact' });
  }
}

module.exports = { getCatFact };
