import { body, validationResult } from 'express-validator';

const validateSurnameM = [
  body('surnameM').exists().withMessage('El valor no existe'),
  body('surnameM').isString().withMessage('El valor no es string'),
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

export default validateSurnameM;
