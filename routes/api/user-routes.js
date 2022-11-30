const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

//GET all and POST at /api/users
router.route('/').get(getAllUsers).post(createUser);

//GET one, PUT, and DELETE at /api/users/:id
router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);

// GET one, PUT, and DELETE at /api/users/:id/friends/:friendId
router.route(':userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;