const router = require('express').Router();
const {
  getUsers,
  getUserByID,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:id
router.route('/:id').get(getUserByID).put(updateUser).delete(deleteUser);

// /api/users/:id/friends
router.route('/:id/friends').post(addFriend);

// /api/users/:id/friends/:friendid
router.route('/:id/friends/:friendid').delete(removeFriend);

module.exports = router;
