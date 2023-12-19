import { body, validationResult } from 'express-validator';

const validateBodyAcademicID = [
  body('bodyAcademicID').isInt().withMessage('El bodyAcademicID no es válido'),
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

export default validateBodyAcademicID;
