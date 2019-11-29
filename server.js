if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 3000

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(express.json())

const recordsRouter = require('./routes/records')
app.use('/records', recordsRouter)

app.get('/', function (req, res) {
    res.send("You can't send GET request to endpoint!");
});

app.listen(port, () => console.log('server started'))

module.exports = app