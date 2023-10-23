import { body, validationResult } from 'express-validator';

const validateEmail = [
  body('email')
    .isEmail()
    .withMessage('El correo electrónico no es válido')
    .custom((value) => {
      if (value.endsWith('@alumnos.uta.cl') || value.endsWith('@academicos.uta.cl')) {
        return true;
      }
      throw new Error('El correo electrónico debe terminar en @alumnos.uta.cl o @academicos.uta.cl');
    }),
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
