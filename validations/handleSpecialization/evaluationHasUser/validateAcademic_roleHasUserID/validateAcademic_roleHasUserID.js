import { body, validationResult } from 'express-validator';

const validateAcademic_roleHasUserID = [
  body('academic1_roleHasUserID').isInt().withMessage('El academic1_roleHasUserID no es válido'),
  body('academic2_roleHasUserID').isInt().withMessage('El academic2_roleHasUserID no es válido'),
  body('academic3_roleHasUserID').isInt().withMessage('El academic3_roleHasUserID no es válido'),
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

export default validateAcademic_roleHasUserID;
