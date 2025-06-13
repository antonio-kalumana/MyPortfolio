const express = require('express');
const cors = require('cors');
const catRoutes = require('./routes/catRoutes');

const app = express();
const PORT = 5001;

app.use(cors());             // ✅ MUST come before routes
app.use(express.json());

app.use('/api/cats', catRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
