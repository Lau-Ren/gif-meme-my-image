const knex = require('./db-config').knex
const db = require('./db')(knex)




db.saveImagesAndDescriptsToDB('time', 'http://rando.com/house.jpg', 'this is a picture of a really great house')
