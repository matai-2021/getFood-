const { test } = require('../db/knexfile')
const { request } = require('express')
const server = require('../server')

const itemsFns = require('../items')
jest.mock('../items')

test('GET / returns all items', () => {
  itemsFns.getItems.mockImplemntation(() => {
    return Promise.resolve({
      items: [
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
    })
  })

  return request(server)
    .get('/')
    .expect(200)
    .then(res => {
      expect(res.body).toMatch('Potato')
      return null
    })
})
