import { body, validationResult } from 'express-validator';

const validateSpecializationHasSemesterID = [
  body('specializationHasSemesterID').isInt().withMessage('El SpecializationHasSemesterID no es válido'),
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

export default validateSpecializationHasSemesterID;
