const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
//   username: { type: String, required: true },
//   description: { type: String, required: true },
//   duration: { type: Number, required: true },
//   date: { type: Date, required: true },
  image_id: {type: String},
  original_price: {type: String, required: true },
  hyperlink:  {type: String, required: true},
  ProductName: {type:String, required: true}
}, {
  timestamps: true,
});

const products = mongoose.model('products', ProductSchema);

module.exports = products;