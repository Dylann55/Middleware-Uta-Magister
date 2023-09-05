import { body, validationResult } from 'express-validator';

const validateArrayRoleID = [
  body('roleIDs').isArray().withMessage('El RoleIDs no es válido'),
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

export default validateArrayRoleID;
