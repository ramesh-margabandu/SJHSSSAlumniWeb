const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventModel = new Schema({
    id: { type: String },
    title: { type: String },
    details: { type: String },
    location: { type: String },
    date: { type: String },
    time: { type: String },
    iconImageUrl: { type: String },
    detailImageUrl: { type: String }    
});

module.exports = mongoose.model('Event', eventModel);