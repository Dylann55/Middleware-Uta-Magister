import { body, validationResult } from 'express-validator';

// Función para formatear la fecha en "DD-MM-YYYY"
const formatDate = (date) => {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0'); // Enero es 0!
  const yyyy = date.getFullYear();
  return `${dd}-${mm}-${yyyy}`;
};

const validateBirthday = [
  body('birthday')
    .matches(/^\d{4}-\d{2}-\d{2}$/) // Verifica si la fecha está en formato "DD-MM-YYYY"
    .withMessage(`La fecha debe estar en formato "DD-MM-YYYY" (ejemplo: "${formatDate(new Date())}")`),
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

export default validateBirthday;
