import { body, validationResult } from 'express-validator';

const validGenders = ['Masculino', 'Femenino', 'No binario', 'Otro'];

const validateSex = [
  body('sex')
    .isString()
    .withMessage('El valor no es un string')
    .custom((value) => validGenders.includes(value.toLowerCase()))
    .withMessage('El valor del sexo no es válido'),
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

export default validateSex;
