const bcrypt = require('bcryptjs');
const CustomError = require("../errors/CustomError");

module.exports = {
    hashPassword: async (password) => await bcrypt.hash(password, 10),
    comparePassword: async (hashPassword, password) => {
        const isPasswordsSame = await bcrypt.compare(password, hashPassword);

        if (!isPasswordsSame) {
            throw new CustomError('Wrong email or password', 400);
        }
    }
}