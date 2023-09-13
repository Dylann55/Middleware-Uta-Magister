import { body, validationResult } from 'express-validator';

const validateArrayID = [
  body('IDs')
    .isArray().withMessage('El arreglo no es válido')
    .custom((value) => {
      if (!Array.isArray(value) || value.length >= process.env.MAX_LENGHT_ARRAY_STRING || value.some((item) => typeof item !== 'string')) {
        throw new Error(`El arreglo debe contener cadenas de texto y no puede tener más de ${process.env.MAX_LENGHT_ARRAY_STRING} elementos`);
      }
      return true;
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

export default validateArrayID;
