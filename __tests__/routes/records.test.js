const request = require('supertest')
const app = require('../../server')
describe('Post Endpoints', () => {
  it('check invalid (string) startDate input', async () => {
    const res = await request(app)
      .post('/records')
      .send({
        "startDate": "dsadas",
        "endDate": "2018-02-02",
        "minCount": 2700,
        "maxCount": 3000
       })
    expect(res.statusCode).toEqual(500)
    expect(res.body).toEqual({ code: 1, msg: 'Start Date input is invalid'})
  })

  it('check invalid format startDate input', async () => {
    const res = await request(app)
      .post('/records')
      .send({
        "startDate": "22-1992-05",
        "endDate": "2018-02-02",
        "minCount": 2700,
        "maxCount": 3000
       })
    expect(res.statusCode).toEqual(500)
    expect(res.body).toEqual({ code: 1, msg: 'Start Date input is invalid'})
  })

  it('check invalid format endDate input', async () => {
    const res = await request(app)
      .post('/records')
      .send({
        "startDate": "2019-05-02",
        "endDate": "10-00-2005",
        "minCount": 2700,
        "maxCount": 3000
       })
    expect(res.statusCode).toEqual(500)
    expect(res.body).toEqual({ code: 2, msg: 'End Date input is invalid'})
  })

  it('check invalid (string) endDate input', async () => {
    const res = await request(app)
      .post('/records')
      .send({
        "startDate": "2019-05-05",
        "endDate": "denemek",
        "minCount": 2700,
        "maxCount": 3000
       })
    expect(res.statusCode).toEqual(500)
    expect(res.body).toEqual({ code: 2, msg: 'End Date input is invalid'})
  })

  it('check invalid(minus) minCount input', async () => {
    const res = await request(app)
      .post('/records')
      .send({
        "startDate": "2019-05-02",
        "endDate": "2019-09-22",
        "minCount": -5,
        "maxCount": 3000
       })
    expect(res.statusCode).toEqual(500)
    expect(res.body).toEqual({ code: 3, msg: 'Mincount input is invalid'})
  })

  it('check invalid(string) minCount input', async () => {
    const res = await request(app)
      .post('/records')
      .send({
        "startDate": "2019-05-02",
        "endDate": "2019-09-22",
        "minCount": "asss",
        "maxCount": 3000
       })
    expect(res.statusCode).toEqual(500)
    expect(res.body).toEqual({ code: 3, msg: 'Mincount input is invalid'})
  })

  it('check invalid(minus) maxCount input', async () => {
    const res = await request(app)
      .post('/records')
      .send({
        "startDate": "2019-05-02",
        "endDate": "2019-09-22",
        "minCount": 555,
        "maxCount": -2
       })
    expect(res.statusCode).toEqual(500)
    expect(res.body).toEqual({ code: 4, msg: 'Maxcount input is invalid'})
  })

  it('check invalid(string) maxCount input', async () => {
    const res = await request(app)
      .post('/records')
      .send({
        "startDate": "2019-05-02",
        "endDate": "2019-09-22",
        "minCount": 500,
        "maxCount": "dddd"
       })
    expect(res.statusCode).toEqual(500)
    expect(res.body).toEqual({ code: 4, msg: 'Maxcount input is invalid'})
  })
})