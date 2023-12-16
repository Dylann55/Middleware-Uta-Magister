import { body, validationResult } from 'express-validator';

const validateAcademic_UserID = [
  body('academic1_userID').isInt().withMessage('El academic1_userID no es válido'),
  body('academic2_userID').isInt().withMessage('El academic2_userID no es válido'),
  body('academic3_userID').isInt().withMessage('El academic3_userID no es válido'),
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

export default validateAcademic_UserID;
