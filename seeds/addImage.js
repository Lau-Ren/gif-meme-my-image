
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('images').del(),

    // Inserts seed entries
    knex('images').insert({id: 1, url: 'http://cdn.memestache.com/2012/12/3/memestache.com_279921_1355464802.jpg'}),
    knex('images').insert({id: 2, url: 'http://images.smilesumo.com/2015/06/Cat-Eating-Cake-Meme.jpg'}),
    knex('images').insert({id: 3, url: 'http://memesvault.com/wp-content/uploads/Funny-Cat-Meme-Love-5.jpg'})
    knex('images').insert({id: 4, url: 'http://weknowmemes.com/wp-content/uploads/2012/05/how-have-cat-to-be-kitten-me-right-meow.jpg'})
    knex('images').insert({id: 5, url: 'http://cdn.smosh.com/sites/default/files/ftpuploads/bloguploads/0913/harry-potter-memes-potter-lookin-fine.jpg'})
    knex('images').insert({id: 6, url: 'http://badassmemes.com/wp-content/uploads/2013/11/got-your-nose.jpg'})
    knex('images').insert({id: 7, url: 'http://badassmemes.com/wp-content/uploads/2013/11/come-at-me-bro.jpg'})
    knex('images').insert({id: 8, url: 'http://cdn2.gurl.com/wp-content/uploads/2015/01/ron-keeper.jpg'})
    knex('images').insert({id: 9, url: 'http://vignette2.wikia.nocookie.net/thehungergames/images/9/9e/Adventure_time_meme_by_chaosthorn78-d5iihcb.jpg/revision/latest?cb=20130304183529'})
    knex('images').insert({id: 10, url: 'https://funnyasduck.net/wp-content/uploads/2013/01/funny-one-does-not-simply-time-for-that-meme-sweet-brown-Boromir-pics.png'})
    knex('images').insert({id: 12, url: 'http://i2.kym-cdn.com/photos/images/original/000/510/934/296.jpg'})
    knex('images').insert({id: 13, url: 'http://img.pandawhale.com/post-6769-aint-nobody-got-time-for-that-YPjg.gif'})
    knex('images').insert({id: 14, url: 'http://i2.kym-cdn.com/photos/images/facebook/000/150/518/tumblr_lgrd24ARqk1qfy2kdo1_500.gif'})
    knex('images').insert({id: 15, url: 'http://i1.kym-cdn.com/photos/images/newsfeed/000/444/320/5e8.gif'})
    knex('images').insert({id: 16, url: 'http://s2.quickmeme.com/img/b4/b4efd7ea1881add43cd99627653418e7553367d82f5f7c442701ac49922aaa09.jpg'})
    knex('images').insert({id: 17, url: 'https://s3-us-west-2.amazonaws.com/lmooweb-media/images/3ce502e9-5863-4f96-bf84-9eb4ccadb634.jpg'})
    knex('images').insert({id: 18, url: 'http://www.relatably.com/m/img/funny-animal-memes-tumblr/Funny-Animal-Meme-24.jpg'})
    knex('images').insert({id: 19, url: 'http://quotesnhumor.com/wp-content/uploads/2015/07/Top-30-Very-Funny-Animals-Memes-Funny-animals.jpg'})
    knex('images').insert({id: 20, url: 'https://s-media-cache-ak0.pinimg.com/736x/cd/0c/35/cd0c352af7cb3b1ac7182bd55d9a0e80.jpg'})
    knex('images').insert({id: 21, url: 'http://designwebkit.com/wp-content/uploads/2012/11/funny-cat-dog-computer.jpg'})
    knex('images').insert({id: 22, url: 'http://www.ismypup.com/wp-content/uploads/sites/4/2015/07/funny-pig-meme-eating-ice-cream.jpg'})
    knex('images').insert({id: 23, url: 'https://www.askideas.com/media/40/Have-A-Nice-Day-Oink-Onik-Funny-Pig-Meme-Image.jpg'})
    knex('images').insert({id: 24, url: 'http://memesvault.com/wp-content/uploads/Internet-Meme-02.jpg'})
    knex('images').insert({id: 25, url: 'http://cdn.playbuzz.com/cdn/60456ad2-e569-47ad-8ba6-190eb1397887/67086403-529b-4873-9cb4-40a26192d210_560_420.jpg'})
    knex('images').insert({id: 26, url: 'http://www.troll.me/images/creepy-willy-wonka/im-intrigued-tell-me-more-thumb.jpg'})
    knex('images').insert({id: 27, url: 'http://juicylol.com/wp-content/uploads/2016/02/are-you-google.jpg'})
    knex('images').insert({id: 28, url: 'http://img.izismile.com/img/img6/20130517/640/this_funny_meme_wins_every_argument_640_high_09.jpg'})
    knex('images').insert({id: 29, url: 'http://memesvault.com/wp-content/uploads/Funny-Meme-19.jpg'})
    knex('images').insert({id: 30, url: 'http://whyareyoustupid.com/wp-content/uploads/5068ea432b_like-a-boss-funny-meme-10-memes-funny-funny-20.jpg'})
  );
};
