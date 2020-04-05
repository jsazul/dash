const {celebrate, Joi, Segments} = require('celebrate');

module.exports = {
    data: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            idThemovie: Joi.number().required()
        })
    }),
    add: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            idThemovie: Joi.number().required()
        }),
        [Segments.BODY]: Joi.object().keys({
            quality: Joi.string().required(),
            language: Joi.string().required(),
            links: Joi.array().required()
        })
    }),
    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            idThemovie: Joi.number().required(),
            type: Joi.string().required(),
            language: Joi.string().required(),
            serverCode: Joi.number().required()
        })
    })
}