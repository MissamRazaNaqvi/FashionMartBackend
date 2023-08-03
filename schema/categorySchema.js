const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    category: String,
    checked: Boolean,
})

const Category = mongoose.model('categories', categorySchema);
module.exports = Category