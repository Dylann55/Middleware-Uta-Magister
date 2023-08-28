import { body, validationResult } from "express-validator";

const validateDateRecharge = [
    body('dateRecharge')
    .isISO8601()  // Verifica si la fecha está en formato ISO8601
    .withMessage('La fecha debe estar en formato ISO8601 (ejemplo: "2023-08-01T12:34:56Z")'),
    (req, res, next) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
            });
        }
        next();
    }
]

export default validateDateRecharge;