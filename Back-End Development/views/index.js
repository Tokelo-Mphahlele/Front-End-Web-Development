const express = require('express')
const app = express()
// loading our routers
const mainRouter = require('./mainRoutes.js')
const classRouter = require('./classRoutes.js')
// mounting our routers
app.use('/', mainRouter)
app.use('/class', classRouter)
app.listen(3000)
console.log('Express server running on port 3000')
