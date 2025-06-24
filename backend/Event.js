const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  location: String,
  city: String,
  category: String,
  date: String,
  image: String,
  currentAttendees: Number,
  maxAttendees: Number
}, {
  collection: 'events' // ✅ explicitly tell Mongoose to use this collection
});

module.exports = mongoose.model('Event', eventSchema);
 