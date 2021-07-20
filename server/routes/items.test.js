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

// const mockItemId = [
//   {
//     id: 2,
//     name: 'Potato',
//     user_id: '3',
//     dateCreated: '13/08 13:00',
//     expiryDate: '3/09 10:00',
//     location: 'Avondale, Auckland',
//     quantity: 9,
//     description: 'a bit bruised',
//     email: 'eatwell@gmail.com',
//     isClaimed: 0,
//     img: '/images/potatoes.jpeg'
//   },
//   {}
// ]

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

  it('Has name property name', () => {
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

  it('Error test', () => {
    db.getItems.mockImplementation(() => {
      const errorData = 'hello'
      return Promise.resolve(errorData)
    })
    return request(server)
      .get('/api/v1/items/')
      .expect('Content-Type', /json/)
      .expect(500)
      .then(res => {
        expect(res.body.error).toBeUndefined()
        return null
      })
  })
})

describe('POSTitem by id /api/v1/items/', () => {
  it('Truthy', () => {
    // expect.assertions(1)
    db.getItemsById.mockImplementation((id) => {
      expect(id).toBe(2)
      return Promise.resolve(mockItem)
    })
    return request(server)
      .get('/api/v1/items/')
      .expect('Content-Type', /json/)
      // .expect(200)
      .then(res => {
        expect(res.body).toStrictEqual({ items: mockItem })
        return null
      })
  })
})
