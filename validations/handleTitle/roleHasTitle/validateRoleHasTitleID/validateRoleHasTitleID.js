import { body, validationResult } from 'express-validator';

const validateRoleHasTitleID = [
  body('roleHasTitleID').isInt().withMessage('El roleHasTitleID no es válido'),
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

export default validateRoleHasTitleID;
