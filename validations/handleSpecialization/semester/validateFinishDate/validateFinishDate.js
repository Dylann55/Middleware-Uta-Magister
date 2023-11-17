import { body, validationResult } from 'express-validator';

const validateFinishDate = [
  body('finishDate')
    .optional({ nullable: true, checkFalsy: true })
    .isISO8601().withMessage('La fecha de finalización debe ser un formato ISO8601 válido'),
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

export default validateFinishDate;
