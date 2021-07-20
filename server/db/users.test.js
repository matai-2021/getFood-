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
    return db.getAllusers(testDb)
      .then((users) => {
        expect(users).toHaveLength(10)
        return null
      })
  })
})

describe('getUserById', () => {
  it('returns the chosen user', () => {
    return db.getUserById(1, testDb)
      .then(user => {
        expect(user.id).toBe(1)
        expect(user.name).toBe('Keisuke Tanaka')
        expect(user.dateCreated).toBe('15/07 14:00')
        expect(user.location).toBe('Glenfield, Auckland')
        expect(user.isCompany).toBeFalsy()
        expect(user.email).toBe('keisukyrocket@gmail.com')
        expect(user.auth0Id).toBe('z2wRHxm1K1')
        expect(user.companyName).toBe('null')
        expect(user.phone).toBe('0211996925')
        return null
      })
  })
})
