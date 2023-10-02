import { body, validationResult } from 'express-validator';

const validateBirthday = [
  body('birthday')
    .matches(/^\d{4}-\d{2}-\d{2}$/) // Verifica si la fecha está en formato "DD-MM-YYYY"
    .withMessage('La fecha debe estar en formato "DD-MM-YYYY" (ejemplo: "2023-08-01")'),
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
