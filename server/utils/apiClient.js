const axios = require('axios');

const apiClient = axios.create({
  timeout: 5000,
  headers: {
    'Accept': 'application/json',
  },
});

module.exports = apiClient;
