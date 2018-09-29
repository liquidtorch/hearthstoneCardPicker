
const cards = require("../controllers/cards.js")
module.exports = function(app){

  app.get('/', cards.index);

  app.post('/cards', cards.new_card);

}
