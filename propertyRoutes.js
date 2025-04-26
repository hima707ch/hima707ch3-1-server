const express = require('express');
const router = express.Router();
const Property = require('./propertyModel');

// Get list of properties with optional filters
router.get('/list', async (req, res) => {
    try {
        const { location, minPrice, maxPrice } = req.query;
        let query = {};

        if (location) {
            query.location = { $regex: location, $options: 'i' };
        }

        if (minPrice || maxPrice) {
            query.price = {};
            if (minPrice) query.price.$gte = Number(minPrice);
            if (maxPrice) query.price.$lte = Number(maxPrice);
        }

        const properties = await Property.find(query);
        res.json(properties);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching properties', error: error.message });
    }
});

// Get property details by ID
router.get('/details/:id', async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.json(property);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching property details', error: error.message });
    }
});

module.exports = router;
