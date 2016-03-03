'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var Attributes = new mongoose.Schema({
  name: String,
  values: [{
    value: String,
    price: Number,
    quantity: Number,
    image: String,
    subsku: String
  }]
});

var ProductSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean,
  category: String,
  price: Number,
  quantity: Number,
  sku: String,
  image: String,
  description: String,
  attribute: [Attributes]
});

export default mongoose.model('Product', ProductSchema);
