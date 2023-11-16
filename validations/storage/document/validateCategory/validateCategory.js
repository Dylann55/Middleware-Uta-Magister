import { body, validationResult } from 'express-validator';

const validCategory = ['Currículum', 'Fotografía', 'Carta de motivación', 'Certificado de nacimiento', 'Certificado de título', 'Fotocopia de cédula de identidad'];

const validateCategory = [
  body('category')
    .isString()
    .withMessage('El valor no es un string')
    .custom((value) => validCategory.includes(value.toLowerCase()))
    .withMessage('El valor de la categoria no es válido'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    next();
  },
];

export default validateCategory;
