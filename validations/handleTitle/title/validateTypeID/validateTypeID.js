import { body, validationResult } from 'express-validator';

const validateTypeID = [
  body('typeID').isString().withMessage('El typeID no es válido'),
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

export default validateTypeID;
