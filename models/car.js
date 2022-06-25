// Import
// car model schema
// File Name: car.js
// Author's Name: Aruna Ravi Kumar
// Student ID: 301243154
// Web app name: Car Applcation
let mongoose = require('mongoose');

// Create a model class
let carModel = mongoose.Schema(
    {
        make: String,
        model: String,
        year: Number,
        kilometers: Number,
        doors: Number,
        seats: Number,
        color: String,
        price: Number        
    },
    {
        collection: "car"
    }
);

module.exports = mongoose.model('car', carModel);