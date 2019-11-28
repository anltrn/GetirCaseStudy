const express = require('express')
const router = express.Router()
const Record = require('../models/record')

router.post('/', async (req, res) => {
    const startDate = new Date(req.body.startDate)
    const endDate = new Date(req.body.endDate)
    const minCount = req.body.minCount;
    const maxCount = req.body.maxCount;
    console.log(minCount)
    try {
        if (isNaN(startDate))
            res.json({ code: 1, msg: 'Start Date is invalid' })
        else if (isNaN(endDate))
            res.json({ code: 2, msg: "End Date is invalid" })
        else if (typeof minCount != "number" || minCount < 0)
            res.json({ code: 3, msg: "Mincount is invalid" })
        else if (typeof maxCount!= "number" || maxCount < 0)
            res.json({ code: 4, msg: "Maxcount is invalid" })
        else
            Record.aggregate([
                { $unwind: "$counts" },
                {
                    $group: {
                        _id: "$_id",
                        key: { $first: "$key" },
                        createdAt: { $first: "$createdAt" },
                        totalCount: { $sum: "$counts" }
                    }
                },
                { $project: { "_id": 0 } },
                {
                    $match: { "totalCount": { $gte: minCount, $lte: maxCount }, "createdAt": { $gte: startDate, $lte: endDate } }
                },
            ]).exec((err, records) => {
                if (err) throw err;
                res.json({ code: 0, msg: 'Success', records })
            })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router