const mongoose = require('mongoose')
const cartSchema = mongoose.Schema({
    productId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true }],
    userId: String
})
const ProductCart = mongoose.model('carts', cartSchema);
module.exports = ProductCart