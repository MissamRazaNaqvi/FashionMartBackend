const Category = require("../schema/categorySchema")
const Product = require("../schema/productSchema")

module.exports.getAllProduct = async (req, res) => {
    try {
        let data = await Product.find()
        res.send(data)
    } catch (err) {
        res.send(err.message)
    }
}
module.exports.getProductBuId = async (req, res) => {
    let { id } = req.params
    try {
        let data = await Product.findById(id)
        res.send(data)
    }
    catch (error) {
        console.log('error', error.message)
        res.send(error.message)
    }
}

module.exports.getCategories = async (req, res) => {
    try {
        let data = await Category.find()
        res.send(data)
    } catch (err) {
        console.log(err.message)
        res.send(err.message)
    }
}