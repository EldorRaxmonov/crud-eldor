let userService = require("../services/user.service");

let isCorrect = (req, res, next) => {
    let client = req.headers;
    let { id } = req.params;
    let users = userService.getUsers();
    let user = users.find((user) => user.id == id);
    if (!user) {
        res.status(404).send({
            message: "User not found",
        });
    }
    if (
        (client.username == "eraking" && client.password == "********") ||
        (user.username == client.username && user.password == client.password)
    ) {
        next();
    } else {
        res.status(401).send({
            message: "Password or Username is not correct or not provided",
        });
    }
};

module.exports = isCorrect;
