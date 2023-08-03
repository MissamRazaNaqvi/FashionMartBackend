const mongoose = require('mongoose')
const Connection = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_URL)
        console.log('database connected successfully...')
    } catch (error) {
        console.log('connection fail', error)
    }
}
module.exports = Connection
