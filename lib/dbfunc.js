const knex = require('../db-config').knex
const db = require('../db')(knex)

var finalResult

function selectByHashtag (tag) {
  return db.getAllImagesWithTag(tag)
    .then(saveAllImgs)
    .then(getAllTagsForAllImgs)
    .then(stitchTagsToImages)
    .then(ourOwnLog)
}

function getAllImgs(images) {
  return db.getAll()
    .then(saveAllImgs)
    .then(getAllTagsForAllImgs)
    .then(stitchTagsToImages)
    .then(ourOwnLog)
}

function saveAllImgs (images) {
  finalResult = images
  return images
}

function getAllTagsForAllImgs (images) {
  return Promise.all(images.map(function (image) {
    return db.getAllTagsForImg(image.id)
  }))
}

function stitchTagsToImages (arrayOfTagArrays) {
  for (var i = 0; i < finalResult.length; i++) {
    finalResult[i].tags = arrayOfTagArrays[i]
  }
  return finalResult
}

function ourOwnLog (finished) {
  finished.forEach(function (image) {
    console.log(image)
  })
  return finished
}

// , function (err, images) {

//   images.forEach(function (image) {
//     db.getAllTagsForImg(image.id, function (err, tags) {
//       image.tags = tags
//     })
//   })

// })
module.exports = {
  selectByHashtag: selectByHashtag,
  //selectById: selectById,
  getAllTagsForImg: db.getAllTagsForImg,
  getAllImgs: getAllImgs,
  getAll: db.getAll,
  saveImage: db.saveImageToImagesTable
}

