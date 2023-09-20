import { body, validationResult } from 'express-validator';

const validateEvaluateID = [
  body('evaluateID').isInt().withMessage('El evaluateID no es válido'),
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

export default validateEvaluateID;
