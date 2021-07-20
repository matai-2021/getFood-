exports.seed = knex => {
  const empty = table =>
    () => knex(table).del()

  return empty('items')()
    .then(empty('users'))
    .then(empty('orders'))
}
