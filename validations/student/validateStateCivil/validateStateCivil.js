import { body, validationResult } from 'express-validator';

const validMaritalStatuses = ['soltero/a', 'casado/a', 'divorciado/a', 'viudo/a', 'otro'];

const validateStateCivil = [
  body('stateCivil')
    .isString()
    .withMessage('El valor no es un string')
    .custom((value) => validMaritalStatuses.includes(value.toLowerCase()))
    .withMessage('El estado civil no es válido'),
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

export default validateStateCivil;
