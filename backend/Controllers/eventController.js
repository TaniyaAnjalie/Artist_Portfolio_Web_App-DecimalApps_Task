const Event = require('../Models/Event')

// Create an event
const postEvent = async(req, res) => {
    console.log(req.body);
    res.send(req.body)
    try {
      const event = new Event(req.body);
      await event.save();
      res.status(201).json(event);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Read all events
 const getEvent = async(req, res) => {
    console.log(req.body);
    res.send(req.body)
    try {
      const events = await Event.find();
      res.json(events);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Read a single event by ID
  const getEventByID = async(req, res) => {
    console.log(req.body);
    res.send(req.body)
    try {
      const event = await Event.findById(req.params.id);
      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }
      res.json(event);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Update an event by ID
  const putEventByID = async(req, res) => {
    console.log(req.body);
    res.send(req.body)
    try {
      const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }
      res.json(event);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Delete an event by ID
  const deleteEventByID = async(req, res) => {
    console.log(req.body);
    res.send(req.body)
    try {
      const event = await Event.findByIdAndRemove(req.params.id);
      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }
      res.json({ message: 'Event deleted' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  module.exports = {
    postEvent,
    getEvent,
    getEventByID,
    putEventByID,
    deleteEventByID
  }