// Define Cheese model
const Cheese = sequelize => {
    return sequelize.define("cheese", {
        name: { type: Sequelize.STRING },
        description: { type: Sequelize.STRING },
        rating: { type: Sequelize.NUMBER },
    })
}
// Export Cheese model
module.exports = Cheese;