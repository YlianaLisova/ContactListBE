const router = require('express').Router();

const userController = require("../controllers/user.controller");
const userMiddleware = require("../middlewares/user.middleware");
const commonMiddleware = require("../middlewares/common.middleware");
const userQueryValidator = require('../validators/query.validator');
const authMiddleware = require('../middlewares/auth.middleware');
// const {authMiddleware, fileMiddleware, commonMiddleware} = require("../middlewares");
const userValidator = require("../validators/user.validator");

router.get('/',commonMiddleware.isDataValid(userQueryValidator.findAll, 'query'), userController.findUsers);
router.post('/', userController.createUser);

// router.get('/:id', CommonMiddleware.isIdValid,userMiddleware.isUserPresent, userController.getUserById);
// router.put('/:id', commonMiddleware.isIdValid,authMiddleware.checkAccessToken, commonMiddleware.isDataValid(userValidator.updateUserValidator),userMiddleware.isUserPresent, userController.updateUserById);
// router.delete('/:id',authMiddleware.checkAccessToken, CommonMiddleware.isIdValid,userMiddleware.isUserPresent, userController.deleteUserById);

module.exports = router;