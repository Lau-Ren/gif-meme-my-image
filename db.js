module.exports = function (knex) {

  return {
    getAll: function(list, callback) {
      knex().table(list)
        .then(function(resp) {callback(null, resp)})
    },

    add: function(url, tagsArr, callback) {
      var tagsObjArr = tagsArr.map(function(tag) {
        return {'name': tag}
      })
      knex('tags')
        .insert(tagsObjArr)
        .select('images')
        .insert({'url': url})
        .then(function(resp) {callback(null, resp)})
    },

    getAllImagesWithTag: function(tag, callback) {
      knex('images')
        .join('idIndex', 'images.id', 'idIndex.img_id' )
        .join('tags', 'tags.id', 'idIndex.tag_id')
        .select('images.id', 'images.descript', 'images.url')
        .where({'tags.name': tag})
        .then(function(resp) {callback(null, resp)})
    },

    getAllTagsForImg: function(image_id, callback) {
      knex('tags')
        .join('idIndex', 'tags.id', 'idIndex.tag_id' )
        .select('tags.name')
        .where({'idIndex.img_id': image_id})
        .then(function(resp) {callback(null, resp)})
    },



  }
}
