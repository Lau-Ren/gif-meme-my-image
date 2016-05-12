module.exports = function (knex) {

  return {
    getAll: function(table, callback) {
      knex(table)
        .then(function(resp) {callback(null, resp)})
    },

    // add: function(/*user_id*/, url, tagsArr, callback) {
    //   var tagsObjArr = tagsArr.map(function(tag) {
    //     return {'name': tag}
    //   })
    //   knex('tags')
    //     .insert(tagsObjArr)
    //     .then(knex('images')
    //       .insert({'url': url}))
    //     // .then(knex('users')
    //     //   .insert({'id': user_id}))
    //     .then(function(resp) {callback(null, resp)})
    // },

    // getAllImagesWithTag: function(tag, callback) {
    //   knex('images')
    //     .join('idIndex', 'images.id', 'idIndex.img_id' )
    //     .join('tags', 'tags.id', 'idIndex.tag_id')
    //     .select('images.id', 'images.descript', 'images.url')
    //     .where({'tags.name': tag})
    //     .then(function(resp) {callback(null, resp)})
    // },

    getAllImagesWithTag: function(tag) {
      return knex('images')
        .join('idIndex', 'images.id', 'idIndex.img_id' )
        .join('tags', 'tags.id', 'idIndex.tag_id')
        .select('images.id', 'images.descript', 'images.url')
        .where({'tags.name': tag})
    },

    getAllTagsForImg: function(image_id) {
      return knex('tags')
        .join('idIndex', 'tags.id', 'idIndex.tag_id')
        .select('tags.name')
        .where({'idIndex.img_id': image_id})
    },

    saveImagesAndDescriptsToDB: function (tagStr, urlStr, descriptStr){
        var arrObjs = [{url:urlStr},{descript:descriptStr}]
        return knex('images')
        // insert into images table
        .insert(arrObjs)
        .select('id', 'url', 'descript').from('images')
        .then(console.log)

            // .select('id', 'name').from('tags')
            // .then(function (arrOfTagsRowObjs){
            //     arrOfTagsRowObjs.forEach(function(item){
            //         if (item.name === tagStr){
            //             knex('').insert({})
            //         }
            //     })
            // })
    },



    // getAllTagsForImg: function(image_id, callback) {
    //   knex('tags')
    //     .join('idIndex', 'tags.id', 'idIndex.tag_id')
    //     .select('tags.name')
    //     .where({'idIndex.img_id': image_id})
    //     .then(function(resp) {callback(null, resp)})
    // },

    //For future use when user table is implemented
    // getUsersImages: function(user_id, calback) {
    //   knex('images')
    //     .join('idIndex', 'images.id', 'idIndex.img_id')
    //     .join('users', 'users.id', 'idIndex.user_id')
    //     .select('images.id', 'images.descript', 'images.url')
    //     .where({'users.id': user_id})
    // }

  }
}

