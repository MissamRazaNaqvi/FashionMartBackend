const express = require('express')
const { verifytoken, createUser, login, verifyadmin, logout } = require('../controller/userController')
const { getAllProduct, getProductBuId, getCategories } = require('../controller/productController')
const { getAddress, deleteAddress, placeOrder, addAddress } = require('../controller/orderController')
const { addToCart, cartItem, deleteCartItem } = require('../controller/cartController')

const routes = express.Router()

routes.get('/products', getAllProduct)
routes.get('/products/:id', getProductBuId)

routes.post('/cart', addToCart)
routes.get('/cartItem', cartItem)
routes.post('/deleteCartItem', deleteCartItem)

routes.get('/categories', getCategories)

routes.get("/verify", verifytoken)
routes.post("/admin", verifyadmin)

routes.post('/user', createUser)
routes.post('/login', login)
routes.get('/logout', logout)

routes.post('/address', addAddress)
routes.get('/addressList', getAddress)
routes.post('/deladdress', deleteAddress)

routes.post('/order', placeOrder)

module.exports = routes