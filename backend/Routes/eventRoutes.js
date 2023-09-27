const express = require('express');
const router = express.Router();
const Event = require('../Models/Event');

const {
  postEvent, 
  getEvent,
  getEventByID,
  putEventByID,
  deleteEventByID
} = require('../Controllers/ArtController')

router.post('/', postEvent)
router.get('/', getEvent)
router.get('/:id', getEventByID)
router.put('/:id', putEventByID)
router.delete('/:id', deleteEventByID)

module.exports = router;
