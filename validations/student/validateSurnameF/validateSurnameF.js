import { body, validationResult } from "express-validator";

const validateSurnameF = [
    body('surnameF').exists().withMessage('El valor no existe'),
    body('surnameF').isString().withMessage('El valor no es string'),
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

export default validateSurnameF;