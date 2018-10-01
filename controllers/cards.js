const knex = require("../db/knex.js");

module.exports = {

  index: (req, res)=> {
    if(!req.session.deck){
      req.session.deck = [];
    }
    knex('cards').orderBy('id')
    .then((results) => {
      res.render('index', {cards: results, deck: req.session.deck || []});
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
  },

  add: (req, res) => {
    knex('cards')
    .where('id', req.params.id)
    .then((results) => {
      req.session.deck.push(results[0]);
      res.redirect('/');
    })
  },

  remove: (req, res) => {
    let deck = req.session.deck
    console.log(deck.length);
    if(deck.length == 1){
      req.session.deck = [];
      res.redirect('/');
      return;
    }
    for(let i = 0; i < deck.length; i++){
      if(deck[i].id == req.params.id){
        console.log(deck[i]);
        deck.splice(i, 1);
        res.redirect('/');
        return;
      }
    }
    res.redirect('/');
  }
}
