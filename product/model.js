const mongoose = require('mongoose');

const productScehma = new mongoose.Schema({
  title: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  year: { type: Number, required: true },
  catagory: { type: String, require: true },
  price: { type: Number, required: true },
  sellerPhone: { type: String, required: true },
  sellerLocation: { type: String, required: true },
  imagebaseLink: { type: String }
});

module.exports = mongoose.model('Products', productScehma);
