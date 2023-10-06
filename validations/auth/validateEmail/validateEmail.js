import { body, validationResult } from 'express-validator';

const dominiosPermitidos = ['@alumnos.uta.cl', '@academicos.uta.cl'];

const validateEmail = [
  body('email')
    .isEmail()
    .withMessage('El correo electrónico no es válido')
    .custom((value) => {
      const dominioValido = dominiosPermitidos.some((dominio) => value.endsWith(dominio));
      if (dominioValido) {
        return true;
      }
      throw new Error(`El correo electrónico debe terminar en ${dominiosPermitidos.join(' o ')}`);
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
