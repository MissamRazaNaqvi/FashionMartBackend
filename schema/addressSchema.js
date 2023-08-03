const mongoose = require('mongoose')
const orderAddressSchema = mongoose.Schema({
    name: String,
    email: String,
    country: String,
    state: String,
    city: String,
    zipcode: String,
    street: String,
    phone: Number,
    userId: String
})
const OrderAddress = mongoose.model('addresses', orderAddressSchema);
module.exports = OrderAddress