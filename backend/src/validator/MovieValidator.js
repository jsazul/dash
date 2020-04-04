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
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            themoviedb: Joi.number().required(),
            nome: Joi.string().required(),
            nome_original: Joi.string().required(),
            banner: Joi.string(),
            capa: Joi.string(),
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
    }),
    update: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            idThemovie: Joi.number().required()
        }),
        [Segments.BODY]: Joi.object().keys({
            nome: Joi.string(),
            nome_original: Joi.string(),
            banner: Joi.string(),
            capa: Joi.string(),
            descricao: Joi.string(),
            trailer: Joi.string(),
            ano: Joi.number(),
            categorias: Joi.array()
        })
    }),
}