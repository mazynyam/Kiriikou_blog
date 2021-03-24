const mongoose = require('mongoose');

const Testimony = mongoose.model('Testimony', {
    name: {
        type: String,
        trim: true,
        required: 'Name is required'   
    },
    country: {
        type: String,
        trim: true,
        required: 'Country is required'
    },
    content: {
        type: String,
        trim: true,
        required: 'Content is required'
    },
    date_created: {
        type: String,
        default:Date.now
    }
});


module.exports = Testimony