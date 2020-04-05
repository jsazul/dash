const {celebrate, Joi, Segments} = require('celebrate');

module.exports = {
    index: celebrate({
        [Segments.QUERY]: Joi.object().keys({
            page: Joi.number().min(1)
        })
    }),
    indexSeasson: celebrate({
        [Segments.QUERY]: Joi.object().keys({
            page: Joi.number().min(1)
        })
    }),
    indexEpisode: celebrate({
        [Segments.QUERY]: Joi.object().keys({
            page: Joi.number().min(1)
        })
    })
}