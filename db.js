module.exports = function (knex) {

  return {
    getAll: function(list, callback) {
      knex().table(list).then(function(resp) {
        callback(null, resp)
      })
    },

    add: function(table, params, callback) {
      knex(table).insert(params).then(function(resp) {
        callback(null, resp)
      })
    },

    getAllImagesWithTag: function(tag, callback) {
      knex('images')
        .join('image_tags', 'images.id', 'image_tags.img_id' )
        .join('tags', 'tags_id', 'image_tags.tag_id')
        .select('images.url')
        .where({'tags.name': tag})
        .then(function(resp) {callback(null, resp)})
    },

    getAllTagsFromImg
  }
}
