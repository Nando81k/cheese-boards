// Define user model
const User = sequelize => {
    return sequelize.define("user", {
        name: { type: Sequelize.STRING },
        email: { type: Sequelize.STRING },
    })
}
// Export user model
module.exports = User;