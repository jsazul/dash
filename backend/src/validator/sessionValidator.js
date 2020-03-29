const {celebrate, Joi, Segments} = require('celebrate');

module.exports = {
    authenticate: celebrate({
        [Segments.BODY]: Joi.object({
            user: Joi.string().required(),
            pass: Joi.string().required()
        })
    }),
    logOut: celebrate({
        [Segments.HEADERS]: Joi.object({
            auth_access: Joi.string().base64().required()
        }).unknown()
    }),
    validation: celebrate({
        [Segments.HEADERS]: Joi.object({
            auth_access: Joi.string().base64().required(),
            auth_token: Joi.string().base64().required()
        }).unknown()
    })
}