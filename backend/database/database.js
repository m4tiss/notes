const mongoose = require('mongoose');

const dbURI = process.env.MONGODB_URI || 'mongodb://mongo:27017/notes';

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('MongoDB connection error:', err);
});
