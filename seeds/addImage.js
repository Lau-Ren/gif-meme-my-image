
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('images').del(),

    // Inserts seed entries
    knex('images').insert({id: 1, url: 'http://cdn.memestache.com/2012/12/3/memestache.com_279921_1355464802.jpg'}),
    knex('images').insert({id: 2, url: 'http://images.smilesumo.com/2015/06/Cat-Eating-Cake-Meme.jpg'}),
    knex('images').insert({id: 3, url: 'http://memesvault.com/wp-content/uploads/Funny-Cat-Meme-Love-5.jpg'}),
    knex('images').insert({id: 4, url: 'http://weknowmemes.com/wp-content/uploads/2012/05/how-have-cat-to-be-kitten-me-right-meow.jpg'}),
    knex('images').insert({id: 5, url: 'http://cdn.smosh.com/sites/default/files/ftpuploads/bloguploads/0913/harry-potter-memes-potter-lookin-fine.jpg'}),
    knex('images').insert({id: 6, url: 'http://badassmemes.com/wp-content/uploads/2013/11/got-your-nose.jpg'}),
    knex('images').insert({id: 7, url: 'http://badassmemes.com/wp-content/uploads/2013/11/come-at-me-bro.jpg'}),
    knex('images').insert({id: 8, url: 'http://cdn2.gurl.com/wp-content/uploads/2015/01/ron-keeper.jpg'}),
    knex('images').insert({id: 9, url: 'http://vignette2.wikia.nocookie.net/thehungergames/images/9/9e/Adventure_time_meme_by_chaosthorn78-d5iihcb.jpg/revision/latest?cb=20130304183529'}),
    knex('images').insert({id: 10, url: 'https://funnyasduck.net/wp-content/uploads/2013/01/funny-one-does-not-simply-time-for-that-meme-sweet-brown-Boromir-pics.png'}),
    knex('images').insert({id: 11, url: 'https://www.askideas.com/media/40/Have-A-Nice-Day-Oink-Onik-Funny-Pig-Meme-Image.jpg'}),
    knex('images').insert({id: 12, url: 'http://i2.kym-cdn.com/photos/images/original/000/510/934/296.jpg'})
  );
};
