const {celebrate, Joi, Segments} = require('celebrate');

module.exports = {
    register: celebrate({
        [Segments.BODY]: Joi.object({
            nickname: Joi.string().required(),
            user: Joi.string().required(),
            pass: Joi.string().required(),
            mail: Joi.string().email().required(),
        })
    }),
}