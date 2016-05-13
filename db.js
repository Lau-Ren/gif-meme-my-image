module.exports = function (knex) {

  return {
    getAll: function() {
      return knex.select().table('images')
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

    saveImageToImagesTable: function (tagStr, urlStr, descriptStr){

        var currImgId
        var currentTagId

        return knex('images')
        .insert({url:urlStr, descript:descriptStr})
        .into('images')
        .select('id', 'url', 'descript').from('images')
        .then(function (id) {
         // console.log('we are assigning id to know variable')
            currImgId = id[0]
            return currImgId
        })
        .then (function (currImgId) {
            knex('tags').select('id', 'name')
            .then(function (arrOfTagsRowObjs){
                return arrOfTagsRowObjs.filter(function(obj){
                    return (obj.name === tagStr)
                })
            })
            .then(function(arr){

                if(arr.length > 0){
                    currentTagId = arr[0].id
                    return currentTagId
                } else {
                    return knex('tags')
                        .insert({name: tagStr})
                        .into('tags')
                        .select('id')
                        .from('tags')
                        .where('name', tagStr)
                        .then(function(id){
                            currentTagId = id[0]
                        })
                }
            })
            .then(function(){
                console.log('so we have imgid:', currImgId, 'and tagid:', currentTagId)
                return knex('idIndex')
                    .insert({img_id: currImgId, tag_id:currentTagId })
                    .into('idIndex')
            })
        })



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

