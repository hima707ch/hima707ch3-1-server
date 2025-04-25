const express = require('express');
const router = express.Router();
const Property = require('./propertyModel');

// Search properties
router.get('/search', async (req, res) => {
    try {
        const { location, minPrice, maxPrice, bedrooms } = req.query;
        
        let query = {};
        
        if (location) {
            query.location = { $regex: location, $options: 'i' };
        }
        
        if (minPrice || maxPrice) {
            query.price = {};
            if (minPrice) query.price.$gte = Number(minPrice);
            if (maxPrice) query.price.$lte = Number(maxPrice);
        }
        
        if (bedrooms) {
            query.bedrooms = Number(bedrooms);
        }
        
        const properties = await Property.find(query);
        res.json(properties);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get property by ID
router.get('/:id', async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.json(property);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;