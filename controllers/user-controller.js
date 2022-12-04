const { User, Thought } = require('../models');

const userController = {
    //GET all users (getAllUsers)
    getAllUsers(req, res) {
        User.find({})
            .populate({
                path: 'thoughts',
                select: '-_v'
            })
            .populate({
                path: 'friends',
                select: '-_v'
            })
            .select('-_v')
            .sort({ _id: -1 })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    //GET a single user by id and populate thought and friend data (getUserById)
    getUserById({ params }, res) {
        User.findOne({ _id: params.userId })
            .populate({
                path: 'thoughts',
                select: '-_v'
            })
            .populate({
                path: 'friends',
                select: '-_v'
            })
            .select('-_v')
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    //POST a new user (createUser)
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    },

    //PUT to update a user by its id (updateUser)
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.userId }, body, { new: true, runValidators: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },

    //DELETE user and thoughts by its id (deleteUser)
    deleteUser({ params }, res) {
        User.findOne({ _id: params.userId })
            .populate({
                path: 'thoughts',
                select: '-_v'
            })
            .then((dbUserData) => {

                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }

                Thought.deleteMany({ _id: { $in: dbUserData.thoughts } });
                User.deleteOne({ _id: params.userId })

                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },

    //POST a new friend to a user's friend list (addFriend)
    addFriend({ params }, res) {
        User.findOneAndUpdate({ _id: params.userId }, { $push: { friends: params.friendId } }, { new: true, runValidators: true })
            .populate({
                path: 'friends',
                select: '-_v'
            })
            .select('-_v')
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },

    //DELETE remove a friend from user's friend list (deleteFriend)
    deleteFriend({ params }, res) {
        User.findOneAndUpdate({ _id: params.userId }, { $pull: { friends: params.friendId } }, { new: true, runValidators: true })
            .populate({
                path: 'friends',
                select: '-_v'
            })
            .select('-_v')
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    }

    //BONUS: DELETE user's associated thoughts when deleted

};

module.exports = userController;