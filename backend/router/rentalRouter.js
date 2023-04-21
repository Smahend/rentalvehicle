const express = require('express');
const router = express.Router();
const Rental = require('../models/Rental');

router.post('/', async (req, res) => {
  try {
    const { name, vehicleType, pickupDate, returnDate } = req.body;
    const rental = new Rental({
      first_name,
      last_name,
      vehicleType,
      pickupDate,
      returnDate,
    });
    await rental.save();
    res.status(201).json({ message: 'Rental submitted successfully!' });
  } catch (error) {
    res.status(400).json({ message: 'Unable to submit rental.' });
  }
});

module.exports = router;
