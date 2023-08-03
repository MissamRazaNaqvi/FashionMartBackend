const ProductCart = require('../schema/cartSchema')
const jwt = require('jsonwebtoken');
module.exports.addToCart = async (req, res) => {
    const { productId } = req.body
    const { authtoken } = req.cookies
    const { id } = jwt.verify(authtoken, "authtoken")
    const cartProduct = new ProductCart({ productId: productId, userId: id })
    try {
        await cartProduct.save()
        console.log('inserted successfully  ')
        res.send('inserted successfully')
    } catch (err) {
        res.send(err.message)
        console.log('error', err.message)
    }
}
module.exports.cartItem = async (req, res) => {
    const { authtoken } = req.cookies
    const { id } = jwt.verify(authtoken, "authtoken")
    try {
        let data = await ProductCart.find({ userId: id }).populate('productId')
        res.send(data)
    } catch (err) {
        res.send(err.message)
        console.log(err.message)
    }
}
module.exports.deleteCartItem = async (req, res) => {
    let { _id } = req.body
    try {
        await ProductCart.deleteOne({ _id: _id })
    } catch (err) {
        console.log(err.message)
        res.send(err.message)
    }
}