const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
    id: String,
    price: String,
    rating: String,
    title: String,
    description: String,
    discountPercentage: String,
    stock: String,
    brand: String,
    category: String,
    thumbnail: String,
    images: [String],
})
const Product = mongoose.model('product', productSchema);
module.exports = Product

