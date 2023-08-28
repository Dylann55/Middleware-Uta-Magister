import { body, validationResult } from "express-validator";

const validateMark = [
    body('locations')
      .isArray({ min: 1 })
      .withMessage('El array de locations debe contener al menos un elemento'),
  
    body('locations.*.dateHour')
      .isISO8601()
      .withMessage('El campo dateHour debe ser una fecha y hora válida en formato ISO8601'),
  
    body('locations.*.latitude')
      .isFloat({ min: -90, max: 90 })
      .withMessage('El campo latitude debe ser un número válido entre -90 y 90'),
  
    body('locations.*.longitude')
      .isFloat({ min: -180, max: 180 })
      .withMessage('El campo longitude debe ser un número válido entre -180 y 180'),
  
    body('locations.*.vehicleHasTripID')
      .isInt({ min: 1 })
      .withMessage('El campo vehicleHasTripID debe ser un número entero mayor o igual a 1'),
      (req, res, next) => {
        const errors = validationResult(req);
      
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        next();

      }
  ];

export default validateMark;