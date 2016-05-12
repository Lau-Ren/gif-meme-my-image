
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('image_tags').del(),

    // Inserts seed entries
    knex('image_tags').insert({image_id: 1, tag_id: 1 }),
    knex('image_tags').insert({image_id: 1, tag_id: 2 }),
    knex('image_tags').insert({image_id: 1, tag_id: 3 }),
    knex('image_tags').insert({image_id: 2, tag_id: 1 }),
    knex('image_tags').insert({image_id: 2, tag_id: 4 }),
    knex('image_tags').insert({image_id: 2, tag_id: 5 }),
    knex('image_tags').insert({image_id: 3, tag_id: 1 }),
    knex('image_tags').insert({image_id: 3, tag_id: 6 }),
    knex('image_tags').insert({image_id: 4, tag_id: 1 }),
    knex('image_tags').insert({image_id: 4, tag_id: 7 }),
    knex('image_tags').insert({image_id: 4, tag_id: 8 }),
    knex('image_tags').insert({image_id: 5, tag_id: 9 }),
    knex('image_tags').insert({image_id: 5, tag_id: 10 }),
    knex('image_tags').insert({image_id: 6, tag_id: 9 }),
    knex('image_tags').insert({image_id: 6, tag_id: 11 }),
    knex('image_tags').insert({image_id: 6, tag_id: 12 }),
    knex('image_tags').insert({image_id: 7, tag_id: 9 }),
    knex('image_tags').insert({image_id: 7, tag_id: 13 }),
    knex('image_tags').insert({image_id: 8, tag_id: 9 }),
    knex('image_tags').insert({image_id: 8, tag_id: 14 }),
    knex('image_tags').insert({image_id: 8, tag_id: 15 }),
    knex('image_tags').insert({image_id: 9, tag_id: 16 }),
    knex('image_tags').insert({image_id: 9, tag_id: 17 }),
    knex('image_tags').insert({image_id: 9, tag_id: 18 }),
    knex('image_tags').insert({image_id: 10, tag_id: 19 }),
    knex('image_tags').insert({image_id: 10, tag_id: 20 }),
    knex('image_tags').insert({image_id: 10, tag_id: 21 }),
    knex('image_tags').insert({image_id: 11, tag_id: 22 }),
    knex('image_tags').insert({image_id: 11, tag_id: 23 }),
    knex('image_tags').insert({image_id: 12, tag_id: 19 }),
    knex('image_tags').insert({image_id: 12, tag_id: 24 }),
    knex('image_tags').insert({image_id: 12, tag_id: 25 }),
    knex('image_tags').insert({image_id: 12, tag_id: 26 }),
    knex('image_tags').insert({image_id: 12, tag_id: 27 })
  );
};
