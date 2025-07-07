const mongoose = require('mongoose');


const dinnerSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  price: { type: Number },
  imageUrl: { type: String },
  category:{type:String},
  createdOn: { type: Date, default: Date.now },
    updatedOn: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Dinner', dinnerSchema);