// Define board model
const Board = sequelize => {
    return sequelize.define("board", {
        title: { type: Sequelize.STRING },
        description: { type: Sequelize.STRING}
    })
}
// Export board model
module.exports = Board;