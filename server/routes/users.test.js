const request = require('supertest')
const server = require('../server')

const db = require('../db/users')
jest.mock('../db/users')

const mockUsers = [
  {
    id: 1,
    name: 'Keisuke Tanaka',
    dateCreated: '15/07 14:00',
    location: 'Glenfield, Auckland',
    isCompany: 0,
    email: 'keisukyrocket@gmail.com',
    auth0Id: 'z2wRHxm1K1',
    companyName: null,
    phone: '0211996925',
    profilePic: '/images/profile/kris.jpg'
  },
  {
    id: 2,
    name: 'Suji cho',
    dateCreated: '15/07 14:40',
    location: 'Henderon, Auckland',
    isCompany: 0,
    email: 'sujicho@gmail.com',
    auth0Id: 'lkfjgwh',
    companyName: null,
    phone: '0210346246',
    profilePic: '/images/profile/kris.jpg'
  }]

describe('GET /api/v1/users/', () => {
  it('Truthy', () => {
    // expect.assertions(1)
    db.getAllUsers.mockImplementation(() => {
      return Promise.resolve(mockUsers)
    })
    return request(server)
      .get('/api/v1/users')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res => {
        expect(res).toBeTruthy()
        expect(res.body).toStrictEqual(mockUsers)
        return null
      })
  })

  it('Returns all users', () => {
    // expect.assertions(1)
    db.getAllUsers.mockImplementation(() => {
      return Promise.resolve(mockUsers)
    })
    return request(server)
      .get('/api/v1/users')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res => {
        expect(res.body).toStrictEqual(mockUsers)
        return null
      })
  })

  it('DB error test - 500 response', () => {
    db.getAllUsers.mockImplementation(() => Promise.reject(
      new Error('mock addEvent error')
    ))
    return request(server)
      .get('/api/v1/users/')
      .expect(500)
      .then(res => {
        // expect().toHaveBeenCalledWith('mock addEvent error')
        expect(res.body.error.title).toBe('Unable to get users')
        return null
      })
  })
})

describe('POST /api/v1/users/', () => {
  it('Truthy', () => {
    // expect.assertions(1)
    db.addUser.mockImplementation(() => {
      return Promise.resolve()
    })
    return request(server)
      .post('/api/v1/users/')
      .expect('Content-Type', /json/)
      .expect(201)
      .then(res => {
        expect(res).toBeTruthy()
        return null
      })
  })

  it('Returns id of new user', () => {
    // expect.assertions(1)
    db.addUser.mockImplementation(() => {
      return Promise.resolve({ id: 2 })
    })
    return request(server)
      .post('/api/v1/users/')
      .expect('Content-Type', /json/)
      .expect(201)
      .then(res => {
        expect(res.status).toBe(201)
        expect(res.body.newUser).toStrictEqual({ id: 2 })

        expect(res).toBeTruthy()
        return null
      })
  })

  it('DB error test - 500 response', () => {
    db.addUser.mockImplementation(() => Promise.reject(
      new Error('mock addEvent error')
    ))
    return request(server)
      .post('/api/v1/users/')
      .expect('Content-Type', /json/)
      .expect(500)
      .then(res => {
        // expect().toHaveBeenCalledWith('mock addEvent error')
        expect(res.body.error.title).toBe('Unable to add user')
        return null
      })
  })
})

describe('DELETE /api/v1/users/', () => {
  it('Truthy', () => {
    db.deleteAccount.mockImplementation(() => {
      return Promise.resolve()
    })
    return request(server)
      .delete('/api/v1/users/1')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .then(res => {
        expect(res.body).toBeTruthy()
        return null
      })
  })

  it('DB error test - 500 response', () => {
    db.deleteAccount.mockImplementation(() => Promise.reject(
      new Error('mock addEvent error')
    ))
    return request(server)
      .delete('/api/v1/users/1')
      .expect('Content-Type', /json/)
      .expect(500)
      .then(res => {
        // expect().toHaveBeenCalledWith('mock addEvent error')
        expect(res.body.error.title).toBe('Unable to delete account')
        return null
      })
  })
})
