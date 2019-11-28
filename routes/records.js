const express = require('express')
const moment = require('moment')
const router = express.Router()
const RecordController = require('../controllers/record')


router.post('/', async (req, res) => {
    try {
        const records = await RecordController.getRecords(req.body)
        res.json({ code: 0, msg: 'Success', records })
    } catch (err) {
        res.status(500).json({ code: err.code, msg: err.message})
    }
})

module.exports = router