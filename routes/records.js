
const express = require('express')
const router = express.Router()
const RecordController = require('../controllers/record')

//router to call getRecords function and set to response records
router.post('/', async (req, res) => {
    try {
        const records = await RecordController.getRecords(req.body)
        res.json({ code: 0, msg: 'Success', records })
    } catch (err) {
        res.status(500).json({ code: err.code, msg: err.message})
    }
})

module.exports = router