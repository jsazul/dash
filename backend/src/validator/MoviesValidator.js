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
    }),
    getLink: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            idThemovie: Joi.number().required()
        })
    }),
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            themoviedb: Joi.number().required(),
            nome: Joi.string().required(),
            nome_original: Joi.string().required(),
            banner: Joi.string().required(),
            capa: Joi.string().required(),
            descricao: Joi.string().required(),
            trailer: Joi.string(),
            ano: Joi.number().required(),
            categorias: Joi.array().required()
        })
    }),
    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            idThemovie: Joi.number().required()
        })
    })
}