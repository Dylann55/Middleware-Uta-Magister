/* eslint-disable no-restricted-syntax */
import { body, validationResult } from 'express-validator';

const validateRubricHasQuestionArray = [
  body('rubricHasQuestionArray')
    .isArray().withMessage('El arreglo no es válido')
    .custom((value) => {
      if (!Array.isArray(value) || value.length >= process.env.MAX_LENGTH_ARRAY_DATA) {
        throw new Error(`El arreglo debe contener elementos y no puede tener más de ${process.env.MAX_LENGTH_ARRAY_DATA} elementos`);
      }
      for (const item of value) {
        if (
          typeof item.rubricHasQuestionID !== 'number'
          || typeof item.questionID !== 'number'
          || typeof item.rubricID !== 'number'
          || typeof item.excellent !== 'string'
          || typeof item.good !== 'string'
          || typeof item.medium !== 'string'
          || typeof item.bad !== 'string'
        ) {
          throw new Error('Cada elemento del arreglo debe tener las propiedades questionID y rubricID como enteros, y excellent, good, medium, bad como cadenas de texto');
        }
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

export default validateRubricHasQuestionArray;
