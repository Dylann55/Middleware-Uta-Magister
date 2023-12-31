import { body, validationResult } from 'express-validator';

const validateArrayBodyAcademicID = [
  body('bodyAcademicIDs')
    .isArray().withMessage('El arreglo no es válido')
    .custom((value) => {
      if (!Array.isArray(value) || value.length >= process.env.MAX_LENGHT_ARRAY_NUMBER || value.some((item) => typeof item !== 'number')) {
        throw new Error(`El arreglo debe contener números y no puede tener más de ${process.env.MAX_LENGHT_ARRAY_NUMBER} elementos`);
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

export default validateArrayBodyAcademicID;
