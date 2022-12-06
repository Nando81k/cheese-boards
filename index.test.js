// Initialize the sequelize
const { Sequelize, sequelize } = require('./db');
// Import models
const { Board, Cheese, User } = require('./index');



// Test that tables are created
describe ('Test that tables are created', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    });

    test("Can create a board", async () => {
        const board = await Board.create({
            name: "Test Board",
            description: "Test Description",
        });
        expect(board.name).toBe("Test Board");
        expect(board.description).toBe("Test Description");
    });

    test("Can create cheese", async () => {
        const cheese = await Cheese.create({
            name: "Test Cheese",
            description: "Test Description",
            rating: 5
        });
        expect(cheese.name).toBe("Test Cheese");
        expect(cheese.description).toBe("Test Description");
        expect(cheese.rating).toBe(5);
    });

    test("Can create user", async () => {
        const user = await User.create({
            name: "Test User",
            email: "Test Email",
        });
        expect(user.name).toBe("Test User");
        expect(user.email).toBe("Test Email");
    });

    // Test a board can have many cheeses
    test("Can create a board with cheeses", async () => {
        const board = await Board.create({
            name: "Test Board",
            description: "Test Description",
        });
        const cheese = await Cheese.create({
            name: "Test Cheese",
            description: "Test Description",
            rating: 5
        });
        await board.addCheese(cheese);
        const cheeses = await board.getCheeses();
        expect(cheeses.length).toBe(1);
        expect(cheeses[0].name).toBe("Test Cheese");
    });

    // Test a user can have many boards
    test("Can create a user with boards", async () => {
        const user = await User.create({
            name: "Test User",
            email: "Test Email",
        });
        const board = await Board.create({
            name: "Test Board",
            description: "Test Description",
        });
        await user.addBoard(board);
        const boards = await user.getBoards();
        expect(boards.length).toBe(1);
        expect(boards[0].name).toBe("Test Board");
    });

    // Test a cheese can have many boards
    test("Can create a cheese with boards", async () => {
        const cheese = await Cheese.create({
            name: "Test Cheese",
            description: "Test Description",
            rating: 5
        });
        const board = await Board.create({
            name: "Test Board",
            description: "Test Description",
        });
        await cheese.addBoard(board);
        const boards = await cheese.getBoards();
        expect(boards.length).toBe(1);
        expect(boards[0].name).toBe("Test Board");
    });

     
});









