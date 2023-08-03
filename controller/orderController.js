const OrderAddress = require("../schema/addressSchema")
const OrderPlace = require("../schema/placeOrderSchema")
const jwt = require('jsonwebtoken');

module.exports.addAddress = async (req, res) => {
    const { authtoken } = req.cookies
    const { id } = jwt.verify(authtoken, "authtoken")
    const newData = req.body
    const newAddress = new OrderAddress({ ...newData, userId: id })
    console.log(newAddress)
    try {
        await newAddress.save()
        console.log('inserted successfully  ')
        res.send('inserted successfully')
    } catch (error) {
        console.log(error.message)
    }
}
module.exports.getAddress = async (req, res) => {
    const { authtoken } = req.cookies
    try {
        const { id } = jwt.verify(authtoken, "authtoken")
        const data = await OrderAddress.find({ userId: id });
        if (data) {
            res.send(data)
            // console.log("user data ", data)
        } else {
            // res.send(false)
            console.log("false")
        }
    } catch (error) {
        console.log(error.message)
        // res.send(false)
    }
}


module.exports.deleteAddress = async (req, res) => {
    let { id } = req.body
    // console.log(id)
    try {
        await OrderAddress.deleteOne({ "_id": id })
        console.log('deleted successfully....')
    } catch (err) {
        console.log(err.message)
    }
}
module.exports.placeOrder = async (req, res) => {
    const { products, paymentMethos, deliverAddress } = req.body
    // console.log(products, paymentMethos, deliverAddress)
    const newOrder = new OrderPlace(products, paymentMethos, deliverAddress)
    try {
        await newOrder.save()
    } catch (error) {
        console.log(error.message)
    }
}