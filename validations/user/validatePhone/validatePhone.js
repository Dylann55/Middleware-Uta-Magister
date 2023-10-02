import { body, validationResult } from 'express-validator';

const validatePhone = [
  body('phone')
    .matches(/^\d{10}$/) // Verifica si el número de teléfono tiene 10 dígitos
    .withMessage('El número de teléfono debe contener exactamente 10 dígitos'),
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
