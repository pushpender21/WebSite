const mongoose = require('mongoose');


const breakfastSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  price: { type: Number },
  imageUrl: { type: String },
  createdOn: { type: Date, default: Date.now },
    updatedOn: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Breakfast', breakfastSchema);