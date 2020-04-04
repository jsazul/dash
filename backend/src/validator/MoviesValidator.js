const {celebrate, Joi, Segments} = require('celebrate');

module.exports = {
    index: celebrate({
        [Segments.QUERY]: Joi.object().keys({
            page: Joi.number().min(1)
        })
    }),
    data: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            idThemovie: Joi.number().required()
        })
    })
}