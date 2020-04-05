const {celebrate, Joi, Segments} = require('celebrate');

module.exports = {
    index: celebrate({
        [Segments.QUERY]: Joi.object().keys({
            page: Joi.number().min(1)
        })
    }),
    update: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            userId: Joi.string().required()
        }),
        [Segments.BODY]: Joi.object().keys({
            type: Joi.number().required()
        })
    }),
    register: celebrate({
        [Segments.BODY]: Joi.object({
            nickname: Joi.string().required(),
            user: Joi.string().required(),
            pass: Joi.string().required(),
            mail: Joi.string().email().required(),
        })
    })
}