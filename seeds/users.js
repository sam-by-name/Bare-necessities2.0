exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Tim'},
        {id: 2, name: 'Jim'},
        {id: 3, name: 'Sim'}
      ])
    })
}
