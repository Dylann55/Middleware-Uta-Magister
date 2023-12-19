import { body, validationResult } from 'express-validator';

const validateYearTitle = [
  body('yearTitle').isInt().withMessage('El yearTitle no es válido'),
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

export default validateYearTitle;
