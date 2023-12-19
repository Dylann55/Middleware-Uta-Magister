import { body, validationResult } from 'express-validator';

const validDepartamentTitle = ['educacio y humanidad', 'ingeniería', 'ciencias', 'medicina'];

const validateDepartamentTitle = [
  body('departamentTitle')
    .isString()
    .withMessage('El valor no es un string')
    .custom((value) => validDepartamentTitle.includes(value.toLowerCase()))
    .withMessage('El valor del Departamento del Título no es válido'),
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

export default validateDepartamentTitle;
