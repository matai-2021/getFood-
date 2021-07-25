const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./items')

jest.setTimeout(10000)

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('getItemsById', () => {
  it('returns chosen item', () => {
    return db.getItemsById(1, testDb)
      .then((item) => {
        expect(item[0].id).toBe(1)
        return null
      })
  })
})

describe('getItems', () => {
  it('returns the correct number of items', () => {
    return db.getItems(testDb)
      .then((items) => {
        expect(items).toHaveLength(20)
        return null
      })
  })
})

describe('updateItem', () => {
  it('returns the updated Item', () => {
    const updatedItem = {
      id: 20,
      name: 'Cabbage',
      location: 'Stonefield, Auckland',
      quantity: 10,
      description: 'fresh iceberg lettuce. pick up by tomorrow please',
      img: '/images/lettuce.jpg'
    }
    return db.updateItem(updatedItem, testDb)
      .then(() => db.getItemsById(updatedItem.id, testDb))
      .then((items) => {
        const item = items[0]
        expect(item.name).toBe('Cabbage')
        expect(item.location).toBe('Stonefield, Auckland')
        expect(item.quantity).toBe(10)
        expect(item.description).toBe('fresh iceberg lettuce. pick up by tomorrow please')
        expect(item.img).toBe('/images/lettuce.jpg')
        return null
      })
  })
})

describe('deleteItem', () => {
  it('deletes correct item', () => {
    return db.deleteItem(1, testDb)
      .then(() => db.getItems(testDb))
      .then((items) => {
        items.find(item => item.id === 1)
        expect(items.find(item => item.id === 1)).toBeUndefined()
        return null
      })
  })
})

describe('addItem', () => {
  it('inserts item correctly', () => {
    const newItem = {
      id: 21,
      name: 'Hello Test',
      location: 'Test city',
      userId: 1,
      quantity: 2,
      img: '/images/test/jpeg',
      description: 'Better Pass',
      dateCreated: '10/1',
      expiryDate: '10/1',
      email: 'test@gmail.com',
      isClaimed: false
    }

    return db.addItem(newItem, testDb)
      .then(() => db.getItemsById(newItem.id, testDb))
      .then((newItems) => {
        const newItem = newItems[0]
        expect(newItem.id).toBe(21)
        expect(newItem.name).toBe('Hello Test')
        expect(newItem.location).toBe('Test city')
        expect(newItem.user_id).toBe(1)
        expect(newItem.quantity).toBe(2)
        expect(newItem.img).toBe('/images/test/jpeg')
        expect(newItem.description).toBe('Better Pass')
        expect(newItem.dateCreated).toBeDefined()
        expect(newItem.expiryDate).toBe('10/1')
        expect(newItem.email).toBe('test@gmail.com')
        expect(newItem.isClaimed).toBeFalsy()
        return null
      })
  })
})
