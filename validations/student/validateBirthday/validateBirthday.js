import { body, validationResult } from 'express-validator';

const validateBirthday = [
  body('birthday')
    .matches(/^\d{2}-\d{2}-\d{4}$/) // Verifica si la fecha está en formato "DD-MM-YYYY"
    .withMessage('La fecha debe estar en formato "DD-MM-YYYY" (ejemplo: "01-08-2023")'),
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

export default validateBirthday;
