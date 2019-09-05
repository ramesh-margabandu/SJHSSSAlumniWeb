const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newsModel = new Schema({
    title: {type: String},
    details: {type: String},
    imageUrl: {type: String},
    date: {type: String},
    postedBy: {type: String},
    comments: [
        {
            comment : {type: String},
            postedBy : {type: String}
        }
    ]
});

module.exports = mongoose.model('News', newsModel);