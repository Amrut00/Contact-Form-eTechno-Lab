require('dotenv').config();
const express = require('express');
const cors = require('cors');
const submissionRoutes = require('./routes/submissionRoutes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', submissionRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000/'));
