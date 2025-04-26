const mongoose = require('mongoose');
require('dotenv').config();
const Property = require('./propertyModel');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const sampleProperties = [
    {
        title: 'Luxury Beachfront Villa',
        description: 'Beautiful villa with direct beach access',
        price: 1200000,
        location: 'Miami Beach, FL',
        bedrooms: 4,
        bathrooms: 3,
        area: 3500,
        imageUrl: 'https://example.com/villa1.jpg'
    },
    {
        title: 'Modern Downtown Apartment',
        description: 'Stylish apartment in city center',
        price: 500000,
        location: 'New York, NY',
        bedrooms: 2,
        bathrooms: 2,
        area: 1200,
        imageUrl: 'https://example.com/apartment1.jpg'
    },
    {
        title: 'Suburban Family Home',
        description: 'Spacious home in quiet neighborhood',
        price: 750000,
        location: 'Austin, TX',
        bedrooms: 4,
        bathrooms: 2.5,
        area: 2800,
        imageUrl: 'https://example.com/home1.jpg'
    }
];

async function initializeDb() {
    try {
        await Property.deleteMany({});
        await Property.insertMany(sampleProperties);
        console.log('Sample data inserted successfully');
    } catch (error) {
        console.error('Error initializing database:', error);
    } finally {
        mongoose.disconnect();
    }
}

initializeDb();
