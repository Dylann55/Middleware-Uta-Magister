import { body, validationResult } from 'express-validator';

const validateEvaluateHasUserID = [
  body('evaluateHasUser1ID').isInt().withMessage('El evaluateHasUser1ID no es válido'),
  body('evaluateHasUser2ID').isInt().withMessage('El evaluateHasUser2ID no es válido'),
  body('evaluateHasUser3ID').isInt().withMessage('El evaluateHasUser3ID no es válido'),
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

export default validateEvaluateHasUserID;
