const path = require('path');
const { Sequelize, Model } = require('sequelize');

// Initialize sequelize
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'db.sqlite3')
});

module.exports = {
    sequelize,
    Sequelize,
};