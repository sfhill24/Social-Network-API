const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtsById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReation
} = require('../../controllers/thought-controller');

//GET all and POST at /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

//GET one, PUT, and DELETE at /api/thoughts/:thoughtId
router.route(':thoughtId').get(getThoughtsById).put(updateThought).delete(deleteThought);

//POST at /api/thoughts/:thoughtId/reactions
router.route(':thoughtId/reactions').post(createReaction);

//DELETE at /api/thoughts/:thoughtId/reactions/:reactionId
router.route(':thoughtId/reactions/:reactionId').delete(deleteReation);

module.exports = router;