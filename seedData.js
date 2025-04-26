const mongoose = require('mongoose');
require('dotenv').config();
const Property = require('./propertyModel');

const sampleProperties = [
  {
    title: 'Luxury Beach House',
    description: 'Beautiful beachfront property with amazing views',
    price: 1200000,
    location: 'Miami Beach',
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    imageUrl: 'https://example.com/beach-house.jpg'
  },
  {
    title: 'Downtown Apartment',
    description: 'Modern apartment in the heart of the city',
    price: 500000,
    location: 'New York City',
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    imageUrl: 'https://example.com/apartment.jpg'
  },
  {
    title: 'Mountain Cabin',
    description: 'Cozy cabin with mountain views',
    price: 300000,
    location: 'Aspen',
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    imageUrl: 'https://example.com/cabin.jpg'
  }
];

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    await Property.deleteMany({});
    await Property.insertMany(sampleProperties);
    console.log('Sample data inserted successfully');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error seeding data:', err);
    mongoose.connection.close();
  });
