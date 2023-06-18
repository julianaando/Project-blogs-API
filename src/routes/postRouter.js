const express = require('express');
const { postController } = require('../controllers');
const { validateToken } = require('../middlewares/validateToken');
// const { checkFieldsRequired } = require('../middlewares/validatePost');

const router = express.Router();

router.post('/', validateToken, postController.createPost);

module.exports = router;