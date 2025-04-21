// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Change = require('./models/Change');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error(err));

app.get('/api/changes/:section', async (req, res) => {
  const changes = await Change.find({ section: req.params.section });
  res.json(changes);
});

app.post('/api/changes', async (req, res) => {
  const { section, slotNum, text, color, link, desc, image } = req.body;
  const change = await Change.findOneAndUpdate(
    { section, slotNum },
    { text, color, link, desc, image },
    { upsert: true, new: true }
  );
  res.json(change);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on ${PORT}`));
