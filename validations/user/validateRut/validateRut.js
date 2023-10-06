import { body, validationResult } from 'express-validator';

const validateRut = [
  body('rut')
    .isString()
    .withMessage('El RUT no es un string')
    .matches(/^(\d{1,2}\.)?\d{3}\.\d{3}[-][0-9kK]{1}$/)
    .withMessage('Formato de RUT inválido. Ejemplo de formato válido: "123.456.789-K"'),

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

export default validateRut;
