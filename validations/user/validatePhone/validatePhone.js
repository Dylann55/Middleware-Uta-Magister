import { body, validationResult } from 'express-validator';

const validatePhone = [
  body('phone')
    .matches(/^\d{9}$/)
    .withMessage('El número de teléfono debe contener exactamente 9 dígitos(incluir el 9 inicial)'),
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

export default validatePhone;
