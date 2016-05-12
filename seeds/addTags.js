
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('tags').del(),

    // Inserts seed entries
    knex('tags').insert({id: 1, name: 'rowValue'}),
    knex('tags').insert({id: 2, name: 'rowValue2'}),
    knex('tags').insert({id: 3, name: 'rowValue3'})
  );
};
