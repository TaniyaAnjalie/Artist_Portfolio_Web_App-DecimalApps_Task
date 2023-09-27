const express = require('express');
const router = express.Router();
const Event = require('../Models/Event');

const {
  createEvent, 
  getEvent,
  getEventByID,
  putEventByID,
  deleteEventByID
} = require('../Controllers/eventController')

router.post('/', createEvent)
router.get('/', getEvent)
router.get('/:id', getEventByID)
router.put('/:id', putEventByID)
router.delete('/:id', deleteEventByID)

module.exports = router;
