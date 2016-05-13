
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Inserts seed entries
    knex('images').insert({url: 'https://s-media-cache-ak0.pinimg.com/736x/14/21/83/142183cb4eae3d2263550649cc1776ae.jpg', descript: 'Into the plumbing...'}),
    knex('images').insert({url: 'http://s5.favim.com/orig/53/harry-potter-hunger-games-lord-of-the-rings-sherlock-Favim.com-491965.jpg', descript: 'Hahah... wait, what?'}),
    knex('images').insert({url: 'https://s-media-cache-ak0.pinimg.com/736x/0a/d9/fb/0ad9fb7e18663d9dd1d1fdb0e0a5f54c.jpg', descript: "Holy meowly! That's a lot of cats" }),
    knex('images').insert({url: 'https://s-media-cache-ak0.pinimg.com/236x/ed/64/e2/ed64e249f1d41f88b45ccdd41e476202.jpg', descript: "Grumpy cat don't like no bling" }),
    knex('images').insert({url: 'https://s-media-cache-ak0.pinimg.com/736x/a4/7a/8b/a47a8bf49c0adde66e63eb3a3587710e.jpg', descript: "Grumpy cat's food on the go"}),
    knex('images').insert({url: 'http://img.memecdn.com/aint-got-no-time-fo-dat_o_915893.jpg', descript: "Some people just don't have the time" }),

    knex('idIndex').insert({img_id: '13', tag_id: '1'}),
    knex('idIndex').insert({img_id: '13', tag_id: '9'}),
    knex('idIndex').insert({img_id: '14', tag_id: '9'}),
    knex('idIndex').insert({img_id: '14', tag_id: '20'}),
    knex('idIndex').insert({img_id: '15', tag_id: '20'}),
    knex('idIndex').insert({img_id: '15', tag_id: '1'}),
    knex('idIndex').insert({img_id: '15', tag_id: '4'}),
    knex('idIndex').insert({img_id: '15', tag_id: '8'}),
    knex('idIndex').insert({img_id: '16', tag_id: '1'}),
    knex('idIndex').insert({img_id: '16', tag_id: '20'}),
    knex('idIndex').insert({img_id: '16', tag_id: '3'}),
    knex('idIndex').insert({img_id: '17', tag_id: '22'}),
    knex('idIndex').insert({img_id: '17', tag_id: '4'}),
    knex('idIndex').insert({img_id: '17', tag_id: '3'}),
    knex('idIndex').insert({img_id: '17', tag_id: '23'}),
    knex('idIndex').insert({img_id: '18', tag_id: '19'}),
    knex('idIndex').insert({img_id: '18', tag_id: '29'}),

    knex('tags').insert({name: 'sherlock'}),
    knex('tags').insert({name: 'metameme'})
  );
};
