// Initialize Sequelize
const { Sequelize, sequelize } = require('./db');
// Define Cheese model
const Cheese = sequelize.define("Cheese", {
        name: Sequelize.STRING ,
        description: Sequelize.STRING ,
        rating: Sequelize.NUMBER
    })

// Export Cheese model
module.exports = {Cheese};