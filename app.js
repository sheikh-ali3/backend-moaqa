const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const quotationsRouter = require('./routes/quotations');
const serviceRouter = require('./routes/serviceRoutes');
 
const app = express();

app.use(cors({
  origin: ['http://localhost:3001', 'https://your-frontend-domain.com'],
  credentials: true
}));

// Register routes
app.use('/api/quotations', quotationsRouter);
app.use('/api/services', serviceRouter); 