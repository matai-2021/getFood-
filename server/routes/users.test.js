const request = require('supertest')
const server = require('../server')

const db = require('../db/users')
jest.mock('../db/users')

describe('GET /api/v1/users/', () => {
  it('Truthy', () => {
    // expect.assertions(1)
    db.getAllUsers.mockImplementation(() => {
      return Promise.resolve()
    })
    return request(server)
      .get('/api/v1/users/')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res => {
        expect(res).toBeTruthy()
        return null
      })
  })
})
