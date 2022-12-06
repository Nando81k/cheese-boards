// Initialize sequelize
const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: Path.join(__dirname, 'db.sqlite')
})


// Import models
const CheeseBoard = require('./models/cheese-board')(sequelize);
const Cheese = require('./models/cheese')(sequelize);

// Define relationships
CheeseBoard.hasMany(Cheese);
Cheese.belongsTo(CheeseBoard);

// Sync database
sequelize.sync({ force: true })
