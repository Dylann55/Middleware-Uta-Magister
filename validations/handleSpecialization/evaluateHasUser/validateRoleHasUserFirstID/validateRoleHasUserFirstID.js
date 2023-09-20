import { body, validationResult } from 'express-validator';

const validateRoleHasUserFirstID = [
  body('roleHasUserFirstID').isInt().withMessage('El roleHasUserFirstID no es válido'),
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

export default validateRoleHasUserFirstID;
