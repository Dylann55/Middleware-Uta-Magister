import { body, validationResult } from 'express-validator';

const validateStartDate = [
  body('startDate')
    .optional({ nullable: true, checkFalsy: true })
    .isISO8601().withMessage('La fecha de inicio debe ser un formato ISO8601 válido'),
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
