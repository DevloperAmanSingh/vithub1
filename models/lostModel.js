const mongoose = require('mongoose');

const lostSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['Accessories', 'Books', 'Clothes', 'Electronics', 'Others'],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    timestamp: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: false
    },
    contact: {
        type: String,
        required: false
    },
});

module.exports = mongoose.model('Lost', lostSchema);
