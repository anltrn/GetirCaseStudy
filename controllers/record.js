const moment = require('moment');
const Record = require('../models/record')

class CustomError extends Error {  
    constructor (code, message) {
      super(message)
  
      this.name = this.constructor.name
      this.code = code
    }
  }

const getRecords = async (params) => {
    const startDate = moment(params.startDate, 'YYYY-MM-DD', true)
    const endDate = moment(params.endDate, 'YYYY-MM-DD', true)
    const minCount = params.minCount;
    const maxCount = params.maxCount;
     if (!startDate.isValid()) {
            throw new CustomError(1, 'Start Date input is invalid')
       } else if (!endDate.isValid()) {
            throw new CustomError(2, 'End Date input is invalid')
       } else if (typeof minCount != "number" || minCount < 0) {
            throw new CustomError(3, 'Mincount input is invalid')
       } else if (typeof maxCount != "number" || maxCount < 0) {
             throw new CustomError(4, 'Maxcount input is invalid')
       } else {
              return Record.aggregate([
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
                    $match: { "totalCount": { $gte: minCount, $lte: maxCount }, "createdAt": { $gte: startDate.toDate(), $lte: endDate.toDate() } }
                },
            ]).exec()
       }
}
module.exports =  {getRecords}