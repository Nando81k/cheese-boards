// Initialize Sequelize
const { Sequelize, sequelize } = require('./db');

// Define board model
let Board = sequelize.define("Board", {
        
        name: Sequelize.STRING ,
        description: Sequelize.STRING
    })
// Export board model
module.exports = {Board};