const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const Event = require('./Event');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5001;

// Debug logs
mongoose.connection.once('open', async () => {
  console.log('Connected to DB:', mongoose.connection.name);


const collections = await mongoose.connection.db.listCollections().toArray();
  console.log('Collections in this DB:', collections.map(c => c.name));
});

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('MongoDB connection error:', err));

// Simple GET route
app.get('/', (req, res) => {
  res.send('Outly API is running');
});

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

// Main API endpoint
app.get('/api/events', async (req, res) => {
  try {
    console.log('Attempting to fetch events...');
    console.log('MongoDB URI:', process.env.MONGODB_URI ? 'URI is set' : 'URI is missing');
    
    const events = await Event.find({});
    console.log('Events fetched successfully:', events);
    res.json(events);
  } catch (error) {
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    res.status(500).json({ message: 'Failed to fetch events', error: error.message });
  }
});


// Join Event Route
app.post('/api/events/:id/join', async (req, res) => {
    const eventId = req.params.id;
    console.log(`JOIN EVENT called with ID: ${eventId}`); 

    try {
      const event = await Event.findById(eventId);
      console.log('Event from DB:', event); 

      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }
  
      if (event.currentAttendees >= event.maxAttendees) {
        return res.status(400).json({ message: 'Event is full' });
      }
  
      event.currentAttendees += 1;
      await event.save();
  
      res.json({
        message: 'Successfully joined event',
        event: {
          name: event.title,
          attendees: `${event.currentAttendees} / ${event.maxAttendees}`
        }
      });
    } catch (error) {
      console.error('Error joining event:', error);
      res.status(500).json({ message: 'Failed to join event' });
    }
  });
  
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
const serverless = require('serverless-http');
module.exports.handler = serverless(app);

