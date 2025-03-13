const express = require('express');
const router = express.Router();
const Accident = require('../models/Accident');

// POST - Report an Accident
router.post('/accidents', async (req, res) => {
    try {
        const { description, location } = req.body;
        if (!description || !location) {
            return res.status(400).json({ error: "Description and location are required" });
        }

        const newAccident = new Accident({ description, location });
        await newAccident.save();
        res.status(201).json({ message: 'Accident reported successfully!', accident: newAccident });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// GET - Fetch All Accidents
router.get('/accidents', async (req, res) => {
    try {
        const accidents = await Accident.find();
        res.json(accidents);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// DELETE - Remove an Accident
router.delete('/accidents/:id', async (req, res) => {
    try {
        await Accident.findByIdAndDelete(req.params.id);
        res.json({ message: 'Accident deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
