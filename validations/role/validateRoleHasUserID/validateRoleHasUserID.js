import { body, validationResult } from 'express-validator';

const validateRoleHasUserID = [
  body('roleHasUserID').isInt().withMessage('El roleHasUserID no es válido'),
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

export default validateRoleHasUserID;
