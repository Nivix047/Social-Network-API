const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
} = require("../../controllers/userController");

// /api/user
router.route("/").get(getUsers).post(createUser);

// /api/user/:userId
router
  .route("/:userId")
  .get(getSingleUser)
  .delete(deleteUser)
  .update(updateUser);

router.module.exports = router;
