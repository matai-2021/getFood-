const knex = require('knex')
const config = require('./knexfile').test
const testDB = knex(config)