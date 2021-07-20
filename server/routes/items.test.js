const request = require('supertest')
const server = require('../server')

const db = require('../db/items')
jest.mock('../db/items')

const mockItem = [
  {
    id: 1,
    name: 'Apple',
    user_id: '2',
    dateCreated: '13/07 13:00',
    expiryDate: '3/08 13:00',
    location: 'Waterview, Auckland',
    quantity: 6,
    description: 'good shape',
    email: 'vegelover@gmail.com',
    isClaimed: 0,
    img: '/images/apple.jpg'
  },
  {
    id: 2,
    name: 'Potato',
    user_id: '3',
    dateCreated: '13/08 13:00',
    expiryDate: '3/09 10:00',
    location: 'Avondale, Auckland',
    quantity: 9,
    description: 'a bit bruised',
    email: 'eatwell@gmail.com',
    isClaimed: 0,
    img: '/images/potatoes.jpeg'
  }
]

const singleItemMock = [
  {
    id: 20,
    name: 'Leek',
    user_id: '3',
    dateCreated: '13/08 13:00',
    expiryDate: '3/09 10:00',
    location: 'Avondale, Auckland',
    quantity: 9,
    description: 'a bit bruised',
    email: 'eatwell@gmail.com',
    isClaimed: true,
    img: '/images/potatoes.jpeg'
  }
]

describe('GET /api/v1/items/', () => {
  it('Truthy', () => {
    // expect.assertions(1)
    db.getItems.mockImplementation(() => {
      return Promise.resolve(mockItem)
    })
    return request(server)
      .get('/api/v1/items/')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res => {
        expect(res).toBeTruthy()
        return null
      })
  })

  it('Returns exact mockItem', () => {
    db.getItems.mockImplementation(() => {
      return Promise.resolve(mockItem)
    })
    return request(server)
      .get('/api/v1/items/')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res => {
        expect(res.body).toStrictEqual({ items: mockItem })
        return null
      })
  })

  it('Has name property', () => {
    db.getItems.mockImplementation(() => {
      return Promise.resolve(mockItem)
    })
    return request(server)
      .get('/api/v1/items/')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res => {
        expect(res.body.items[0]).toHaveProperty('name')
        return null
      })
  })

  it('DB error test - 500 response', () => {
    db.getItems.mockImplementation(() => {
      return Promise.reject(mockItem)
    })
    return request(server)
      .get('/api/v1/items/')
      .expect('Content-Type', /json/)
      .expect(500)
      .then(res => {
        expect(res.body.error.title).toBe('Unable to get items')
        return null
      })
  })
})

describe('POST /api/v1/items/add', () => {
  it('returns 201 Created', () => {
    db.addItem.mockImplementation(() => Promise.resolve())
    return request(server)
      .post('/api/v1/items/add')
      .send({ name: 'Kris' })
      .then(res => {
        expect(res.status).toBe(201)
        return null
      })
  })

  it('DB error test - 500 response', () => {
    db.addItem.mockImplementation(() => Promise.reject(
      new Error('mock addEvent error')
    ))
    return request(server)
      .post('/api/v1/items/add')
      .expect(500)
      .then(res => {
        // expect().toHaveBeenCalledWith('mock addEvent error')
        expect(res.body.error.title).toBe('Unable to add item')
        return null
      })
  })

  it('returns 200 success when item is deleted', () => {
    db.deleteItem.mockImplementation(() => Promise.resolve())
    return request(server)
      .delete('/api/v1/items/add')
      .send({ id: 1 })
      .then(res => {
        expect(res.status).toBe(202)
        return null
      })
  })
})

describe('PATCH /api/v1/items/claim', () => {
  it('Truthy', () => {
    // expect.assertions(1)
    db.claimItem.mockImplementation(() => {
      return Promise.resolve(mockItem)
    })
    return request(server)
      .get('/api/v1/items/claim')
      .expect('Content-Type', 'text/html; charset=UTF-8')
      .expect(200)
      .then(res => {
        expect(res).toBeTruthy()
        return null
      })
  })

  it('Returns item (update happens on client side)', () => {
    db.claimItem.mockImplementation(() => {
      return Promise.resolve(singleItemMock)
    })
    return request(server)
      .patch('/api/v1/items/claim')
      .expect('Content-Type', /json/)
      .expect(201)
      .then(res => {
        expect(res.body).toHaveLength(1)
        expect(res.body[0]).toHaveProperty('name')
        expect(res.body[0].name).toBe('Leek')
        return null
      })
  })

  it('DB error returns 500 response & error message', () => {
    db.claimItem.mockImplementation((claimedItem) => Promise.reject(
      new Error('mock updateEvent error')
    ))
    return request(server)
      .patch('/api/v1/items/claim')
      .send({ id: 1, isClaimed: true, claimedById: 1 })
      .expect(500)
      .then(res => {
        expect(res.status).toBe(500)
        // expect(Error).toHaveBeenCalledWith('mock addEvent error')
        expect(res.body.error.title).toBe('Unable to update item')
        return null
      })
  })
})
