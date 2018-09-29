const knex = require("../db/knex.js");

module.exports = {

  index: (req, res)=> {
    knex('cards').orderBy('id').then((results) => {
      res.render('index', {cards: results});
    })
  },


  new_card: (req, res)=> {
    knex('cards').insert({
      mana: req.body.mana,
      attack: req.body.attack,
      health: req.body.health,
      description: req.body.description
    }).then(()=> {
      res.redirect('/');
    })
  }
}
