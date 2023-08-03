const express = require('express')
const Connection = require('./dbConfig')
const dotenv = require('dotenv')
const cors = require('cors')
const routes = require('./routes/product')
const cookieParser = require('cookie-parser')

const app = express()
// app.use(cors())
// app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(cors({ origin: 'https://fashion-mart-pi.vercel.app', credentials: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config()
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());
app.use('/', routes)

Connection()

app.listen(8081, () => { console.log('server running  successfully... on 8081') })