import { body, validationResult } from 'express-validator';

const validateEmail = [
  body('email').isEmail().withMessage('El correo electrónico no es válido'),
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

export default validateEmail;
