const userService = require("../services/user.service");

let userController = {
    postUser(req, res) {
        let user = userService.postUser(req.body);
        if (!user) {
            res.status(400).send({
                message: "All fields are required",
            });
        }

        res.status(200).send({
            message: "User created",
            user,
        });
    },

    getAllUsers(req, res) {
        let users = userService.getUsers();
        res.status(200).send(users);
    },

    getOneUser(req, res) {
        let { id } = req.params; // delete
        let user = userService.getUser(id);
        if (!user) {
            return res.status(404).send({
                message: "User not found",
            });
        }

        res.status(200).send(user);
    },

    updateUser(req, res) {
        let { id } = req.params;
        let updatingData = req.body;
        let updatedUser = userService.updateUser(id, updatingData);
        if (!updatedUser) {
            return res.status(404).send({
                message: "User is not found",
            });
        }
        res.status(200).send({
            message: "User is updated",
            updatedUser,
        });
    },

    deleteUser(req, res) {
        let { id } = req.params;
        let isDeleted = userService.deleteUser(id);
        if (!isDeleted) {
            return res.status(400).send({
                message: "Something went wrong or user is not found",
            });
        }
        res.status(200).send({
            message: "User is deleted from database",
        });
    },
};

module.exports = userController;
