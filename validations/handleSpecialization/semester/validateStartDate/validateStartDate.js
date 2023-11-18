import { body, validationResult } from 'express-validator';

const validateStartDate = [
  body('startDate')
    .matches(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z?$/)
    .withMessage('La fecha debe estar en un formato correcto'),
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

export default validateStartDate;
