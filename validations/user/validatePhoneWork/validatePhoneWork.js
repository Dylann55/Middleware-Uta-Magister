import { body, validationResult } from 'express-validator';

const validatePhoneWork = [
  body('phoneWork')
    .optional()
    .isString().withMessage('El valor no es un string')
    .custom((value) => {
      if (value !== undefined && value !== null && typeof value !== 'string') {
        throw new Error('El campo debe ser una cadena vacía o un string válido');
      }
      return true;
    })
    .withMessage('El campo debe ser una cadena vacía o un string válido'),
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

export default validatePhoneWork;
