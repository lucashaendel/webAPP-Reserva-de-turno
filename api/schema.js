const Joi = require("joi");

module.exports = {
  signupSchema: Joi.object({
    fullName: Joi.string().required(),
    dni: Joi.number().required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .pattern(
        new RegExp(
          /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}).*$/
        )
      )
      .required()
      .messages({
        "string.pattern.base":
          "The password should be minimum 8 characters long , and include at least one uppercase,one lowercase and a number",
      }),
  }),
  loginSchema: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string()
      .pattern(
        new RegExp(
          /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}).*$/
        )
      )
      .required()
      .messages({
        "string.pattern.base":
          "The password should be minimum 8 characters long , and include at least one uppercase,one lowercase and a number",
      }),
  }),
};
