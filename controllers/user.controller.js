const {userService, passwordService} = require("../services");
const {userPresenter} = require("../presenters/user.presenter");
const User = require('../dataBase/User');

module.exports = {
    findUsers: async (req, res, next) => {
        try {
            const users = await userService.findUsers(req.query).exec();

            const usersForResponse = users.map(u => userPresenter(u));

            res.json(usersForResponse);
        } catch (e) {
            next(e);
        }
    },

    createUser: async (req, res, next) => {
        try {
            const hashedPassword = await passwordService.hashPassword(req.body.password);

            const user = await userService.createUser({...req.body, password: hashedPassword});

            const userWithPhoto = await User.findByIdAndUpdate(user._id, {new: true})

            const userForResponse = userPresenter(userWithPhoto);

            res.status(201).json(userForResponse);
        } catch (e) {
            next(e);
        }
    },
}