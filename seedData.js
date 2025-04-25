const mongoose = require('mongoose');
require('dotenv').config();
const Property = require('./propertyModel');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const sampleProperties = [
    {
        title: 'Modern Downtown Apartment',
        location: 'New York City',
        price: 500000,
        description: 'Beautiful modern apartment in the heart of NYC',
        bedrooms: 2,
        bathrooms: 2,
        area: 1000
    },
    {
        title: 'Suburban Family Home',
        location: 'Los Angeles',
        price: 750000,
        description: 'Spacious family home with large backyard',
        bedrooms: 4,
        bathrooms: 3,
        area: 2500
    },
    {
        title: 'Beachfront Condo',
        location: 'Miami',
        price: 600000,
        description: 'Stunning beachfront condo with ocean views',
        bedrooms: 3,
        bathrooms: 2,
        area: 1500
    }
];

async function seedDatabase() {
    try {
        await Property.deleteMany({});
        await Property.insertMany(sampleProperties);
        console.log('Database seeded successfully');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}

seedDatabase();