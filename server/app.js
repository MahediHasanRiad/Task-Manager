// Essential package
const express = require('express')
const app = express()
const routers = require('./src/Routers/api')

// security package
const cors = require('cors')
const mongoSanitize = require('express-mongo-sanitize')
const helmet = require('helmet')
const hpp = require('hpp')
const xssClean = require('xss-clean')
const rateLimit = require('express-rate-limit')


// database package
const mongoose = require('mongoose')



// rate limit configure
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})


// file format
app.use(express.urlencoded({extended: true}))
app.use(express.json())


// security package call
app.use(cors())
app.use(mongoSanitize())
app.use(helmet())
app.use(hpp())
app.use(xssClean())
app.use(limiter)


// Database connection
const url = 'mongodb://localhost:27017/Task-Manager'
mongoose.connect(url, ()=> {
    console.log('mongoose connection success')
})



// router
app.use('/', routers)




module.exports = app