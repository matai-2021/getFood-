const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./users')

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

describe('getAllUsers', () => {
  it('returns the correct number of users', () => {
    return db.getAllUsers(testDb)
      .then((users) => {
        expect(users).toHaveLength(10)
        return null
      })
  })
})

describe('userExist', () => {
  it('returns true if user exists', () => {
    return db.userExists('z2wRHxm1K1', testDb)
      .then((exists) => {
        expect(exists).toBeTruthy()
        return null
      })
  })
})

describe('deleteAccount', () => {
  it('deletes correct user entry', () => {
    return db.deleteAccount(1, testDb)
      .then(() => db.getAllUsers(testDb))
      .then((users) => {
        users.find(user => user.id === 1)
        expect(users.find(user => user.id === 1)).toBeUndefined()
        return null
      })
  })
})
