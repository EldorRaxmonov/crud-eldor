let fs = require("fs");
const { v4 } = require("uuid");
let dbURL = "../database/user.json";
let userService = {
    postUser(user) {
        let { name, age, username, password } = user;
        if (!name || !age || !username || !password) {
            return false;
        }
        user = { id: v4(), name, age, username, password };
        let users = this.getUsers();
        users.push(user);

        this.addData(users);
        return user;
    },

    getUsers() {
        let users = JSON.parse(fs.readFileSync(dbURL).toString());
        return users;
    },

    addData(data) {
        fs.writeFileSync(dbURL, JSON.stringify(data));
    },

    getUser(id) {
        let users = this.getUsers();
        let user = users.find((user) => user.id == id);
        return user;
    },

    updateUser(id, updatingData) {
        let users = this.getUsers();
        let userIndex = users.findIndex((user) => user.id == id);
        users[userIndex] = {
            ...users[userIndex],
            ...updatingData,
            password: users[userIndex].password,
            id: users[userIndex].id,
        };
        users[userIndex] = {
            id: users[userIndex].id,
            name: users[userIndex].name,
            age: users[userIndex].age,
            password: users[userIndex].password,
            username: users[userIndex].username,
        };

        this.addData(users);
        return users[userIndex];
    },

    deleteUser(id) {
        let users = this.getUsers();
        let filteredUsers = users.filter((user) => user.id != id);
        this.addData(filteredUsers);
        return true;
    },
};

module.exports = userService;
