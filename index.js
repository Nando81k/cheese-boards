// Import models
const {Board} = require('./Board');
const {Cheese} = require('./Cheese');
const {User} = require('./User');

// Define relationships
Board.hasMany(Cheese);
Cheese.belongsTo(Board);
User.hasMany(Board);
Board.belongsTo(User);
Cheese.hasMany(Board);


// Export models
module.exports = {
    Board,
    Cheese,
    User
}
