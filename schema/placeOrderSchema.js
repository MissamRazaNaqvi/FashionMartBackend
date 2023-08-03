const mongoose = require('mongoose')
const orderSchema = mongoose.Schema({
    products:[String],
    paymentMethod:String,
    deliveryAddressid:String
})
const OrderPlace = mongoose.model('orders', orderSchema);
module.exports = OrderPlace