
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('tags').del(),

    // Inserts seed entries
    knex('tags').insert({id: 1, name: 'cat'}),
    knex('tags').insert({id: 2, name: 'fun'}),
    knex('tags').insert({id: 3, name: 'grumpy'}),
    knex('tags').insert({id: 4, name: 'food'}),
    knex('tags').insert({id: 5, name: 'regret'}),
    knex('tags').insert({id: 6, name: 'dumb'}),
    knex('tags').insert({id: 7, name: 'kitten'}),
    knex('tags').insert({id: 8, name: 'meow'}),
    knex('tags').insert({id: 9, name: 'harrypotter'}),
    knex('tags').insert({id: 10, name: 'girl'}),
    knex('tags').insert({id: 11, name: 'lordvoldemort'}),
    knex('tags').insert({id: 12, name: 'gotyournose'}),
    knex('tags').insert({id: 13, name: 'bro'}),
    knex('tags').insert({id: 14, name: 'quidditch'}),
    knex('tags').insert({id: 15, name: 'ronweasley'}),
    knex('tags').insert({id: 16, name: 'sucking'}),
    knex('tags').insert({id: 17, name: 'jake'}),
    knex('tags').insert({id: 18, name: 'adventuretime'}),
    knex('tags').insert({id: 19, name: 'time'}),
    knex('tags').insert({id: 20, name: 'lotr'}),
    knex('tags').insert({id: 21, name: 'boromir'}),
    knex('tags').insert({id: 22, name: 'pig'}),
    knex('tags').insert({id: 23, name: 'oink'}),
    knex('tags').insert({id: 24, name: 'affairs'}),
    knex('tags').insert({id: 25, name: 'fancy'}),
    knex('tags').insert({id: 26, name: 'monocle'}),
    knex('tags').insert({id: 27, name: 'tophat'})

  )

;
};
