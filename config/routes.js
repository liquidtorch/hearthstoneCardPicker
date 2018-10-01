
const cards = require("../controllers/cards.js")
module.exports = function(app){

  app.get('/', cards.index);

  app.post('/cards', cards.new_card);

  app.get('/cards/add/:id', cards.add);

  app.get('/cards/remove/:id', cards.remove);
}
