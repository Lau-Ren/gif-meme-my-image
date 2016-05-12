
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('idIndex').del(),

    // Inserts seed entries
    knex('idIndex').insert({img_id: 1, tag_id: 1 }),
    knex('idIndex').insert({img_id: 1, tag_id: 2 }),
    knex('idIndex').insert({img_id: 1, tag_id: 3 }),
    knex('idIndex').insert({img_id: 2, tag_id: 1 }),
    knex('idIndex').insert({img_id: 2, tag_id: 4 }),
    knex('idIndex').insert({img_id: 2, tag_id: 5 }),
    knex('idIndex').insert({img_id: 3, tag_id: 1 }),
    knex('idIndex').insert({img_id: 3, tag_id: 6 }),
    knex('idIndex').insert({img_id: 4, tag_id: 1 }),
    knex('idIndex').insert({img_id: 4, tag_id: 7 }),
    knex('idIndex').insert({img_id: 4, tag_id: 8 }),
    knex('idIndex').insert({img_id: 5, tag_id: 9 }),
    knex('idIndex').insert({img_id: 5, tag_id: 10 }),
    knex('idIndex').insert({img_id: 6, tag_id: 9 }),
    knex('idIndex').insert({img_id: 6, tag_id: 11 }),
    knex('idIndex').insert({img_id: 6, tag_id: 12 }),
    knex('idIndex').insert({img_id: 7, tag_id: 9 }),
    knex('idIndex').insert({img_id: 7, tag_id: 13 }),
    knex('idIndex').insert({img_id: 8, tag_id: 9 }),
    knex('idIndex').insert({img_id: 8, tag_id: 14 }),
    knex('idIndex').insert({img_id: 8, tag_id: 15 }),
    knex('idIndex').insert({img_id: 9, tag_id: 16 }),
    knex('idIndex').insert({img_id: 9, tag_id: 17 }),
    knex('idIndex').insert({img_id: 9, tag_id: 18 }),
    knex('idIndex').insert({img_id: 10, tag_id: 19 }),
    knex('idIndex').insert({img_id: 10, tag_id: 20 }),
    knex('idIndex').insert({img_id: 10, tag_id: 21 }),
    knex('idIndex').insert({img_id: 11, tag_id: 22 }),
    knex('idIndex').insert({img_id: 11, tag_id: 23 }),
    knex('idIndex').insert({img_id: 12, tag_id: 19 }),
    knex('idIndex').insert({img_id: 12, tag_id: 24 }),
    knex('idIndex').insert({img_id: 12, tag_id: 25 }),
    knex('idIndex').insert({img_id: 12, tag_id: 26 }),
    knex('idIndex').insert({img_id: 12, tag_id: 27 })
  );
};
