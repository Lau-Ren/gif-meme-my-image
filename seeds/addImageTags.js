
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('image_tags').del(),

    // Inserts seed entries
    knex('image_tags').insert({image_id: 1, tag_id: 'rowValue'}),
    knex('image_tags').insert({image_id: 2, tag_id: 'rowValue2'}),
    knex('image_tags').insert({image_id: 3, tag_id: 'rowValue3'})
  );
};
