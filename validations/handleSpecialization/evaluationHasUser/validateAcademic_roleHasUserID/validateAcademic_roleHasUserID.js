import { body, validationResult } from 'express-validator';

const validateAcademic_roleHasUserID = [
  body('Academic1_roleHasUserID').isInt().withMessage('El Academic1_roleHasUserID no es válido'),
  body('Academic2_roleHasUserID').isInt().withMessage('El Academic2_roleHasUserID no es válido'),
  body('Academic3_roleHasUserID').isInt().withMessage('El Academic3_roleHasUserID no es válido'),
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
