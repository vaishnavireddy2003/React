// backend/controllers/accidentController.js
const Accident = require('../models/Accident');

exports.reportAccident = async (req, res) => {
    try {
        const { location, description } = req.body;
        const accident = new Accident({ userId: req.user.id, location, description });
        await accident.save();
        res.status(201).json(accident);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAccidents = async (req, res) => {
    try {
        const accidents = await Accident.find({});
        res.json(accidents);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};