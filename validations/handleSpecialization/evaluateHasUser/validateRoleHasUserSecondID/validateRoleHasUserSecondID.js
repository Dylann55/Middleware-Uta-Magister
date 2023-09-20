import { body, validationResult } from 'express-validator';

const validateRoleHasUserSecondID = [
  body('roleHasUserSecondID').isInt().withMessage('El roleHasUserSecondID no es válido'),
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

export default validateRoleHasUserSecondID;
