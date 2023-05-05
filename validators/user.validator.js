
const Joi = require('joi');

const {emailValidator, nameValidator, ageValidator, passwordValidator, phoneValidator} = require("./share");


module.exports = {
    newUserValidator: Joi.object({
        name: nameValidator.required(),
        age: ageValidator.required(),
        email: emailValidator.required(),
        password: passwordValidator.required(),
        phone: phoneValidator.required()
    }),

    updateUserValidator: Joi.object({
        name: nameValidator,
        age: ageValidator
    }),
}