// Initialize Sequelize
const { Sequelize, sequelize } = require('./db');

// Define user model
const User = sequelize.define("User", {
        name: Sequelize.STRING,
        email: Sequelize.STRING
    })

// Export user model
module.exports = {User};