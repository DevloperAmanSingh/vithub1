const mongoose = require('mongoose');

const foundSchema = new mongoose.Schema({
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
    timeAgo: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: false
    },
    contact: {
        type: String,
        required: true
    },

});

module.exports = mongoose.model('Found', foundSchema);
