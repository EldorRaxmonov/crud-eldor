const { Router } = require("express");
const userController = require("../controllers/user.controller");
const isCorrect = require("../middleware/isCorrect.middleware");
const isExist = require("../middleware/isExist.middleware");

let router = Router();

router.post("/", isExist, userController.postUser);
router.get("/", userController.getAllUsers);
router.get("/:id", isCorrect, userController.getOneUser);
router.put("/:id", isCorrect, isExist, userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
