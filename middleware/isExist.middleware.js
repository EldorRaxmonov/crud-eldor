const userService = require("../services/user.service");

let isExist = (req, res, next) => {
    let { username } = req.body;
    let users = userService.getUsers();
    let isUsedUsername = users.some((user) => user.username == username);
    if (isUsedUsername) {
        return res.status(400).send({
            message: "Username is in use",
        });
    } else {
        next();
    }
};

module.exports = isExist;
